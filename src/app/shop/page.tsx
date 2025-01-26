'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="px-6 lg:px-12 py-8">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-[url('/shop-bg.jpg')] bg-cover bg-center flex items-center justify-center text-white text-center shadow-lg">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold uppercase tracking-wider">Shop</h1>
          <p className="mt-4 text-lg">
            <Link href="/" className="underline text-gray-200 hover:text-white">
              Home
            </Link>{" "}
            &gt; Shop
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white group"
            >
              <Link href={`/shop/${product._id}`}>
                {/* Product Image */}
                <div className="relative w-full h-64">
                  {product.image ? (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name || "Product Image"}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                      No Image Available
                    </div>
                  )}
                </div>
              </Link>

              {/* Product Info */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.name || "Unknown Product"}
                </h2>
                <p className="text-lg font-bold text-blue-600 mt-2">
                  ${product.price ? product.price.toFixed(2) : "N/A"}
                </p>
                <Link href={`/shop/${product._id}`}>
                  <button className="mt-4 w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition duration-300">
                    View Product
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            All products available.
          </p>
        )}
      </div>
    </div>
  );
};

export default Shop;
