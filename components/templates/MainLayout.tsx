import { Nunito_Sans } from '@next/font/google';
import Head from 'next/head';
import { ReactElement } from 'react';

import Navbar from '../Navbar';

const nunitoFont = Nunito_Sans({ weight: ['400', '700'], preload: false });

export default function MainLayout({ children }: { children: ReactElement }) {
  return (
    <div className={`${nunitoFont.className} min-h-screen px-3 sm:px-20`}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
