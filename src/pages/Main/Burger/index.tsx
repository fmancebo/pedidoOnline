import SnackTitle from "../../../components/SnackTitle";

import Head from "../../../components/Head";
import Snacks from "../../../components/Snacks";

import { Container } from "./styles";
import useSnack from "../../../hooks/useSnack";

function Burgers() {
  const { burgers } = useSnack();

  return (
    <Container>
      <Head title='Hambúrgueres' description='Nossos melhores Burguers' />
      <SnackTitle>Hambúrguers</SnackTitle>
      <Snacks snacks={burgers} />
    </Container>
  );
}

export default Burgers;
