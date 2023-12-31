// import React from 'react';
import { Icon } from "@iconify/react";
// import Rating from "react-rating";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SingleLandscapeView = ({ product }) => {
  return (
    <div>
      <div className="relative product cursor-pointer lg:border p-5 rounded-md  flex justify-around gap-5">
        <div className="p-5  hover:text-white hover:bg-gradient-to-t from-[#1d1c3a] from-0% to-transparent to-95% transition-all duration-300 ease-in-out w-[40%] ">
          <img
            src={product?.image}
            className="w-full h-auto object-contain max-w-full max-h-60"
            alt="Book 1"
          />
        </div>
        <div className="w-[60%]">
          <h3 className="text-xl font-medium mb-2">{product?.title}</h3>
          <p>{product?.description}</p>
          <div className="flex justify-between items-center gap-5">
            <div className="flex gap-3 items-center">
              <del className="text-para_texts product_oldPrice">
                {product?.regularPrice}৳
              </del>
              <span className="text-xl">{product?.offerPrice}৳</span>
            </div>
            <button className="product_btn hover:bg-secondary font-semibold  border border-black hover:border-primary text-black mt-5 rounded-md py-2 px-5 transition-all duration-300 ease-in-out">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex productCart gap-5 flex-col absolute right-0 top-36">
        <Link to="">
          <Icon
            icon="basil:shopping-cart-solid"
            className=" text-3xl hover:bg-secondary transition-all duration-300 border border-white border-r-0 hover:border-secondary text-white pl-2 pr-5 py-2 w-full h-full rounded-l-xl"
          />
        </Link>
        <Link to="">
          <Icon
            icon="mdi:heart"
            className=" text-3xl hover:bg-secondary transition-all duration-300 border border-white border-r-0 hover:border-secondary text-white pl-2 pr-5 py-2 w-full h-full rounded-l-xl"
          />
        </Link>
      </div>
    </div>
  );
};

export default SingleLandscapeView;
