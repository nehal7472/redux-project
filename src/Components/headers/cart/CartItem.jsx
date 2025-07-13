import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFormCart,
} from "../../../app/features/carts/cartSlice";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFormCart(id));
  };

  return (
    <tr className="text-sm md:text-base">
      <td className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 object-cover rounded"
        />
        <span className="font-medium">{product.name}</span>
      </td>

      <td className="whitespace-nowrap">${product.price.toFixed(2)}</td>

      <td>
        <div className="btn-group">
          <button
            onClick={() => handleDecrease(product.id)}
            className="btn btn-sm"
          >
            –
          </button>

          <span className="btn btn-sm">{product.quantity}</span>

          <button
            onClick={() => handleIncrease(product.id)}
            className="btn btn-sm"
          >
            +
          </button>
        </div>
      </td>

      <td className="whitespace-nowrap">
        ${Number(product.price * product.quantity).toFixed(2)}
      </td>

      <td>
        <button
          onClick={() => handleRemove(product.id)}
          className="btn btn-error btn-sm"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
