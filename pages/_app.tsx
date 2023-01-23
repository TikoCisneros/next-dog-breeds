import '../styles/globals.css';

import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import MainLayout from '../components/templates/MainLayout';

import type { AppProps } from 'next/app';
import { DogsContextProvider } from '../contexts/dogs';
export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  // Hydrate query cache see: https://dev.to/arianhamdi/react-query-v4-ssr-in-next-js-2ojj
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <DogsContextProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </DogsContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}
