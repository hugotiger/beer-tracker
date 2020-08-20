import { useState, useEffect } from "react";
import { getAllEvents } from "../services/eventsApi";
import { sumEventAmounts } from "../utils";

export const useAllTimeTotal = () => {
  const [total, setTotal] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = () => {
      setIsLoading(true);
      getAllEvents()
        .then((res) => {
          if (res.error) setError(res.data);
          else setTotal(sumEventAmounts(res.data));
        })
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    };

    fetchEvents();
  }, []);

  return { total, isLoading, error };
};
