import { NextResponse } from "next/server";

export function middleware(request: Request) {
  const host = request.headers.get("host") || "";
  const url = new URL(request.url);

  if (host === "www.pixelkeepsakes.com") {
    return NextResponse.redirect(`https://pixelkeepsakes.com${url.pathname}${url.search}`, 301);
  }

  return NextResponse.next(); // Continue as usual
}

// Apply middleware to all routes
export const config = {
  matcher: "/:path*", // Apply middleware to all routes
};
