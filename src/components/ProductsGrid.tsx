import { useMemo } from "react";
import { useSearchParams } from "react-router";

import type { Product } from "@/constants/products";
import { useProducts } from "@/hooks/use-products";

import { ProductCard } from "./ProductCard";
import { Card, CardContent } from "./ui/card";

export const ProductsGrid = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "All products";
  const sort = searchParams.get("sort") || "asc";
  const products = useProducts();

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    let processedList = [...products];

    if (category !== "All products") {
      processedList = processedList.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase(),
      );
    }

    if (sort === "asc") {
      processedList.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      processedList.sort((a, b) => b.price - a.price);
    }

    return processedList;
  }, [products, category, sort]);

  return (
    <Card>
      <CardContent className="grid grid-cols-3 gap-4">
        {filteredProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CardContent>
    </Card>
  );
};
