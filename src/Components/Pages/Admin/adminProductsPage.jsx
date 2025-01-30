import axios from "axios"
import { useEffect, useState } from "react"

export default function AdminProductsPage(){
   


    const [products,setProducts] = useState([

        
            {
                "_id": "677e2118e293c2ba963ed12e",
                "productId": "B1001",
                "productName": "Hydrating Face Cream",
                "alternativeNames": [
                    "Moisturizing Day Cream",
                    "Hydration Boost Cream"
                ],
                "images": [
                    "https://example.com/images/hydrating-face-cream-front.jpg",
                    "https://example.com/images/hydrating-face-cream-back.jpg"
                ],
                "price": 25.99,
                "lastPrice": 29.99,
                "description": "A lightweight face cream designed to hydrate and nourish dry skin. Perfect for daily use, enriched with aloe vera and vitamin E.",
                "__v": 0
            },
            {
                "_id": "677e2123e293c2ba963ed130",
                "productId": "B1002",
                "productName": "Hydrating Face Cream",
                "alternativeNames": [
                    "Moisturizing Day Cream",
                    "Hydration Boost Cream"
                ],
                "images": [
                    "https://example.com/images/hydrating-face-cream-front.jpg",
                    "https://example.com/images/hydrating-face-cream-back.jpg"
                ],
                "price": 25.99,
                "lastPrice": 29.99,
                "description": "A lightweight face cream designed to hydrate and nourish dry skin. Perfect for daily use, enriched with aloe vera and vitamin E.",
                "__v": 0
            }


        
    ])

    useEffect(
        ()=>{

            axios.get("http://localhost:3000/api/products").then((res)=>{
                console.log(res.data)
                setProducts(res.data)
        
            })

        },[]
    )


    console.log(products)

    return (
        <div>
        <h1>Admin Products Page</h1>
        {
            products.map((product,index)=>{
                return(
                    <div key={product._id}>
                        {index}
                        {product.productName}
                    </div>
                )
            })
        }
        </div>
    )
}