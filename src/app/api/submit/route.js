import { Resend } from "resend";

export async function POST(request) {
  try {
    const { answers } = await request.json();

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.TO_EMAIL;
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

    if (!resendApiKey || !toEmail) {
      console.log("Valentine answers (email not configured):", answers);
      return Response.json({
        message:
          "Email not configured yet. Update RESEND_API_KEY and TO_EMAIL to enable sending.",
      });
    }

    const resend = new Resend(resendApiKey);

    const formattedAnswers = Object.entries(answers || {})
      .map(([questionId, answer]) => `Q${questionId}: ${answer}`)
      .join("\n");

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: "Valentine App Answers 💌",
      text: formattedAnswers,
    });

    return Response.json({ message: "Sent! 💌" });
  } catch (error) {
    return Response.json(
      { error: error?.message || "Failed to send results." },
      { status: 500 }
    );
  }
}
