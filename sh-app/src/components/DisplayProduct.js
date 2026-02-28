function DisplayProduct({productData}) {
    return (
        <>
        <div>
               <h2>Product Details</h2>
            <p>Id: {productData.id}</p>
            <p>Name: {productData.name}</p>
            <p>Price: {productData.price}</p>
        </div>
         
        </>
    )
}
export default DisplayProduct