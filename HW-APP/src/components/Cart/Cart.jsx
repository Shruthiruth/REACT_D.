import { useState } from 'react'
import ProductList from './ProductList'

function Cart() {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        // setCartItems([...cartItems, product])
        const existingProduct = cartItems.find((items) => 
            items.id === product.id
        )

        if (existingProduct) {
            const updatedCart = cartItems.map((items) =>
                items.id === product.id
                    ? { ...items, quantity: items.quantity + 1 }
                    : items
            )
        

        setCartItems(updatedCart)
    }
        else {
        setCartItems([...cartItems, { ...product, quantity: 1 }])

    }
}
const total = cartItems.reduce(
    (sum, items) => sum + items.price * items.quantity,0
)
return (
    <div>
        <h1>Cart</h1>
        <ProductList addToCart={addToCart} />
        <h2>Cart Items</h2>
        {
            cartItems.length === 0
                ? <p>Cart is empty</p>
                :
                <ul>
                    {
                        cartItems.map(items =>
                            <li key={items.id}>
                                {items.name} - Rs.{items.price} * {items.quantity}
                            </li>)
                    }
                            <h3>Total: ₹{total}</h3>

                </ul>
        }
    </div>
)
}
export default Cart