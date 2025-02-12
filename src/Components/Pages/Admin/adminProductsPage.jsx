import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlus, FaTrash, FaPen } from "react-icons/fa"; // Corrected FaPen import
import { Link } from "react-router-dom";

export default function AdminProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.error("Failed to fetch products:", err);
            });
    }, []);

    return (
        <div className="p-8 bg-gray-100 min-h-screen relative">
            {/* Add Product Button */}
            <Link to={"/admin/products/addProducts"} className="absolute right-6 bottom-6 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition-colors focus:outline-none">
                <FaPlus className="w-6 h-6" />
            </Link>

            <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Products Page</h1>
            
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Product ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Product Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Last Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Stock</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {products.map((product, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.productId}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.productName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${product.price.toFixed(2)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${product.lastPrice.toFixed(2)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.stock || "N/A"}</td>
                                <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">{product.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    <div className="flex space-x-4">
                                        <button className="text-red-500 hover:text-red-700 transition-colors">
                                            <FaTrash className="w-5 h-5" />
                                        </button>
                                        <button className="text-blue-500 hover:text-blue-700 transition-colors">
                                            <FaPen className="w-5 h-5" /> {/* Changed to FaPen */}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
