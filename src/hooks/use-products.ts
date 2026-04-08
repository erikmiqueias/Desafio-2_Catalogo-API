import { useQuery } from "@tanstack/react-query";

import type { Product } from "@/constants/products";
import { FakeStoreService } from "@/services/fake-store.service";

export const useProducts = (): Product[] => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => new FakeStoreService().getProducts(),
  });

  return products || [];
};
