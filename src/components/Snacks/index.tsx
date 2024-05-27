import { FiPlus } from "react-icons/fi";
import { Container } from "./styles";
import currencyFormat from "../../helpers/currencyFormat";
import SkeletonSnack from "./SkeletonSnacks";
import { SnackData } from "../../interfaces/SnackData";
import useCart from "../../hooks/useCart";

interface SnacksProps {
  snacks: SnackData[];
}

function Snacks({ snacks }: SnacksProps) {
  const { cart, addSnackIntoCart } = useCart();
  return (
    <Container>
      {!snacks.length
        ? [1, 2, 3, 4].map((n) => <SkeletonSnack key={n} />)
        : snacks.map((snack) => {
            const snackExistetent = cart.find(
              (item) => item.id === snack.id && item.snack === snack.snack,
            );
            return (
              <div key={snack.id} className='snack'>
                {snackExistetent && <span>{snackExistetent.quantity}</span>}
                <h2>{snack.name}</h2>
                <img src={snack.image} alt={snack.name} />
                <p>{snack.description}</p>
                <div>
                  <strong> {currencyFormat(snack.price)}</strong>
                  <button type='button' onClick={() => addSnackIntoCart(snack)}>
                    <FiPlus />
                  </button>
                </div>
              </div>
            );
          })}
    </Container>
  );
}

export default Snacks;
