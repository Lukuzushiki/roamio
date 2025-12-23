import { Resend } from "resend";
import * as React from "react";
import EmailTemplate from "@/src/assets/emailTemplate";

export async function POST() {
  const resend = new Resend(process.env.NEXT_PUBLIC_API_KEY_RESEND);
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["febriwardhana20@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ fullName: "Lukuzushiki" }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error: unknown) {
    console.error("Unexpected error:", error);

    if (error instanceof Error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ error }, { status: 500 });
  }
}
