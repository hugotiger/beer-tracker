import React from "react";
import { Counter } from "../components";
import { formatNumber } from "../utils";
import { useAllTimeTotal } from "../hooks";

export function TotalCounter() {
  const { total, isLoading, error } = useAllTimeTotal();
  const isPending = isLoading || (total === null && error === null);

  return (
    <Counter
      total={
        (isPending && "\u00a0") ||
        (error && "-") ||
        (total !== null && formatNumber(total))
      }
    />
  );
}
