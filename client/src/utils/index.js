export const sumBeersAmount = (beers) =>
  beers.map((beer) => beer.amount).reduce((acc, item) => (acc += item), 0);

export const formatNumber = (number) => {
  if (number > 999999) {
    return (Math.floor(number / 100000) / 10).toFixed(1) + "M +";
  } else if (number > 999) {
    return (Math.floor(number / 100) / 10).toFixed(1) + "k +";
  } else if (number > 99) {
    return Math.floor(number / 50) * 50 + "+";
  } else if (number > 9) {
    return Math.floor(number / 10) * 10 + "+";
  } else {
    return number + "+";
  }
};
