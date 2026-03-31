import {  useEffect } from "react";
import { useGetMyOrdersQuery } from "./ordersApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function MyOrders() {

    const navigate = useNavigate();
    const { data :orders, isLoading, isError, error } = useGetMyOrdersQuery();


    useEffect(() => {
        if(!orders && error )
        {
            if(error.status === 401) {
                toast.error(error.data.message || 'Please login to view orders')
                navigate('/login')
            }
                else {
                    toast.error(error.data.message || 'Failed to load orders')
                    console.log(error)
                }

        }
}, [orders, error, navigate])
    if (isLoading) return <h4>Loading...</h4>
    if (isError) return <h4>Failed to load orders</h4>
    return (
        <>
                {
                    orders?.data?.map(order => (
                        <div key={order.orderId} className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">Order ID: {order.orderId}</h5>
                                <p className="card-text"><b>Date :</b> {new Date(order.orderDate).toLocaleString()}</p>



                                {
                                    order.items.map((i,index) => (
                                        <div key={index} >
                                            <div >
                                            {i.productName} - Price: ${i.price} * Qty: {i.quantity} = ${i.price * i.quantity}
                                            </div>
                                        </div>
                                    ))
                                }

                                <h6 className="card-subtitle mt-2">Total Amount: ${order.totalAmount}</h6>
                                <hr />
                            </div>
                        </div>
                    ))

                }
        </>
    )
}

export default MyOrders