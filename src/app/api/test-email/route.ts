import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const MAILTRAP_API_KEY = process.env.MAILTRAP_API_KEY;
  const MAILTRAP_SENDER_EMAIL = process.env.MAILTRAP_SENDER_EMAIL;

  return NextResponse.json({
    debug: {
      MAILTRAP_API_KEY_exists: !!MAILTRAP_API_KEY,
      MAILTRAP_API_KEY_length: MAILTRAP_API_KEY ? MAILTRAP_API_KEY.length : 0,
      MAILTRAP_SENDER_EMAIL: MAILTRAP_SENDER_EMAIL,
      environment: process.env.NODE_ENV
    },
    instructions: {
      step1: "Check if MAILTRAP_API_KEY is set in your .env.local file",
      step2: "Verify your Mailtrap API key is correct",
      step3: "Check Mailtrap dashboard for sent emails",
      step4: "Check spam folder",
      step5: "Look at server console logs for detailed debug info"
    }
  });
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Test email sending
    const MAILTRAP_API_KEY = process.env.MAILTRAP_API_KEY;
    const MAILTRAP_SENDER_EMAIL = process.env.MAILTRAP_SENDER_EMAIL || 'noreply@greendash-website.vercel.app';

    if (!MAILTRAP_API_KEY) {
      return NextResponse.json({
        success: false,
        error: 'MAILTRAP_API_KEY not configured',
        debug: {
          MAILTRAP_API_KEY_exists: false,
          MAILTRAP_SENDER_EMAIL: MAILTRAP_SENDER_EMAIL
        }
      });
    }

    const response = await fetch('https://send.api.mailtrap.io/api/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MAILTRAP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: {
          email: MAILTRAP_SENDER_EMAIL,
          name: 'GreenDash Test'
        },
        to: [
          {
            email: email
          }
        ],
        subject: 'Test Email - GreenDash Email Verification',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #2d5a27;">Test Email</h1>
            <p>This is a test email to verify that Mailtrap is working correctly.</p>
            <p><strong>If you receive this email, your email verification system is working!</strong></p>
            <hr>
            <p style="color: #666; font-size: 12px;">GreenDash - Email Verification Test</p>
          </div>
        `,
        text: `Test Email - GreenDash Email Verification\n\nThis is a test email to verify that Mailtrap is working correctly.\n\nIf you receive this email, your email verification system is working!\n\n---\nGreenDash - Email Verification Test`
      })
    });

    const result = await response.json();

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      result: result,
      debug: {
        MAILTRAP_API_KEY_exists: !!MAILTRAP_API_KEY,
        MAILTRAP_SENDER_EMAIL: MAILTRAP_SENDER_EMAIL,
        email_sent_to: email
      }
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      debug: {
        MAILTRAP_API_KEY_exists: !!process.env.MAILTRAP_API_KEY,
        MAILTRAP_SENDER_EMAIL: process.env.MAILTRAP_SENDER_EMAIL
      }
    }, { status: 500 });
  }
}

