import { GetStaticProps, NextPage } from "next";

import { pokeApi } from "../api";

import { Layout } from "../components/layouts";
import { PokemonListResponse, SmallPokemon } from "../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log("pokemons", pokemons);
  return (
    <Layout title="Listado de Pokémons">
      <ul>
        {pokemons.map((pokemon, key) => (
          <li key={key}>
            #{pokemon.id} - {pokemon.name}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((item, key) => ({
    id: (key + 1).toString(),
    img: `${key + 1}.svg`,
    name: item.name,
    url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
