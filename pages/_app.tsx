import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Login from '@/components/Login/Login';
import KundanReadyReceiptsListing from '@/components/KundanReadyReceiptsListing'
config.autoAddCss = false;


export default function App({ Component, pageProps }: AppProps) {

  return (
      <>
      {/* <Login /> */}
      <KundanReadyReceiptsListing/>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
    
  )

}
