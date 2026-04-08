import { useSearchParams } from "react-router";

import { Card, CardContent } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const CatalogControls = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSort = searchParams.get("sort") || "asc";

  const handleSortChange = (sort: string) => {
    setSearchParams((prevSort) => {
      prevSort.set("sort", sort);
      return prevSort;
    });
  };

  return (
    <Card>
      <CardContent className="flex justify-between">
        <div className="space-y-2">
          <p className="text-blue-800 font-bold text-xs">REFINE THE CATALOG</p>
          <h3 className="text-xl font-bold">Sort the current selection</h3>
          <p>
            Use price sorting to change how products are presented without
            leaving the current category view.
          </p>
        </div>

        <div className="self-end">
          <span>Sort by price</span>
          <Select value={currentSort} onValueChange={handleSortChange}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Price sorting" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Price: Low to High</SelectItem>
              <SelectItem value="desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};
