import { GetStaticProps, NextPage } from "next";

import { Button } from "@nextui-org/react";

import { Layout } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layout title="Listado de Pokémons">
      <ul>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      name: "Wilber Paredes",
    },
  };
};

export default HomePage;
