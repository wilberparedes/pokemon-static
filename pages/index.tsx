import { Card, Grid, Row, Text } from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next";

import { pokeApi } from "../api";

import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";
import { PokemonListResponse, SmallPokemon } from "../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log("pokemons", pokemons);
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
