import { useSession, signOut } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Dashboard() {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Dashboard | next</title>
      </Head>
      <h1>{session?.user?.name}</h1>
      <Image src={session?.user?.image} width={100} height={100} alt={session?.user?.name} loading="lazy" />
      <Link href="/about">
        <button>Go to About</button>
      </Link>
      <button onClick={() => signOut()}>Sair</button>
    </>
  )
}
