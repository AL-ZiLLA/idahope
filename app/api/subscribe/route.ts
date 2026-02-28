import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    const BUTTONDOWN_API_KEY = process.env.BUTTONDOWN_API_KEY

    if (!BUTTONDOWN_API_KEY) {
      console.error('BUTTONDOWN_API_KEY not configured')
      return NextResponse.json(
        { error: 'Newsletter service not configured. Please try again later.' },
        { status: 500 }
      )
    }

    // Subscribe to Buttondown
    const response = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${BUTTONDOWN_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        tags: ['idahope-blog'],
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      // Check for already subscribed
      if (response.status === 400 && data.email?.[0]?.includes('already exists')) {
        return NextResponse.json(
          { error: 'This email is already subscribed!' },
          { status: 400 }
        )
      }

      console.error('Buttondown API error:', data)
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: response.status }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
