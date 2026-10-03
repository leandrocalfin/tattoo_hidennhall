import { NextResponse } from "next/server";

const INSTAGRAM_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;

export async function GET() {
  if (!INSTAGRAM_TOKEN || !INSTAGRAM_USER_ID) {
    return NextResponse.json(
      { error: "Instagram token or user ID not configured" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&limit=12&access_token=${INSTAGRAM_TOKEN}`
    );

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { error: error.error?.message || "Failed to fetch Instagram media" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch Instagram media" },
      { status: 500 }
    );
  }
}
