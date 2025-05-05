export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    const body = await req.json();
    const { to, subject, message } = body;

    if (!to || !subject || !message) {
        return NextResponse.json({ error: 'Eksik veri' }, { status: 400 });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `"QR Menü" <${process.env.SMTP_EMAIL}>`,
            to,
            subject,
            html: `<p>${message}</p>`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Mail gönderme hatası:', error);
        return NextResponse.json({ error: 'Mail gönderilemedi' }, { status: 500 });
    }
}
