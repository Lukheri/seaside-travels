import EmailTemplate from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json()

  const {name, email, message} = body

  const subject = `${!!name ? name : "Anonymous user"} Contacted us`
  try {
    const data = await resend.emails.send({
      from: 'Seaside Travels Inquiry <contact@resend.dev>',
      to: ['luke.contrivida@gmail.com'],
      subject: subject,
      react: EmailTemplate({name, email, message}),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
