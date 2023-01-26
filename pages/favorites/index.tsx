import { Container, Text, Image } from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { useEffect, useState } from "react";
import { localFavorites } from "../../utils";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);
  console.log("favoritePokemons", favoritePokemons);

  return (
    <Layout title="Favoritos">
      <NoFavorites />
    </Layout>
  );
};

export default FavoritesPage;
