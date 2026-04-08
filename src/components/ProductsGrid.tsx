import type { Product } from "@/constants/products";
import { useProducts } from "@/hooks/use-products";

import { ProductCard } from "./ProductCard";
import { Card, CardContent } from "./ui/card";

export const ProductsGrid = () => {
  const { products } = useProducts();

  return (
    <Card>
      <CardContent className="grid grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CardContent>
    </Card>
  );
};
