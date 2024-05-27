import { Container } from "./styles";
import Head from "../../../components/Head";
import Snacks from "../../../components/Snacks";
import SnackTitle from "../../../components/SnackTitle";
import useSnack from "../../../hooks/useSnack";

function IceCreams() {
  const { iceCreams } = useSnack();

  return (
    <Container>
      <Head title='Sobremesas' description='Nossas melhores sobremesas' />
      <SnackTitle>Sobremesas</SnackTitle>
      <Snacks snacks={iceCreams} />
    </Container>
  );
}

export default IceCreams;
