import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    
    const {
      fullName,
      email,
      company,
      title,
      signedAt,
      userAgent,
      timestamp,
    } = data

    // Format the email content
    const emailSubject = `[WEEK-CHAIN] New NDA Signed - ${fullName}`
    const emailBody = `
A new investor has signed the NDA and registered in the WEEK-CHAIN Data Room.

INVESTOR DETAILS
================
Name: ${fullName}
Email: ${email}
Company: ${company || "Not provided"}
Title: ${title || "Not provided"}

SIGNATURE DETAILS
=================
Signed At: ${signedAt || timestamp}
User Agent: ${userAgent}

---
This is an automated notification from the WEEK-CHAIN Data Room.
The investor has agreed to the Non-Disclosure Agreement and can now access confidential documents.

For follow-up, contact the investor at: ${email}
    `.trim()

    // Log the notification (in production, you would send an actual email)
    console.log("=== NDA NOTIFICATION ===")
    console.log("To: corporativo@morises.com")
    console.log("Subject:", emailSubject)
    console.log("Body:", emailBody)
    console.log("========================")

    // In production, integrate with an email service like:
    // - Resend
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP
    
    // Example with Resend (uncomment when API key is available):
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'dataroom@week-chain.com',
    //   to: 'corporativo@morises.com',
    //   subject: emailSubject,
    //   text: emailBody,
    // })

    return NextResponse.json({ 
      success: true, 
      message: "NDA notification sent successfully" 
    })
  } catch (error) {
    console.error("Error sending NDA notification:", error)
    return NextResponse.json(
      { success: false, error: "Failed to send notification" },
      { status: 500 }
    )
  }
}
