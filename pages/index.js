import Head from 'next/head';
import { useSession } from 'next-auth/react';
import LoginButton from '../components/login-button';
 
console.log(process.env.FACEBOOK_CLIENT_ID)

export default function Home() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  
  return (
    <div>
      <Head>
        <title>Giveaway manager</title>
        <meta name='description' content='DNBA Giveaway Manager' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LoginButton />
    </div>
  );
}
