import Head from 'next/head';
import React from 'react';
import { Footer } from '../compornents/Footer';
import Headline from '../compornents/Headline';
import Links from '../compornents/Links';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <Headline title="About Page" Page="about" />

        <Links />
      </main>

      <Footer />
    </div>
  );
}
