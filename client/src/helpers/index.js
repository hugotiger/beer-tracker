import moment from "moment";
import { sumBeersAmount } from "../utils";

export const calcDashboardStats = (beers, isLoading, error) => {
  let totalToday = "";
  let avgLast30days = "";
  if (beers && !error) {
    totalToday = sumBeersAmount(
      beers.filter((beers) => moment(beers.createdAt).isSame(moment(), "days"))
    );

    const beersFromPast30days = beers.filter((beers) =>
      moment(beers.createdAt).isAfter(moment().subtract(30, "days"))
    );
    let daysSinceStart;
    if (beersFromPast30days.length > 1) {
      daysSinceStart =
        moment().diff(
          beersFromPast30days[beersFromPast30days.length - 1].createdAt,
          "days"
        ) + 1;
    } else {
      daysSinceStart = 1;
    }
    avgLast30days = (
      sumBeersAmount(beersFromPast30days) / daysSinceStart
    ).toFixed(1);
  } else if (beers && beers.length === 0) {
    totalToday = "0";
    avgLast30days = "0";
  } else if (isLoading || error === null) {
    totalToday = null;
    avgLast30days = null;
  } else {
    totalToday = "-";
    avgLast30days = "-";
  }
  return { totalToday, avgLast30days };
};
