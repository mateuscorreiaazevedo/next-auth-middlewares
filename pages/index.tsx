import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <>
      <Head>
        <title>App</title>
      </Head>
    </>
  )
}
