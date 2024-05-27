import { Container } from "./styles";
import Head from "../../../components/Head";
import SnackTitle from "../../../components/SnackTitle";
import Snacks from "../../../components/Snacks";
import useSnack from "../../../hooks/useSnack";

function Pizzas() {
  const { pizzas } = useSnack();

  return (
    <Container>
      <Head title='Pizzas' description='Nossas melhores Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas} />
    </Container>
  );
}

export default Pizzas;
