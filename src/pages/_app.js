import Head from "next/head";
import NavBar from "../components/navbar";
import Layout from "../components/layout";
import Footer from "../components/footer";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="WebJam is a beginner friendly, week-long event where students come together to create fully functional web applications. Apply now!" />
        <meta name="keywords" content="beginner-friendly, hackathon, web applications" />
        <title>WebJam 2023</title>

        {/* Open Graph and Twitter Card Meta Tags for Social Sharing */}
        <meta property="og:title" content="WebJam 2023"/>
        <meta property="og:description" content="Join our week-long, beginner friendly event where you'll create fully functional web applications!"/>
        <meta property="og:image" content="/webjam_logo.png"/>
        <meta property="og:url" content="https://webjam.icssc.club/"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="WebJam 2023"/>
        <meta name="twitter:description" content="Join our week-long, beginner friendly event where you'll create fully functional web applications!"/>
        <meta name="twitter:image" content="/webjam_logo.png"/>
      </Head>
      <NavBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}
