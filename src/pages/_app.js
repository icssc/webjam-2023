import Head from "next/head";
import NavBar from '../components/navbar'
import Layout from '../components/layout'
import Footer from '../components/footer'
import 'material-icons/iconfont/material-icons.css';
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WebJam 2023</title>
      </Head>
      <NavBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  )
}