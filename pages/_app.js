import Head from "next/head";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* this will add to all pages and it is general head */}
      <Head>
        <title>جستجوی کاربران</title>
        <meta name="description" content="کاربران" />
        <meta name="viewport" content="initial-scale=1.0, width:device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
