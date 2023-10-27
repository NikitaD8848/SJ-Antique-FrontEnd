import Layout from '@/components/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Provider, useSelector } from 'react-redux';
// import "../styles/globals.css";
import { persistor, store } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import KundanReadyReceiptsListing from '@/components/KundanReadyReceiptsListing'
import login from '@/pages/login'
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Login /> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <KundanReadyReceiptsListing/>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}
