import Image from 'next/image'
import Head from 'next/head';
import Home from './home';


export default function Index() {
  return (
   <div>
    <Head>
      <title>Create Next App</title>
      <meta name='description' content='xxxxxx' />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

    </Head>
    <Home />
   </div>
  )
}
