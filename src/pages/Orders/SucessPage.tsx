import Head from "../../components/Head";
import { Container, Inner, SubTitle } from "./styles";

function OrderSucessPage() {
  return (
    <Container>
      <Head title='Compra realizada com sucesso!' />
      <Inner>
        <h1>Compra realizada com sucesso</h1>
        <p>
          Número de pedido <code> #123</code>
        </p>
        <SubTitle>Dados de contato da loja</SubTitle>
        <ul>
          <li>Endereço: Av. Central, 123</li>
          <li>Tel: 99 99765-4321</li>
        </ul>
        <br />
        <a href='/'>Voltar a página inicial</a>
      </Inner>
    </Container>
  );
}

export default OrderSucessPage;
