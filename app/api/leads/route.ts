import { NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  email: string;
  company: string;
};

const leads: Array<LeadPayload & { createdAt: string }> = [];

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<LeadPayload>;

  if (!payload.name || !payload.email || !payload.company) {
    return NextResponse.json(
      { message: "Name, email and company are required." },
      { status: 400 }
    );
  }

  leads.push({
    name: payload.name,
    email: payload.email,
    company: payload.company,
    createdAt: new Date().toISOString()
  });

  return NextResponse.json({ message: "Lead saved successfully.", totalLeads: leads.length });
}
