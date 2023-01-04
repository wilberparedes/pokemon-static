import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";
const PokemonPage = () => {
  const router = useRouter();
  console.log("router", router.query);
  return (
    <Layout title="Algún pokemon">
      <h1>Hola mundo</h1>
    </Layout>
  );
};

export default PokemonPage;
