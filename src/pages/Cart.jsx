import { useSelector } from "react-redux";
import BillingPage from "../app/features/carts/BillingPage";
import CartItem from "../Components/headers/cart/CartItem";

const Cart = () => {
  const carts = useSelector((state) => state.cart.value);

  const totalCartsPrice = carts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
        Shopping Cart
      </h1>

      <div className="w-full overflow-x-auto mb-6 rounded shadow">
        <table className="table w-full">
          <thead>
            <tr className="bg-base-200 text-sm md:text-base">
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carts.length ? (
              carts.map((item) => <CartItem key={item.id} product={item} />)
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center text-sm text-gray-500 py-6"
                >
                  No items in your cart...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Billing section */}
      <div className="w-full  ml-auto">
        <BillingPage totalCartsPrice={totalCartsPrice} />
      </div>
    </div>
  );
};

export default Cart;
