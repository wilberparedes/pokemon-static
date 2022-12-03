import { Card, Grid, Row, Text } from "@nextui-org/react";
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
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map(({ id, name, url, img }, key) => (
          <Grid key={key} xs={6} sm={3} md={2} xl={1}>
            <Card hoverable clickable>
              <Card.Body css={{ p: 1 }}>
                <Card.Image src={`${url}${img}`} width="100%" height={140} />
              </Card.Body>
              <Card.Footer>
                <Row justify="space-between">
                  <Text transform="capitalize">{name}</Text>
                  <Text>#{id}</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
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
