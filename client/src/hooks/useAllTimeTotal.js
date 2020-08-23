import { useState, useEffect } from "react";
import { getAllBeers } from "../services/beersApi";
import { sumBeersAmount } from "../utils";

export const useAllTimeTotal = () => {
  const [total, setTotal] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBeers = () => {
      setIsLoading(true);
      getAllBeers()
        .then((res) => {
          if (res.error) setError(res.data);
          else setTotal(sumBeersAmount(res.data));
        })
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    };

    fetchBeers();
  }, []);

  return { total, isLoading, error };
};
