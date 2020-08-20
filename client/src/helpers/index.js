import moment from "moment";
import { sumEventAmounts } from "../utils";

export const calcDashboardStats = (events, isLoading, error) => {
  let totalToday = "";
  let avgLast30days = "";
  if (events && !error) {
    totalToday = sumEventAmounts(
      events.filter((event) => moment(event.createdAt).isSame(moment(), "days"))
    );

    const eventsFromPast30days = events.filter((event) =>
      moment(event.createdAt).isAfter(moment().subtract(30, "days"))
    );
    let daysSinceStart;
    if (eventsFromPast30days.length > 1) {
      daysSinceStart =
        moment().diff(
          eventsFromPast30days[eventsFromPast30days.length - 1].createdAt,
          "days"
        ) + 1;
    } else {
      daysSinceStart = 1;
    }
    avgLast30days = (
      sumEventAmounts(eventsFromPast30days) / daysSinceStart
    ).toFixed(1);
  } else if (events && events.length === 0) {
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
