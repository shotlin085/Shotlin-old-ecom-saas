import React, { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProductList = ({ products = [] }) => {
  console.log(products[0].price.inr) 
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 md:px-4">
      {products.map((product) => {
        const optimizedImage = product.image?.[0]?.replace(
          "/upload/",
          "/upload/f_auto,q_auto:low,w_500/"
        );

        return (
          <a href={`/${product.name}/service/${product.id}`} key={product.id}>
            <Card
              key={product.id}
              className={cn(
                "overflow-hidden border border-[#333] transition-transform hover:scale-105",
                product.stock === 0 && "opacity-50"
              )}
            >
              {/* Product Image */}
              <div className="relative w-full h-56 overflow-hidden rounded-t-lg">
                <img
                  src={optimizedImage}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                {product.stock === 0 && (
                  <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                    Not Available
                  </Badge>
                )}
              </div>

              {/* Product Details */}
              <CardContent className="p-4 flex flex-col gap-2">
                <h3 className="text-white text-lg font-semibold truncate">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-sm truncate">
                  {product.tags?.[0] || "No tags"}
                </p>
                <span className="text-green-400 font-bold text-lg">
                  {product?.price?.inr ? `₹${product.price.inr}` : product?.price ? `$${product.price}` : "Price not available"}
                </span>

                <Button
                  variant="default"
                  className="w-full mt-2"
                  disabled={product.stock === 0}
                >
                  {product.stock === 0 ? "Out of Stock" : "View Details"}
                </Button>
              </CardContent>
            </Card>
          </a>
        );
      })}
    </div>
  );
};

export default memo(ProductList);
