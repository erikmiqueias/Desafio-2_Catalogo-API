import { StoreBadge } from "./StoreBadge";
import { Card, CardContent } from "./ui/card";

export const StoreHeader = () => {
  return (
    <header className="w-full">
      <Card>
        <CardContent className="flex justify-between">
          <div className="space-y-2">
            <p className="text-blue-800 font-bold">FAKE STORE API</p>
            <h1 className="text-3xl font-bold">Product Catalog</h1>
            <p>Browse products, filter by category, and sort by price.</p>
          </div>
          <div className="space-x-2 self-end">
            <StoreBadge label="CATEGORY" value={"All products"} />
            <StoreBadge label="SHOWING" value={20} />
          </div>
        </CardContent>
      </Card>
    </header>
  );
};
