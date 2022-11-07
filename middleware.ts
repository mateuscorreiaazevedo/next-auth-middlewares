import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export default async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.SECRET })
  const url = req.url

  if (!session && url === `${process.env.URL}/`) NextResponse.redirect(`${process.env.URL}/login`)
  if (session && url === `${process.env.URL}/`) NextResponse.redirect(`${process.env.URL}/dash`)

  if (!session && url.includes('/about')) {
    return NextResponse.redirect(`${process.env.URL}/login`)
  }
  if (!session && url.includes('/dash')) {
    return NextResponse.redirect(`${process.env.URL}/login`)
  }
  if (session && url.includes('/login')) {
    return NextResponse.redirect(`${process.env.URL}/dash`)
  }
}
