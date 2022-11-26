import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import { Layout } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layout title="Listado de Pokémons">
      <h1>Hola Mundo!!!</h1>
      <Button color="gradient">{`Hi I'm Button`}</Button>
    </Layout>
  );
};

export default HomePage;
