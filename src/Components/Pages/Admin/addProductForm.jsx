import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddProductForm() {

    const [productId, setProductId] = useState("")
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [lastPrice, setLastPrice] = useState("")
    const [imageUrls, setImageUrls] = useState("")
    const [alternativeNames, setAlternativeNames] = useState("")
    const [stock, setStock] = useState("")

    const navigate = useNavigate()

    async function handleSubmit(){

      const altNames = alternativeNames.split(",")
      const imgUrls = imageUrls.split(",")

      const product = {
        productId : productId,
        productName : productName,
        alternativeNames : altNames,
        images : imgUrls,
        price : productPrice,
        lastPrice : lastPrice,
        stock : stock,
        description : productDescription

      }

      const token = localStorage.getItem("token")

      try{
        await  axios.post("http://localhost:3000/api/products",product, {
          headers: {
            Authorization : "Bearer "+token
          }
        })
        navigate("/admin/products")
        toast.success("product added successfuly")
      }catch(err){
        toast.error("Failed to add product")
      }

    }
    

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Add Product</h1>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Product ID</label>
              <input type="text" className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" value={productId} onChange={(e)=>{setProductId(e.target.value)}} />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Product Name</label>
              <input type="text" className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" value={productName} onChange={(e)=>{setProductName(e.target.value)}} />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Alternative Names</label>
              <input type="text" className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" value={alternativeNames} onChange={(e)=>{setAlternativeNames(e.target.value)}} />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Image URLs</label>
              <input type="text" className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" value={imageUrls} onChange={(e)=>{setImageUrls(e.target.value)}}/>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Price</label>
              <input type="number" className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" value={productPrice} onChange={(e)=>{setProductPrice(e.target.value)}} />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Last Price</label>
              <input type="number" className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" value={lastPrice} onChange={(e)=>{setLastPrice(e.target.value)}} />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Stock</label>
              <input type="number" className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" value={stock} onChange={(e)=>{setStock(e.target.value)}} />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Description</label>
              <textarea className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" rows="3" value={productDescription} onChange={(e)=>{setProductDescription(e.target.value)}} />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition" onClick={handleSubmit}>Add Product</button>
          </div>
        </div>
      </div>
    );
  }
  