import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <>
      <Head>
        <title>About | App</title>
      </Head>
      <h1>About</h1>
      <Link href="/dash">
        <button>Go to Dashboard</button>
      </Link>
    </>
  )
}
