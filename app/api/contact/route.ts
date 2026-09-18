import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      message,
    } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          error: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Solunist Research Website <website@solunistresearch.com>",
      to: ["krgiri20mca1@gmail.com"],
      replyTo: email,
      subject: `New Website Enquiry from ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b;">

          <h2 style="color: #0f172a;">
            New Website Enquiry
          </h2>

          <p>
            A new enquiry has been submitted through the
            Solunist Research website.
          </p>

          <hr />

          <h3>Contact Details</h3>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Phone:</strong> ${phone}
          </p>

          <p>
            <strong>Company:</strong> ${company || "Not provided"}
          </p>

          <h3>Project Details</h3>

          <p>
            ${message.replace(/\n/g, "<br />")}
          </p>

          <hr />

          <p style="color: #64748b; font-size: 13px;">
            This enquiry was submitted through the
            Solunist Research website.
          </p>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Unable to send your message.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}