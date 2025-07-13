import React from "react";
import { Link } from "react-router";

const BillingPage = ({ totalCartsPrice }) => {
  return (
    <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <button className="btn btn-outline btn-error w-full md:w-auto">
        Clear Cart
      </button>

      <div className="text-lg md:text-xl font-semibold">
        Total:{" "}
        <span className="text-primary">${totalCartsPrice.toFixed(2)}</span>
      </div>

      <Link to={"/"} className="w-full md:w-auto">
        <button className="btn btn-primary w-full md:w-auto">Buy More</button>
      </Link>
    </div>
  );
};

export default BillingPage;
