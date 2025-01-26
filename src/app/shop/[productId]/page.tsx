 "use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../../types/products";

import Image from "next/image";

const ProductDetail = ({ params }: { params: { productId: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const query = `*[_type == "product" && _id == $productId][0]`;
        const fetchedProduct = await client.fetch(query, {
          productId: params.productId,
        });

        // Debugging fetched data
        console.log("Fetched Product:", fetchedProduct);

        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    }

    fetchProductDetails();
  }, [params.productId]);

  // If product data isn't loaded
  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium text-gray-700">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="px-6 lg:px-24 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="flex justify-center">
          {product.image && (
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                quality={90}
              />
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-start">
          {/* Product Name */}
          <h1 className="text-4xl font-extrabold text-gray-800">{product.name}</h1>

          {/* Price */}
          <p className="text-2xl font-semibold text-blue-600 mt-4">
            ${product.price.toFixed(2)}
          </p>

          {/* Discount */}
          {product.discountPercentage && (
            <p className="text-lg font-medium text-red-500 mt-2">
              Discount: {product.discountPercentage}% off
            </p>
          )}

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-700">Description</h2>
            <p className="mt-2 text-gray-600 leading-relaxed text-justify">
              {product.description}
            </p>
          </div>

          {/* Stock Status */}
          <p
            className={`mt-6 text-lg font-semibold ${
              product?.stockLevel && product.stockLevel > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {product?.stockLevel && product.stockLevel > 0 ? "In Stock" : "Out of Stock"}
          </p>

          {/* Add to Cart Button */}
          <button
            disabled={!product?.stockLevel || product.stockLevel === 0}
            className={`mt-6 px-6 py-2 rounded-md text-white font-semibold ${
              product?.stockLevel && product.stockLevel > 0
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Add to Cart
          </button>

          {/* Featured Badge */}
          {product.isFeaturedProduct && (
            <span className="mt-4 inline-block bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-full">
              Featured Product
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
