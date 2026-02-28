function ListDemo() {
    const Products = [
        {
            id: 101,
            price: 389274,
            name: "oppo"
        },
        {
            id: 102,
            price: 89274,
            name: "iphone"
        },
        {
            id: 103,
            price: 59274,
            name: "samsung"
        }
    ]
    return (
        <>
            <div>
                {
                    Products.map(product=>
                    <div key={product.id}>{product.id} {product.name} {product.price}</div>)
                }
            </div>
        </>
    )
}
export default ListDemo