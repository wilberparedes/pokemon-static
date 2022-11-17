import { Button } from "@nextui-org/react";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <>
      <h1>Hola Mundo!!!</h1>
      <Button color="gradient">{`Hi I'm Button`}</Button>
    </>
  );
};

export default HomePage;
