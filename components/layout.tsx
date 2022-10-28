import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: any) {
  return (
    <div>
      <Head>
        <title>포켓몬 전부 말할 수 있을까? 게임</title>
        <meta name="description" content="포켓몬 전부 말할 수 있을까? 게임" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <h1>레이아웃</h1> */}
      <div>{children}</div>
      <Footer />
    </div>
  );
}
