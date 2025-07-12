import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-full card bg-base-100 image-full w-96 shadow-sm">
      <figure>
        <img src={product.image} alt="productsImage" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="text-lg font-semibold text-orange-400">
          ${product.price}
        </p>
        <p className="text-sm text-gray-500 capitalize">{product.category}</p>
        <p className="text-sm text-gray-400">Release: {product.releaseDate}</p>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
