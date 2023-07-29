import Head from 'next/head';
import Home from './home';
import Header from '@/components/layout/Header';
import Input from '@/components/form/Input';


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
    <div className='p-20 container mx-auto'>
      <Input type='email' placeholder='Email' />
    </div>
   </div>
  )
}
