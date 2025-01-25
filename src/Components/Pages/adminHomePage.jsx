import { Link, Routes, Route } from "react-router-dom";
import { GoGraph } from "react-icons/go";
import { FaBox, FaShoppingCart, FaUsers } from "react-icons/fa";
import AdminProductsPage from "./Admin/adminProductsPage";

export default function AdminHomePage() {
    return (
        <div className="bg-blue-200 h-screen w-full flex">

            {/* Sidebar */}
            <div className="bg-blue-500 w-[20%] h-screen flex flex-col items-center py-6 space-y-4">
                <Link 
                    className="flex items-center space-x-2 text-white hover:bg-blue-600 p-2 rounded-md w-4/5 text-center" 
                    to="/admin/dashboard/">
                    <GoGraph />
                    <span>Dashboard</span>
                </Link>

                <Link 
                    className="flex items-center space-x-2 text-white hover:bg-blue-600 p-2 rounded-md w-4/5 text-center" 
                    to="/admin/products/">
                    <FaBox />
                    <span>Products</span>
                </Link>

                <Link 
                    className="flex items-center space-x-2 text-white hover:bg-blue-600 p-2 rounded-md w-4/5 text-center" 
                    to="/admin/orders/">
                    <FaShoppingCart />
                    <span>Orders</span>
                </Link>

                <Link 
                    className="flex items-center space-x-2 text-white hover:bg-blue-600 p-2 rounded-md w-4/5 text-center" 
                    to="/admin/customers">
                    <FaUsers />
                    <span>Customers</span>
                </Link>
            </div>

            
            <div className="w-[80%] h-screen bg-red-500">
                <Routes path="/*">
                    <Route path="/dashboard" element={<h1 className="text-black">Dashboard</h1>} />
                    <Route path="/products" element={<AdminProductsPage/>} />
                    <Route path="/orders" element={<h1>Orders</h1>} />
                    <Route path="/customers" element={<h1>Customers</h1>} />
                    <Route path="/*" element={<h1>404 Admin page not found</h1>}/>
                </Routes>
            </div>

        </div>
    );
}
