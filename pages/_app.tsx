import '../styles/globals.css';

import { Nunito_Sans } from '@next/font/google';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import type { AppProps } from 'next/app';

const nunito = Nunito_Sans({ weight: ['400', '700'], preload: false });

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  // Hydrate query cache see: https://dev.to/arianhamdi/react-query-v4-ssr-in-next-js-2ojj
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <main className={nunito.className}>
          <Component {...pageProps} />
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}
