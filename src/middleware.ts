import { NextResponse, type NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

//Only run middleware for necessary
export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico).*)'],
};
