import { FaTrashAlt } from "react-icons/fa";
import currencyFormat from "../../../../helpers/currencyFormat";
import useCart from "../../../../hooks/useCart";
import { Container } from "./styles";
import plusImg from "../../../../assets/circle-plus.svg";
import minusImg from "../../../../assets/circle-minus.svg";
import ConfirmOrder from "../../../../components/OrderCloseAction/ConfirmOrder/inde";

function TableMobile() {
  const { cart, removeSnackFromCart, snackCartIncrement, snackCartDecrement } = useCart();

  return (
    <Container>
      {cart.map((item) => (
        <div key={`${item.snack}-${item.id}`} className='order-item'>
          <div>
            <img src={item.image} alt={item.name} />
          </div>
          <div>
            <h4>{item.name}</h4>
            <span>{currencyFormat(item.price)}</span>
            <div>
              <div>
                <button type='button' onClick={() => snackCartDecrement(item)}>
                  <img src={minusImg} alt='Remover quantidade' />
                </button>
                <span>{`${item.quantity}`.padStart(2, "0")}</span>
                <button type='button' onClick={() => snackCartIncrement(item)}>
                  <img src={plusImg} alt='Adicionar quantidade' />
                </button>
              </div>
              <button type='button' onClick={() => removeSnackFromCart(item)}>
                <FaTrashAlt />
              </button>
            </div>
            <h5>
              <span className='subtotal'>Subtotal</span> {currencyFormat(item.subtotal)}
            </h5>
          </div>
        </div>
      ))}
      <ConfirmOrder />
    </Container>
  );
}

export default TableMobile;
