import Product from "./Product"

function ProductList({addToCart}) {
    const products = [
        {
          id: "1",
          name: "Iphone 13 Pro Max",
          price: 150000,
          description: "The iPhone 14 Pro Max is the latest flagship smartphone from Apple, featuring a stunning design, powerful performance, and advanced camera capabilities. It boasts a large Super Retina XDR display, A16 Bionic chip for lightning-fast performance, and an improved camera system with ProRAW and ProRes video recording. With its sleek design and cutting-edge features, the iPhone 14 Pro Max is a top choice for tech enthusiasts and Apple fans alike."
        },
        {
          id: "2",
          name: "Samsung Galaxy S23 Ultra",
          price: 120000,
          description: "The Samsung Galaxy S23 Ultra is a high-end smartphone that offers a premium experience with its sleek design, powerful performance, and advanced features. It boasts a large Dynamic AMOLED display, a powerful Exynos 2200 or Snapdragon 8 Gen 1 processor, and an impressive camera system for stunning photography. With its long-lasting battery and cutting-edge technology, the Galaxy S23 Ultra is a top choice for those seeking a flagship Android device."
        },
        {
            id: "3",
            name: "OnePlus 11 Pro",
            price: 90000,
            description: "The OnePlus 11 Pro is a flagship smartphone that combines sleek design with powerful performance. It features a large Fluid AMOLED display, a fast Snapdragon 8 Gen 1 processor, and an advanced camera system for stunning photos and videos. With its long-lasting battery and OxygenOS software, the OnePlus 11 Pro offers a smooth and enjoyable user experience for tech enthusiasts and smartphone users alike."
        }
    ]
  return (
    <div>
      <h2>Product List</h2>
      {
        products.map((p) => 
        <div key={p.id}>  <Product product={p} addToCart={addToCart}/></div>
      
        )
      }

    </div>
  )
}
export default ProductList