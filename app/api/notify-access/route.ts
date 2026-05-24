import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const {
      userType,
      accessTime,
      userAgent,
    } = data

    // Log the access (in production, save to database and send email)
    console.log("=== DATA ROOM ACCESS ===")
    console.log("User Type:", userType)
    console.log("Access Time:", accessTime)
    console.log("User Agent:", userAgent)
    console.log("========================")

    return NextResponse.json({ 
      success: true, 
      message: "Access logged",
    })
  } catch (error) {
    console.error("Error logging access:", error)
    return NextResponse.json(
      { success: false, error: "Failed to log access" },
      { status: 500 }
    )
  }
}
