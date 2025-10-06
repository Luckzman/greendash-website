import { NextRequest, NextResponse } from 'next/server';
import { randomInt } from 'crypto';

// In-memory storage for verification codes (in production, use Redis or database)
const verificationCodes = new Map<string, { code: string; expiresAt: number; email: string; verified?: boolean }>();

// Clean up expired codes every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of verificationCodes.entries()) {
    if (value.expiresAt < now) {
      verificationCodes.delete(key);
    }
  }
}, 5 * 60 * 1000);

export async function POST(request: NextRequest) {
  try {
    const { email, action, code } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (action === 'send') {
      // Generate verification code
      const verificationCode = randomInt(100000, 999999).toString();
      const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

      // Store verification code
      verificationCodes.set(email, { code: verificationCode, expiresAt, email });

      // Send verification email
      await sendVerificationEmail(email, verificationCode);

      return NextResponse.json({
        success: true,
        message: 'Verification code sent to your email'
      });

    } else if (action === 'verify') {
      if (!code) {
        return NextResponse.json({ error: 'Verification code is required' }, { status: 400 });
      }

      const storedData = verificationCodes.get(email);
      if (!storedData) {
        return NextResponse.json({ error: 'No verification code found for this email' }, { status: 400 });
      }

      if (storedData.expiresAt < Date.now()) {
        verificationCodes.delete(email);
        return NextResponse.json({ error: 'Verification code has expired' }, { status: 400 });
      }

      if (storedData.code !== code) {
        return NextResponse.json({ error: 'Invalid verification code' }, { status: 400 });
      }

      // Verification successful - mark as verified
      verificationCodes.set(email, { ...storedData, verified: true });

      return NextResponse.json({
        success: true,
        message: 'Email verified successfully'
      });

    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

  } catch (error) {
    console.error('Email verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Mailtrap email service integration
async function sendVerificationEmail(email: string, code: string) {
  const MAILTRAP_API_KEY = process.env.MAILTRAP_API_KEY;
  const MAILTRAP_SENDER_EMAIL = process.env.MAILTRAP_SENDER_EMAIL || 'noreply@greendash-website.vercel.app';

  console.log('=== EMAIL DEBUG INFO ===');
  console.log('Email:', email);
  console.log('Code:', code);
  console.log('MAILTRAP_API_KEY exists:', !!MAILTRAP_API_KEY);
  console.log('MAILTRAP_SENDER_EMAIL:', MAILTRAP_SENDER_EMAIL);

  if (!MAILTRAP_API_KEY) {
    console.log(`[DEVELOPMENT MODE] Verification code for ${email}: ${code}`);
    console.log('To enable email sending, add MAILTRAP_API_KEY to your .env.local file');
    return;
  }

  try {
    console.log('Sending email via Mailtrap...');
    
    const response = await fetch('https://send.api.mailtrap.io/api/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MAILTRAP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: {
          email: MAILTRAP_SENDER_EMAIL,
          name: 'GreenDash'
        },
        to: [
          {
            email: email
          }
        ],
        subject: 'Verify your email address - GreenDash',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2d5a27; margin: 0;">GreenDash</h1>
              <p style="color: #666; margin: 5px 0 0 0;">Simplifying ESG Reporting</p>
            </div>
            
            <h2 style="color: #2d5a27; margin-bottom: 20px;">Email Verification</h2>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              Thank you for your interest in GreenDash! Please verify your email address by entering the code below:
            </p>
            
            <div style="background-color: #f8f9fa; border: 2px solid #2d5a27; border-radius: 8px; padding: 30px; text-align: center; margin: 30px 0;">
              <h1 style="color: #2d5a27; font-size: 36px; margin: 0; letter-spacing: 8px; font-family: monospace;">${code}</h1>
            </div>
            
            <p style="color: #666; font-size: 14px; margin-bottom: 20px;">
              This verification code will expire in 10 minutes.
            </p>
            
            <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 4px; padding: 15px; margin: 20px 0;">
              <p style="color: #856404; margin: 0; font-size: 14px;">
                <strong>Security Note:</strong> If you didn't request this verification, please ignore this email. Your email address will not be verified.
              </p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
            
            <div style="text-align: center; color: #666; font-size: 12px;">
              <p style="margin: 0;">GreenDash - Simplifying ESG Reporting powered by AI</p>
              <p style="margin: 5px 0 0 0;">Build your Sustainability Report in line with CSRD</p>
            </div>
          </div>
        `,
        text: `
          GreenDash - Email Verification
          
          Thank you for your interest in GreenDash! Please verify your email address by entering the code below:
          
          Verification Code: ${code}
          
          This verification code will expire in 10 minutes.
          
          If you didn't request this verification, please ignore this email.
          
          ---
          GreenDash - Simplifying ESG Reporting powered by AI
          Build your Sustainability Report in line with CSRD
        `
      })
    });

    console.log('Mailtrap response status:', response.status);
    console.log('Mailtrap response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Mailtrap API error:', response.status, errorData);
      throw new Error(`Mailtrap API error: ${response.status} - ${errorData}`);
    }

    const result = await response.json();
    console.log('Email sent successfully via Mailtrap:', result);
    console.log('=== EMAIL SENT SUCCESSFULLY ===');

  } catch (error) {
    console.error('Failed to send verification email:', error);
    console.log(`[FALLBACK] Verification code for ${email}: ${code}`);
    throw error;
  }
}
