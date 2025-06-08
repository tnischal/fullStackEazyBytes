import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";
//import products from '../data/products';
import apiClient from "../api/apiClient";
import { useEffect,useState } from "react";

export default function Home(){

    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

     useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/products"); 
      setProducts(response.data);       
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to fetch products. Please try again."
      ); 
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl font-semibold">Loading products...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl text-red-500">Error: {error}</span>
      </div>
    );
  }
    return (
        <div className="home-container">
            <PageHeading>
                Hi! This is Radha Krishna Dairy situated in Bharatpur Chitwan.
            </PageHeading>
            
            <ProductListing products={products}/>
        </div>
    );

};
