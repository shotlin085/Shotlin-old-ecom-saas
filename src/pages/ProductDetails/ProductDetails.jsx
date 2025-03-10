import React, { useCallback } from "react";
import { ProductShowcase } from "../../Layout";
import Particles from "@/components/ui/particles";
import { ProDet_hero, Prodet_Overview, ProDet_img } from "../../Layout/ProductDetails_layout/Pro_Details_compo";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ProductDetailsApi from "../../api/ProductDetails.api.js";

const ProductDetails = () => {
  const { product_id } = useParams(); // Get product ID from URL

  // Memoized API Call Function
  const fetchProductData = useCallback(async () => {
    if (!product_id) throw new Error("Invalid product ID");
    return await ProductDetailsApi(product_id);
  }, [product_id]);

  // Fetch product data with caching optimizations
  const { data, isLoading, error } = useQuery({
    queryKey: ["product", product_id],
    queryFn: fetchProductData,
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
    cacheTime: 10 * 60 * 1000, // Keep cache for 10 minutes
    retry: 2, // Retry fetching 2 times if API fails
    enabled: !!product_id, // Prevent API call if product_id is missing
  });

  return (
    <section className="h-auto w-full bg-[#05071A] relative">
      {/* Background Particles Effect */}
      <Particles className="absolute inset-0 hidden md:block" quantity={200} ease={80} color="#ffffff" refresh />

      {/* Loading & Error Handling */}
      {isLoading && <p className="text-center text-white py-10">Loading product...</p>}
      {error && <p className="text-center text-red-500 py-10">Error: {error.message}</p>}

      {/* Render only if data is available */}
      {data && (
        <>
          <ProDet_hero ProductHeroDetail={data} />
          <ProDet_img ProductImgDetail={{ img: data?.image }} />
          <Prodet_Overview ProductOverviewDetail={data} />
          <ProductShowcase />
        </>
      )}
    </section>
  );
};

export default React.memo(ProductDetails);
