import DisplayProduct from "./DisplayProduct";


function FetchProduct()
{
    const productdata ={
        id:1,
        name:"iphone",
        price:23456
    };
    return(
        <>
            <DisplayProduct productData={productdata}/>
        </>
    )
}
export default FetchProduct