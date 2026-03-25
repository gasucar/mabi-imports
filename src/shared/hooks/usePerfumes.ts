import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { IPerfume } from "../interfaces/interfaces";

type Response = {
  data: IPerfume[];
  total: number;
  page: number;
  limit: number;
};

export const usePerfumes = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") || 1);
  const search = searchParams.get("search") || "";

  const [perfumes, setPerfumes] = useState<IPerfume[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const limit = 9;

  useEffect(() => {
    const fetchPerfumes = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/perfumes?page=${page}&limit=${limit}&search=${search}`
        );

        const data: Response = await res.json();

        setPerfumes(data.data);
        setTotal(data.total);

      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPerfumes();
  }, [page, search]);

  const setPage = (newPage: number) => {
    setSearchParams({ page: String(newPage), search });
  };

  const setSearch = (value: string) => {
    setSearchParams({ page: "1", search: value });
  };

  return {
    perfumes,
    total,
    page,
    limit,
    loading,
    setPage,
    setSearch,
    search
  };
};