import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/Main";
import BurgersPage from "./pages/Main/Burger";
import PizzasPage from "./pages/Main/Pizzas";
import DrinksPage from "./pages/Main/Drinks";
import IceCreamsPage from "./pages/Main/IceCreams";
import MyCartPage from "./pages/MyCart";
import PaymentPage from "./pages/Payment";
import OrderSucessPage from "./pages/Orders/SucessPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route index element={<BurgersPage />} />
        <Route path='pizzas' element={<PizzasPage />} />
        <Route path='drinks' element={<DrinksPage />} />
        <Route path='icecreams' element={<IceCreamsPage />} />
      </Route>
      <Route path='cart' element={<MyCartPage />} />
      <Route path='payment' element={<PaymentPage />} />
      <Route path='success' element={<OrderSucessPage />} />
    </Routes>
  );
}
