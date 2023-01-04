import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";

interface Props {
  id: string;
  name: string;
}

const PokemonPage: NextPage<Props> = ({ id, name }) => {
  const router = useRouter();
  console.log("router", router.query);
  return (
    <Layout title="Algún pokemon">
      <h1>Hola mundo</h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  // const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  // const pokemons: SmallPokemon[] = data.results.map((item, key) => ({
  //   id: (key + 1).toString(),
  //   img: `${key + 1}.svg`,
  //   name: item.name,
  //   url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/`,
  // }));

  return {
    props: {
      id: 1,
      name: "hola",
    },
  };
};

export default PokemonPage;
