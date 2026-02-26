import { NextResponse } from "next/server";

const SHOP_ENDPOINT = "https://dezentralshop.ch/embed/BAS.json/";

export async function GET() {
  try {
    const response = await fetch(SHOP_ENDPOINT, {
      next: { revalidate: 300 }, // cache for 5 minutes
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch products" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 502 }
    );
  }
}
