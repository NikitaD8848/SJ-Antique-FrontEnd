import Layout from '@/components/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Provider, useSelector } from 'react-redux';
// import "../styles/globals.css";
import { persistor, store } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import KundanReadyReceiptsListing from '@/components/KundanReadyReceipts/KundanReadyReceiptsListing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Login /> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <ToastContainer
              position="top-right"
              autoClose={7000}
              hideProgressBar={false}
              newestOnTop={false}
              draggable={false}
              // pauseOnVisibilityChange
              closeOnClick
              pauseOnHover
            />
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}
