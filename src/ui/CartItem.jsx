import { styled } from "styled-components";
import ToggleQuantity from "./ToggleQuantity";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartContext";
import { formatCurrency } from "../helpers";

// const TableRow = styled.div`
/* display: flex; */
/* justify-content: space-around; */
/* column-gap: 2.4rem; */
/* align-items: center; */
/* padding: 1.4rem; */

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 5rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  /* &:not(:last-child) {
    border-bottom: 1px solid rgb(136, 136, 136);
  } */
`;

const Img = styled.img`
  display: block;
  width: 4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Name = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  color: #333;
  margin-top: 2px;
  /* font-family: "Sono"; */
`;

// const Price = styled.p`

/* font-family: "Sono"; */
// font-weight: 600;
// `;

const ItemName = styled.div`
  display: flex;
  gap: 0.3rem;
`;

const Quantity = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: #333;
`;
function CartItem({ quantity, name, price, id, image }) {
  const { removeItem, decrease, increase } = useCartContext();

  // function decreaseQuantity() {
  // quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  // }
  // function increaseQuantity() {
  //   // quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  // }

  // const { image, name, quantity } = cart;

  return (
    <TableRow>
      <ItemName>
        <Img src={image} alt={id} />

        <Name>{name}</Name>
      </ItemName>
      <Quantity>{formatCurrency(price)}</Quantity>
      {/* <Quantity>{quantity}</Quantity> */}
      <ToggleQuantity
        quantity={quantity}
        decreaseQuantity={() => decrease(id)}
        increaseQuantity={() => increase(id)}
      />
      <Quantity>{formatCurrency(price * quantity)}</Quantity>
      <div>
        <FaTrash className="trash-icon" onClick={() => removeItem(id)} />
      </div>
    </TableRow>
  );
}

export default CartItem;
