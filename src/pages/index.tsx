import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/recommended')
  })
  return (
    <>
      <Head>
        <title>仿掘金</title>
        <meta name="description" content="在字节跳动第五届青训营最终实战的使用next.js完成的静态仿掘金项目" />
        <meta name="keywords" content="next.js 仿掘金 青训营 第五届 字节跳动" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}
