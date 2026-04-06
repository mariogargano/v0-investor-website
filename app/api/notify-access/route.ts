import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const {
      userType,
      fullName,
      email,
      company,
      title,
      ndaSigned,
      accessTime,
      ipAddress,
      userAgent,
    } = data

    // Email content
    const subject = `[WEEK-CHAIN Data Room] New ${userType} Access: ${fullName}`
    
    const emailBody = `
WEEK-CHAIN DATA ROOM - ACCESS NOTIFICATION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACCESS DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

User Type: ${userType}
Full Name: ${fullName}
Email: ${email}
${company ? `Company: ${company}` : ""}
${title ? `Title: ${title}` : ""}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NDA STATUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NDA Signed: ${ndaSigned ? "YES" : "NO (Team Member)"}
${ndaSigned ? `NDA Signature: ${fullName}` : ""}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECHNICAL DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Access Time: ${accessTime}
IP Address: ${ipAddress || "Not available"}
User Agent: ${userAgent || "Not available"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an automated notification from the WEEK-CHAIN Data Room.
`

    // In production, integrate with email service (SendGrid, Resend, etc.)
    // For now, log the access and return success
    console.log("=== DATA ROOM ACCESS NOTIFICATION ===")
    console.log("To: corporativo@morises.com")
    console.log("Subject:", subject)
    console.log(emailBody)
    console.log("=====================================")

    // Store access log (in production, save to database)
    const accessLog = {
      id: `access_${Date.now()}`,
      ...data,
      notifiedAt: new Date().toISOString(),
    }

    return NextResponse.json({ 
      success: true, 
      message: "Access notification sent",
      accessId: accessLog.id 
    })
  } catch (error) {
    console.error("Error sending access notification:", error)
    return NextResponse.json(
      { success: false, error: "Failed to send notification" },
      { status: 500 }
    )
  }
}
