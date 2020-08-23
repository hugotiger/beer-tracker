import { useState, useContext, useEffect } from "react";
import { getAllBeers } from "../services/beersApi";
import { sumBeersAmount } from "../utils";
import { BeerContext } from "../context/beers/BeerContext";

export const useAllTimeTotal = () => {
  const { beers } = useContext(BeerContext);
  const [total, setTotal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const length = (beers && Math.floor(beers.length / 10)) || 0;
  useEffect(() => {
    console.log("körs");
    const fetchBeers = () => {
      getAllBeers()
        .then((res) => {
          if (res.error) setError(res.data);
          else setTotal(sumBeersAmount(res.data));
        })
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    };

    fetchBeers();
  }, [length]);

  return { total, isLoading, error };
};
