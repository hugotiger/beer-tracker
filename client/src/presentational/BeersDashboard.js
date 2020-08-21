import React, { useContext } from "react";
import { BeerContext } from "../context/beers/BeerContext";
import { Dashboard } from "../components";
import { calcDashboardStats } from "../helpers";

export function BeersDashboard() {
  const { beers, isLoading, error } = useContext(BeerContext);

  const { totalToday, avgLast30days } = calcDashboardStats(
    beers,
    isLoading,
    error
  );

  return React.useMemo(() => {
    return <Dashboard totalToday={totalToday} avgLast30days={avgLast30days} />;
  }, [totalToday, avgLast30days]);
}
