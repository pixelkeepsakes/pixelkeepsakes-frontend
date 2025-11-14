import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_SCxGeWCi_9J7mdC4TRXxWyY2hfsmTJoFT"); // Your Resend API key

export async function POST(req: Request) {
  try {
    const formData = await req.json(); // Parse the JSON form data

    // Send the email using the Resend SDK
    await resend.emails.send({
      from: "hello@pixelkeepsakes.com", // Verified sender domain
      to: "hello@pixelkeepsakes.com", // Your own email
      subject: "New Contact Form Submission",
      html: `
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong><br/>${formData.message}</p>
        `, 
    });

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    // TypeScript check for 'error' being an instance of Error
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      { message: "Error sending message.", error: errorMessage },
      { status: 500 }
    );
  }
}