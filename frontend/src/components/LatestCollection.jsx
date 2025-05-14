import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTION" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simple dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's.
        </p>
      </div>
      {/* Display latest products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {latestProducts.map((product) => (
          <div key={product.id} className="p-4 border rounded">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto"
            />
            <h3 className="mt-2 font-semibold text-lg">{product.name}</h3>
            <p className="mt-1 text-sm">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
