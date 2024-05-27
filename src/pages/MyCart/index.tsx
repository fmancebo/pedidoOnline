import Head from "../../components/Head";
import OderHeader from "../../components/OderHeader";
import Table from "./Table";
import { Container } from "./styles";

export default function MyCart() {
  return (
    <Container>
      <Head title='Carrinho' />
      <OderHeader />
      <Table />
    </Container>
  );
}
