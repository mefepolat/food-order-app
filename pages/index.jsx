import Head from 'next/head';
import Home from './home';
import Header from '@/components/layout/Header';


export default function Index() {
  return (
   <div>
    <Head>
      <title>Create Next App</title>
      <meta name='description' content='xxxxxx' />
      <link rel="icon" href="/favicon.ico" />
      

    </Head>
    <Header />
    <Home />
   </div>
  )
}
