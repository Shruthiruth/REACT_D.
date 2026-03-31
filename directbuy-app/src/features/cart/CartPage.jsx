import toast from "react-hot-toast";
import { useAuth } from "../../app/AuthProvider";
import {
  useClearCartMutation,
  useGetCartQuery,
  useUpdateCartByIdMutation,
  useDeleteCartByIdMutation,
} from "./cartApi";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import PlaceOrderButton from "../orders/PlaceOrderButton";

function CartPage() {
  const { user } = useAuth();

  const {
    data: cartProduct,
    isLoading,
    isError,
  } = useGetCartQuery();

  const [clearCart, { isLoading: isClearing }] =
    useClearCartMutation();

  const [updateCartById] =
    useUpdateCartByIdMutation();

  const [deleteCartById] =
    useDeleteCartByIdMutation();

  const { register, setValue } = useForm();

  const [deletingId, setDeletingId] = useState(null);

  // ✅ Safe access
  const cartItems = cartProduct?.data?.items || [];

  // ✅ Set initial quantity
  useEffect(() => {
    cartItems.forEach((item) => {
      setValue(`quantity_${item.cartItemId}`, item.quantity);
    });
  }, [cartItems, setValue]);

  // ✅ Delete item
  const handleDeleteById = async (cartItemId) => {
    setDeletingId(cartItemId);
    try {
      await deleteCartById(cartItemId).unwrap();
      toast.success("Item removed from cart");
    } catch (err) {
      console.log(err);
      toast.error("Failed to remove item");
    } finally {
      setDeletingId(null);
    }
  };

  // ✅ Clear cart
  const handleClearCart = async () => {
    try {
      await clearCart().unwrap();
      toast.success("All items removed from cart");
    } catch (err) {
      console.log(err);
      toast.error("Failed to clear cart");
    }
  };

  // ✅ Update quantity
  const handleQtyById = async ({ cartItemId, quantity }) => {
    if (quantity < 1) return; // prevent invalid values
    try {
      await updateCartById({ cartItemId, quantity }).unwrap();
      toast.success("Quantity updated");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update quantity");
    }
  };

  // ✅ Protect route
  if (!user) return <h4>Please login to view cart</h4>;

  if (isLoading) return <h4>Loading cart items...</h4>;
  if (isError) return <h4>Failed to load cart</h4>;

  return (
    <>
      {cartItems.length === 0 ? (
        <h4>Your cart is empty</h4>
      ) : (
        cartItems.map((c) => (
          <div
            key={c.cartItemId}
            className="card column"
            style={{ width: "200px", marginBottom: "10px" }}
          >
            <div className="card-body">
              <h4 className="card-title">{c.productName}</h4>

              <p className="card-text" style={{ color: "darkorange" }}>
                Price: ${c.price}
              </p>

              <p className="card-text" style={{ color: "darkorange" }}>
                Quantity
              </p>

              {/* ✅ Quantity Input */}
              <input
                className="form-control"
                type="number"
                min="1"
                {...register(`quantity_${c.cartItemId}`, {
                  required: true,
                  min: 1,
                  onBlur: (e) =>
                    handleQtyById({
                      cartItemId: c.cartItemId,
                      quantity: Number(e.target.value),
                    }),
                })}
              />

              <small style={{ color: "gray" }}>
                Click outside to update
              </small>

              <p
                className="card-text bold"
                style={{ marginTop: "10px", color: "darkslateblue" }}
              >
                Total Price: ${c.totalPrice}
              </p>

              {/* ✅ Delete Button */}
              <button
                onClick={() => handleDeleteById(c.cartItemId)}
                className="btn btn-danger"
              >
                {deletingId === c.cartItemId
                  ? "Deleting..."
                  : "Delete"}
              </button>
            </div>
          </div>
        ))
      )}

      {/* ✅ Total + Clear */}
      {cartItems.length > 0 && (
        <>
          <p
            className="card-text bold"
            style={{ color: "darkslateblue" }}
          >
            Total Cart Amount: $
            {cartProduct?.data?.totalAmount}
          </p>
          <br></br>
          <PlaceOrderButton />
          &nbsp;

          <button
            onClick={handleClearCart}
            className="btn btn-warning"
          >
            {isClearing ? "Clearing..." : "Clear Cart"}
          </button>
        </>
      )}
    </>
  );
}

export default CartPage;