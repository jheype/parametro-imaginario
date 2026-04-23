import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function clean(value: unknown) {
  return String(value ?? '')
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .trim()
    .slice(0, 3000);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const website = clean(body.website);
    if (website) {
      return NextResponse.json({ success: true });
    }

    const nome = clean(body.nome);
    const telefone = clean(body.telefone);
    const email = clean(body.email);
    const local = clean(body.local);
    const servico = clean(body.servico);
    const prazo = clean(body.prazo);
    const descricao = clean(body.descricao);

    if (!nome || !telefone || !email || !descricao) {
      return NextResponse.json(
        { success: false, message: 'Campos obrigatórios em falta.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Email inválido.' },
        { status: 400 }
      );
    }

    const safeNome = escapeHtml(nome);
    const safeTelefone = escapeHtml(telefone);
    const safeEmail = escapeHtml(email);
    const safeLocal = escapeHtml(local);
    const safeServico = escapeHtml(servico);
    const safePrazo = escapeHtml(prazo);
    const safeDescricao = escapeHtml(descricao).replace(/\n/g, '<br />');

    await resend.emails.send({
      from: 'Parametro Imaginario <onboarding@resend.dev>',
      to: ['joaopedroa2707@gmail.com'],
      replyTo: email,
      subject: 'Novo pedido de orçamento',
      html: `
        <div style="font-family: Arial, sans-serif; color: #171717; line-height: 1.6;">
          <h2 style="margin-bottom: 20px;">Novo contacto do site</h2>

          <p><strong>Nome:</strong> ${safeNome}</p>
          <p><strong>Telefone:</strong> ${safeTelefone}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Local da obra:</strong> ${safeLocal || 'Não indicado'}</p>
          <p><strong>Tipo de serviço:</strong> ${safeServico || 'Não indicado'}</p>
          <p><strong>Prazo pretendido:</strong> ${safePrazo || 'Não indicado'}</p>

          <hr style="margin: 24px 0; border: none; border-top: 1px solid #ddd;" />

          <p><strong>Descrição do pedido:</strong></p>
          <p>${safeDescricao}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('CONTACT_API_ERROR', error);
    return NextResponse.json(
      { success: false, message: 'Erro interno.' },
      { status: 500 }
    );
  }
}