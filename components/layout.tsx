import Head from "next/head";
import Link from "next/link";
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
      <div>
        <div>
          <p>
            <span>「 포켓몬 다 말할 수 있을까? 게임」은 포켓몬스터 비공식 2차 창작입니다.</span>
            <br />
            <span>©2022 Pokémon. ©1995-2022 Nintendo/Creatures Inc./GAME FREAK inc.</span>
            <br />
          </p>
          <div>
            <Link href="/ranking">클리어 타임 랭킹</Link>
            <Link href="">개인정보처리방침</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
