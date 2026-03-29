"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function handleBooking(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const dateStr = formData.get("date");
  const timeStr = formData.get("time");
  const message = formData.get("message") || "No message provided.";

  const adminEmail = "amitakon99@gmail.com";

  try {
    await transporter.sendMail({
      from: `"The Kinetic Curator (System)" <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      replyTo: email,
      subject: `New Event Booking: ${name}`,
      html: `
        <div style="font-family: sans-serif; background-color: #e7e7e7; color: #0e0e0f; padding: 26px; ">
          <h1 style="color: #4c5580; font-size: 24px; margin-bottom: 20px;">New Booking Request</h1>
          <p style="font-size: 16px; margin-bottom: 10px;"><strong>Client Name:</strong> ${name}</p>
          <p style="font-size: 16px; margin-bottom: 20px;"><strong>Client Email:</strong> ${email}</p>
          <div style="background-color: #1a191b; padding: 10px; border-radius: 4px; color: #ffffff;">
            <p style="margin: 0 0 6px 0; font-size: 14px; text-transform: uppercase; color: #97a9ff; letter-spacing: 1px;">Date:</p>
            <p style="margin: 0 0 12px 0; font-size: 16px; line-height: 1.6; color: #ffffff;">${dateStr}</p>
            <p style="margin: 0 0 6px 0; font-size: 14px; text-transform: uppercase; color: #97a9ff; letter-spacing: 1px;">Time:</p>
            <p style="margin: 0 0 12px 0; font-size: 16px; line-height: 1.6; color: #ffffff;">${timeStr}</p>
            <p style="margin: 0 0 6px 0; font-size: 14px; text-transform: uppercase; color: #97a9ff; letter-spacing: 1px;">Message:</p>
            <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #ffffff;">${message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #0e0e0f;">The Kinetic Curator - High Performance Events</p>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"The Kinetic Curator" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Your Booking at The Kinetic Curator is Confirmed!`,
      html: `
        <div style="font-family: sans-serif; background-color: #0e0e0f; color: #ffffff; padding: 40px; border-radius: 8px;">
          <h1 style="color: #97a9ff; font-size: 24px; margin-bottom: 20px;">Booking Confirmed</h1>
          <p style="font-size: 16px; margin-bottom: 10px;">Hi ${name},</p>
          <p style="font-size: 16px; margin-bottom: 20px;">We've successfully scheduled your "Architect Strategy" session. Our curators are preparing for your high-performance experience.</p>
          <div style="background-color: #1a191b; padding: 20px; border-radius: 4px; margin-bottom: 20px;">
            <p style="margin: 0; font-size: 18px;"><strong>Date:</strong> ${dateStr}</p>
            <p style="margin: 0; font-size: 18px;"><strong>Time:</strong> ${timeStr}</p>
          </div>
          <p style="font-size: 16px;">We have received your message and will keep it in mind for our session.</p>
          <p style="font-size: 16px;">We look forward to redefining your kinetic edge.</p>
          <p style="margin-top: 30px; font-size: 12px; color: #adaaab;">The Kinetic Curator - High Performance Events</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Booking Error:", error);
    return {
      success: false,
      error:
        "Failed to send booking notification. Please check your EMAIL_USER and EMAIL_PASS.",
    };
  }
}
