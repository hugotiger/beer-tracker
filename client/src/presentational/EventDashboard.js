import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState/GlobalState";
import { Dashboard } from "../components";
import { calcDashboardStats } from "../helpers";

export function EventDashboard() {
  const { events, isLoading, error } = useContext(GlobalContext);

  const { totalToday, avgLast30days } = calcDashboardStats(
    events,
    isLoading,
    error
  );

  return React.useMemo(() => {
    return <Dashboard totalToday={totalToday} avgLast30days={avgLast30days} />;
  }, [totalToday, avgLast30days]);
}
