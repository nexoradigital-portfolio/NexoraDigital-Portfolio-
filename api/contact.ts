import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

export default async function handler(req: VercelRequest | any, res: VercelResponse | any) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    console.warn(`[API/contact] Rejected ${req.method} request. Only POST is allowed.`);
    res.status(405).json({ success: false, error: "Method not allowed. Please use POST." });
    return;
  }

  console.log(`[API/contact] Incoming inquiry submission at ${new Date().toISOString()}`);

  try {
    // Safely extract request body regardless of runtime environment
    let body = req.body;
    if (!body && typeof req.on === "function") {
      body = await new Promise((resolve) => {
        let chunkData = "";
        req.on("data", (chunk: any) => {
          chunkData += chunk;
        });
        req.on("end", () => {
          try {
            resolve(chunkData ? JSON.parse(chunkData) : {});
          } catch {
            resolve({});
          }
        });
        req.on("error", () => resolve({}));
      });
    } else if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        // preserve as-is
      }
    }

    const {
      name,
      email,
      phone = "Not provided",
      service = "Website Development",
      budget = "Not specified",
      timeline = "Not specified",
      message = "",
      source = "Portfolio Contact Form",
    } = body || {};

    console.log(`[API/contact] Processing inquiry from: "${name}" <${email}> via [${source}]`);

    // Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      res.status(400).json({ success: false, error: "Visitor name is required." });
      return;
    }

    if (!email || typeof email !== "string" || !email.trim() || !email.includes("@")) {
      res.status(400).json({ success: false, error: "A valid email address is required." });
      return;
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      res.status(400).json({ success: false, error: "Project details/message are required." });
      return;
    }

    // Inspect Environment Variables
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.RESEND_TO_EMAIL || "nexoradigital1143@gmail.com";
    const senderEmail = process.env.RESEND_FROM_EMAIL || "Nexora Digital <onboarding@resend.dev>";

    if (!resendApiKey) {
      const errorMsg =
        "RESEND_API_KEY is not configured on the server. Please add your Resend API Key to your Vercel Project Settings > Environment Variables, then redeploy.";
      console.error(`[API/contact] Configuration Error: ${errorMsg}`);
      res.status(500).json({
        success: false,
        error: errorMsg,
      });
      return;
    }

    console.log(`[API/contact] RESEND_API_KEY is detected (length: ${resendApiKey.length}).`);
    console.log(`[API/contact] Dispatching email: from "${senderEmail}" -> to "${recipientEmail}" (replyTo: "${email}")`);

    const resend = new Resend(resendApiKey);

    const submissionTime = new Date().toLocaleString("en-US", {
      timeZone: "UTC",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0c0c0c; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #ffffff;">
  <div style="max-width: 600px; margin: 40px auto; background-color: #141414; border: 1px solid #262626; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
    
    <!-- Header -->
    <div style="background-color: #000000; padding: 32px 36px; border-bottom: 2px solid #A4C639;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <span style="font-size: 20px; font-weight: 800; letter-spacing: 2px; color: #ffffff; text-transform: uppercase;">
          NEXORA <span style="color: #A4C639;">DIGITAL</span>
        </span>
        <span style="background-color: #1a2608; color: #A4C639; font-size: 11px; font-weight: 700; text-transform: uppercase; padding: 4px 10px; border-radius: 9999px; border: 1px solid #607A16;">
          New Client Inquiry
        </span>
      </div>
    </div>

    <!-- Body -->
    <div style="padding: 36px;">
      <h2 style="margin: 0 0 8px 0; font-size: 22px; font-weight: 700; color: #ffffff;">
        New submission received from ${escapeHtml(name)}
      </h2>
      <p style="margin: 0 0 28px 0; font-size: 13px; color: #888888;">
        Submitted via <strong>${escapeHtml(source)}</strong> on ${submissionTime} UTC
      </p>

      <!-- Client Details Card -->
      <div style="background-color: #1a1a1a; border: 1px solid #2c2c2c; border-radius: 12px; padding: 20px; margin-bottom: 28px;">
        <h3 style="margin: 0 0 16px 0; font-size: 12px; font-weight: 700; color: #A4C639; text-transform: uppercase; letter-spacing: 1px;">
          Client Information
        </h3>
        
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #888888; width: 140px;">Name:</td>
            <td style="padding: 8px 0; color: #ffffff; font-weight: 600;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #888888;">Email:</td>
            <td style="padding: 8px 0;">
              <a href="mailto:${escapeHtml(email)}" style="color: #A4C639; text-decoration: none; font-weight: 600;">
                ${escapeHtml(email)}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #888888;">Phone / WhatsApp:</td>
            <td style="padding: 8px 0; color: #ffffff; font-weight: 600;">
              ${phone && phone !== "Not provided" ? `<a href="tel:${escapeHtml(phone)}" style="color: #ffffff; text-decoration: none;">${escapeHtml(phone)}</a>` : '<span style="color: #666666;">Not provided</span>'}
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #888888;">Service Required:</td>
            <td style="padding: 8px 0; color: #ffffff; font-weight: 600;">
              <span style="background-color: #242424; padding: 3px 8px; border-radius: 6px; border: 1px solid #383838;">
                ${escapeHtml(service)}
              </span>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #888888;">Project Budget:</td>
            <td style="padding: 8px 0; color: #ffffff; font-weight: 600;">${escapeHtml(budget)}</td>
          </tr>
          ${timeline && timeline !== "Not specified" ? `
          <tr>
            <td style="padding: 8px 0; color: #888888;">Timeline:</td>
            <td style="padding: 8px 0; color: #ffffff; font-weight: 600;">${escapeHtml(timeline)}</td>
          </tr>` : ""}
        </table>
      </div>

      <!-- Message Content -->
      <div style="background-color: #1a1a1a; border: 1px solid #2c2c2c; border-radius: 12px; padding: 20px; margin-bottom: 28px;">
        <h3 style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; color: #A4C639; text-transform: uppercase; letter-spacing: 1px;">
          Project Details & Objectives
        </h3>
        <div style="font-size: 14px; line-height: 1.6; color: #e5e5e5; white-space: pre-wrap;">
${escapeHtml(message)}
        </div>
      </div>

      <!-- Action Button -->
      <div style="text-align: center; margin-top: 32px;">
        <a href="mailto:${escapeHtml(email)}?subject=Re:%20Project%20Inquiry%20-%20Nexora%20Digital" style="display: inline-block; background-color: #A4C639; color: #050505; font-weight: 700; font-size: 14px; text-decoration: none; padding: 14px 28px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 1px;">
          Reply to ${escapeHtml(name)}
        </a>
      </div>

    </div>

    <!-- Footer -->
    <div style="background-color: #0d0d0d; padding: 20px 36px; border-top: 1px solid #222222; text-align: center; font-size: 12px; color: #666666;">
      This email was transmitted automatically from the Nexora Digital portfolio inquiry system.
    </div>

  </div>
</body>
</html>
`;

    const plainTextContent = `
========================================
NEW PROJECT INQUIRY - NEXORA DIGITAL
========================================

Source: ${source}
Date: ${submissionTime} UTC

CLIENT INFORMATION:
-------------------
Name: ${name}
Email: ${email}
Phone/WhatsApp: ${phone}
Service: ${service}
Budget: ${budget}
Timeline: ${timeline}

PROJECT DETAILS:
----------------
${message}

========================================
Hit 'Reply' directly to respond to ${name} (${email})
========================================
`;

    const result = await resend.emails.send({
      from: senderEmail,
      to: recipientEmail,
      replyTo: email,
      subject: `New Project Inquiry from ${name} - ${service}`,
      html: htmlContent,
      text: plainTextContent,
    });

    console.log("[API/contact] Resend raw call completed. Result:", JSON.stringify(result));

    if (result.error) {
      console.error("[API/contact] Resend returned error object:", result.error);
      let userFriendlyError = result.error.message || "Failed to deliver email through Resend.";
      if (userFriendlyError.includes("You can only send testing emails to your own email address")) {
        const match = userFriendlyError.match(/\(([^)]+)\)/);
        const ownerEmail = match ? match[1] : "your registered account email";
        userFriendlyError = `Resend Notice: When using Resend's test address (onboarding@resend.dev), Resend only allows delivering to ${ownerEmail}. To deliver directly to ${recipientEmail}, please verify your custom domain in Resend (resend.com/domains) or sign up for Resend using ${recipientEmail}.`;
      }
      res.status(502).json({
        success: false,
        error: userFriendlyError,
      });
      return;
    }

    console.log(`[API/contact] Success! Resend Email ID: ${result.data?.id}`);

    res.status(200).json({
      success: true,
      message: "Inquiry delivered successfully.",
      id: result.data?.id,
    });
  } catch (err: any) {
    console.error("[API/contact] Caught exception during execution:", err);
    res.status(500).json({
      success: false,
      error: err?.message || "Something went wrong while processing the inquiry. Please try again.",
    });
  }
}

function escapeHtml(text: string): string {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
