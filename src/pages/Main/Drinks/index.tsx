import { Container } from "./styles";
import Head from "../../../components/Head";
import Snacks from "../../../components/Snacks";
import SnackTitle from "../../../components/SnackTitle";
import useSnack from "../../../hooks/useSnack";

function Drinks() {
  const { drinks } = useSnack();

  return (
    <Container>
      <Head title='Bebidas' description='Nossas bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks} />
    </Container>
  );
}

export default Drinks;
