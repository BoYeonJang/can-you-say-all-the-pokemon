import Image from "next/image";
import Layout from "../components/layout";
import Timer from "../components/timer";
import styles from "../styles/Home.module.css";
import useSwr from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Kanto() {
  const pokemonImage = ({ src }: any) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${src}`;
  };

  // async function pokemonData() {
  //   const response = await fetch("http://localhost:3000/api/pokemon");
  //   if (!response.ok) {
  //     throw new Error("400 또는 500 error");
  //   }
  //   const result = await response.json();
  //   console.log("success: ", result);
  // }
  // pokemonData().catch(() => {
  //   console.log("error: ");
  // });

  const { data, error } = useSwr("/api/pokemon", fetcher);
  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;

  const searchPokemon = (e: any) => {
    if (e.key === "Enter") {
      console.log("엔터 ");
    }
  };

  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>
          관동지방 포켓몬 <span className={styles.subtitle}>151마리</span> 말할 수 있을까?
        </h1>
        <div className={styles.container}>
          <Timer />
          <div>000:00:00</div>
          <div>현재 000마리 남은 151마리</div>
          <div>
            <input
              type="text"
              id="name"
              placeholder="포켓몬 이름"
              onKeyPress={e => searchPokemon(e)}
            />
            <button>시작</button>
          </div>
        </div>
        <div className={styles.grid}>
          {data &&
            data.map((item: any) => (
              <div className={styles.card} key={item.id}>
                <ul>{item.id}</ul>
                <Image
                  loader={pokemonImage}
                  src={item.id + ".png"}
                  alt={item.name}
                  width={96}
                  height={96}
                />
              </div>
            ))}
        </div>
      </main>
    </Layout>
  );
}
