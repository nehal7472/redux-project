import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import AddProductForm from "../Components/AddProductForm";

export default function Home() {
  const products = useSelector((state) => state.products.allProducts);

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>

        {/* Right section: Add new product form/placeholder */}
        <div className=" p-4 rounded ">
          <AddProductForm />
        </div>
      </div>
    </div>
  );
}
