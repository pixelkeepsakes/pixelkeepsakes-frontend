import { NextResponse } from "next/server";

export function middleware(request: Request) {
  const host = request.headers.get("host") || "";
  const url = new URL(request.url);

  if (
    host === "neuralforgestudios.com" ||
    host === "www.neuralforgestudios.com" ||
    host === "www.neuralforgestudios.ai"
  ) {
    return NextResponse.redirect(`https://neuralforgestudios.ai${url.pathname}${url.search}`, 301);
  }

  return NextResponse.next(); // Continue as usual
}

// Apply middleware to all routes
export const config = {
  matcher: "/:path*", // Apply middleware to all routes
};
