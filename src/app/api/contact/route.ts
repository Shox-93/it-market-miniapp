import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const subject = String(formData.get("subject") || "");
    const message = String(formData.get("message") || "");
    const pageLink = String(formData.get("pageLink") || "");
    const file = formData.get("file") as File | null;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { message: "Telegram env variables not found" },
        { status: 500 }
      );
    }

    const text =
      `Новая заявка с формы контактов:\n\n` +
      `Телефон: ${phone}\n` +
      `Email: ${email}\n` +
      `Тема: ${subject}\n` +
      `Сообщение: ${message}\n` +
      `Ссылка: ${pageLink || "не указана"}\n` +
      `Файл: ${file?.name || "не прикреплен"}`;

    const tgResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      }
    );

    const tgData = await tgResponse.json();

    if (!tgResponse.ok || !tgData.ok) {
      return NextResponse.json(
        { message: `Telegram request failed: ${JSON.stringify(tgData)}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, message: "Заявка отправлена" });
  } catch (error) {
    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : "Server error",
      },
      { status: 500 }
    );
  }
}