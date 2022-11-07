import React from 'react'
import { signIn } from 'next-auth/react'
import Head from 'next/head'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | App</title>
      </Head>
      <div>
        <button onClick={() => signIn()}>Entrar com o Github</button>
      </div>
    </>
  )
}
