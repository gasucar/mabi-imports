import { useState, useMemo } from "react";
import type { IPerfume } from "../../../shared/interfaces/interfaces";

export const useCatalog = (perfumes: IPerfume[]) => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return perfumes.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [perfumes, search]);

  return {
    search,
    setSearch,
    filteredPerfumes: filtered,
  };
};