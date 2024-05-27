import { Outlet } from "react-router-dom";
import { Container } from "./styles";
import Sidebar from "../../components/sidebar";
import LogoImg from "../../assets/logo.svg";
import MyOrder from "../../components/MyOrder";

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={LogoImg} alt='Logo' />
        <Outlet />
      </section>
      <MyOrder />
    </Container>
  );
}
