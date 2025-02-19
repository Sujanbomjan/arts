"use client";
import useFetchProductById from "@/api/hooks/products/useFetchProductById";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import LoadingOverlay from "@/components/LoadingOverlay/LoadingOverlay";
import ProductShortDescription from "@/components/ProductShortDescription";
import ProductDescriptionSkeletal from "@/components/Skeletal/ProductDescriptionSkeletal";
import { IProductData } from "@/types";

const ProductDescriptionWithImageSlider = ({
  productId,
  initialData,
}: {
  productId: string;
  initialData: IProductData;
}) => {
  const { data: productData, isLoading } = useFetchProductById(
    productId,
    initialData
  );
  return (
    <>
      <LoadingOverlay isVisible={isLoading} />
      {isLoading && <ProductDescriptionSkeletal />}
      <div className="flex flex-col justify-center gap-x-10 gap-y-10 bg-white px-4 py-6 md:flex-row">
        <div
          id="portal"
          className="absolute left-[520px] top-0 z-10 border-2 border-gray-300 bg-white object-cover"
        ></div>
        {!isLoading && productData && (
          <div className="w-full md:w-[50%] lg:w-[40%]">
            <ImageSlider data={productData?.img} className="max-w-md" />
          </div>
        )}
        {!isLoading && productData && (
          <ProductShortDescription
            data={productData}
            className="w-full md:w-[50%] lg:w-[60%]"
          />
        )}
      </div>
    </>
  );
};

export default ProductDescriptionWithImageSlider;
