import { FC } from "react";
import { useRouter } from "next/router";

import { Card, Grid } from "@nextui-org/react";

interface FavoritePokemonsProps {
  id: number;
}

export const FavoriteCardPokemon: FC<FavoritePokemonsProps> = ({ id }) => {
  const router = useRouter();
  const onFavoriteClicked = () => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid onClick={onFavoriteClicked} xs={6} sm={3} md={2} xl={1}>
      <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};
