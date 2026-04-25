import { NextResponse } from "next/server";
import { enterpriseData } from "@/data/enterpriseData";

export async function GET() {
  return NextResponse.json(enterpriseData);
}
