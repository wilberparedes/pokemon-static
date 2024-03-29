import { GetStaticProps, NextPage } from "next";
import { Grid } from "@nextui-org/react";

import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";

import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokémons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon, key) => (
          <PokemonCard pokemon={pokemon} key={key} />
        ))}
      </Grid.Container>
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
