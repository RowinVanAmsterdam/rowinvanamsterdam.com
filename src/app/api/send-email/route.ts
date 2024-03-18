// pages/api/send-email.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import profile from '../../../assets/static/rowinvanamsterdam.json';

const whitelistedDomains = ['https://rowinvanamsterdam.com'];

export async function POST(request: NextRequest, res: NextResponse) {
    try {
        // Check the Origin header to restrict access and allow only whitelisted domains
        const origin = request.headers.get('Origin');
        const refererHeader = request.headers.get('Referer');

        // Perform a null check for the Origin header
        if (origin !== null && !whitelistedDomains.includes(origin)) {
            return Response.json({ message: 'Forbidden' }, { status: 403 });
        }
        
       

        const body = await request.json();
        const { name, email, message } = body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.NODEMAILER_EMAIL,
            to: profile.contact.email,
            subject: 'Contact Form Submission',
            text: `Name: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`
        };

        await transporter.sendMail(mailOptions);

        return Response.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An error occurred';
        return Response.json({ message: errorMessage }, { status: 500 });
    }
}
