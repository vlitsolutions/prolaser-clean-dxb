import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  location?: string;
  serviceType: string;
  projectDetails?: string;
  message?: string;
  captcha?: string;
}

function getSmtpConfig() {
  const username = process.env.SMTP_USERNAME;
  const password = process.env.SMTP_PASSWORD;
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;

  if (!username || !password || !host || !port) {
    throw new Error('Missing SMTP configuration. Required: SMTP_USERNAME, SMTP_PASSWORD, SMTP_HOST, SMTP_PORT');
  }

  return {
    user: username,
    pass: password,
    host,
    port: parseInt(port, 10)
  };
}

function validateFormData(data: Record<string, unknown>): ContactFormData {
  const errors: string[] = [];

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Name is required');
  }

  if (!data.email || typeof data.email !== 'string') {
    errors.push('Email is required');
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push('Invalid email format');
    }
  }

  if (!data.serviceType || typeof data.serviceType !== 'string' || data.serviceType.trim().length === 0) {
    errors.push('Service type is required');
  }

  if (errors.length > 0) {
    throw new Error(`Validation failed: ${errors.join(', ')}`);
  }

  return {
    name: (data.name as string).trim(),
    email: (data.email as string).trim(),
    phone: data.phone ? (data.phone as string).trim() || undefined : undefined,
    company: data.company ? (data.company as string).trim() || undefined : undefined,
    location: data.location ? (data.location as string).trim() || undefined : undefined,
    serviceType: (data.serviceType as string).trim(),
    projectDetails: data.projectDetails ? (data.projectDetails as string).trim() || undefined : undefined,
    message: data.message ? (data.message as string).trim() || undefined : undefined,
    captcha: data.captcha as string | undefined
  };
}

async function verifyCaptcha(captcha: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.warn('RECAPTCHA_SECRET_KEY not found, skipping captcha verification');
    return true; // Allow form submission if no secret key is configured
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${captcha}`,
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('CAPTCHA verification error:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const body = await request.json();
    const formData = validateFormData(body);

    // Verify CAPTCHA
    if (formData.captcha) {
      const captchaValid = await verifyCaptcha(formData.captcha);
      if (!captchaValid) {
        return NextResponse.json(
          { error: 'CAPTCHA verification failed. Please try again.' },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { error: 'CAPTCHA is required' },
        { status: 400 }
      );
    }

    // Get SMTP configuration
    const { user, pass, host, port } = getSmtpConfig();

    //console.log('SMTP Config:', { host, port, user: user });

    // Create transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: true, // true for 465, false for other ports
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000, // 10 seconds
      socketTimeout: 10000, // 10 seconds
      auth: {
        user,
        pass,
      },
      authMethod: 'LOGIN' // Try LOGIN instead of PLAIN
    });

    // Create email content
    const emailSubject = `New Contact Form Submission - ${formData.serviceType}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Contact Form Submission</h2>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #007bff; margin-bottom: 15px;">Contact Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${formData.email}" style="color: #007bff;">${formData.email}</a></td>
            </tr>
            ${formData.phone ? `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${formData.phone}" style="color: #007bff;">${formData.phone}</a></td>
            </tr>
            ` : ''}
            ${formData.company ? `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.company}</td>
            </tr>
            ` : ''}
            ${formData.location ? `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Location:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.location}</td>
            </tr>
            ` : ''}
          </table>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #007bff; margin-bottom: 15px;">Service Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Service Type:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.serviceType}</td>
            </tr>
            ${formData.projectDetails ? `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Project Details:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.projectDetails}</td>
            </tr>
            ` : ''}
          </table>
        </div>

        ${formData.message ? `
        <div style="margin: 20px 0;">
          <h3 style="color: #007bff; margin-bottom: 15px;">Additional Message</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
            ${formData.message.replace(/\n/g, '<br>')}
          </div>
        </div>
        ` : ''}

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>From:</strong> PROLASER CLEAN DXB Contact Form</p>
        </div>
      </div>
    `;

    const emailText = `
      New Contact Form Submission - ${formData.serviceType}
      
      Contact Information:
      - Name: ${formData.name}
      - Email: ${formData.email}
      ${formData.phone ? `- Phone: ${formData.phone}` : ''}
      ${formData.company ? `- Company: ${formData.company}` : ''}
      ${formData.location ? `- Location: ${formData.location}` : ''}
      
      Service Information:
      - Service Type: ${formData.serviceType}
      ${formData.projectDetails ? `- Project Details: ${formData.projectDetails}` : ''}
      
      ${formData.message ? `Additional Message:\n${formData.message}` : ''}
      
      Submitted: ${new Date().toLocaleString()}
      From: PROLASER CLEAN DXB Contact Form
    `;

    // Send email
    await transporter.sendMail({
      from: user,
      to: user, // Send to the same email address (business email)
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
      replyTo: formData.email, // Set reply-to as the customer's email
    });

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof Error) {
      if (error.message.includes('Validation failed')) {
        return NextResponse.json(
          { error: error.message },
          { status: 400 }
        );
      }

      if (error.message.includes('Missing SMTP configuration')) {
        return NextResponse.json(
          { error: 'Server configuration error' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}