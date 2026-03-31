import { useCreateOrderMutation } from "./ordersApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function PlaceOrderButton() {

    const [createOrder, { isLoading, isError }] =useCreateOrderMutation();
    const navigate = useNavigate()

    const handlePlaceOrder = async () => {
        try {
            await createOrder().unwrap()
            toast.success('Order placed successfully')
            navigate('/orders')
        } catch (error) {
          if(error.status === 401) {
            toast.error(error.data.message || 'Please login to place order')
            navigate('/login')

          }
            else {
                toast.error(error.data.message || 'Failed to place order')
                console.log(error)
            }

           
        }
    }
    return (
        <>
            <button className="btn btn-primary" onClick={handlePlaceOrder} disabled={isLoading}>
                {isLoading ? 'Placing Order...' : 'Place Order'}
            </button>
            {isError && <p className="text-danger mt-2">Failed to place order. Please try again.</p>}
        </>
    )
}
       
    


export default PlaceOrderButton