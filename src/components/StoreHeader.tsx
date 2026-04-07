import { StoreBadge } from "./StoreBadge";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

export const StoreHeader = () => {
  return (
    <header className="w-full">
      <Card>
        <CardContent className="flex justify-between">
          <div>
            <CardDescription className="text-blue-800 font-bold">
              FAKE STORE API
            </CardDescription>
            <CardTitle className="text-2xl font-bold">
              Product Catalog
            </CardTitle>
            <CardDescription>
              Browse products, filter by category, and sort by price.
            </CardDescription>
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
