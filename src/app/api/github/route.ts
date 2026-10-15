import { NextResponse } from "next/server";
import { fetchGitHubData } from "@/lib/github";

export const revalidate = 3600; // 1 hour revalidation

export async function GET() {
  try {
    const data = await fetchGitHubData("ASingha165");
    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to retrieve GitHub telemetry" },
      { status: 500 }
    );
  }
}
