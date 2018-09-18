// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if (currency > 10000) {
    return { error: "You are rich, my friend! We don't have so much coins for exchange" };
  }

  const exchanger = {
    'H': 50,
    'Q': 25,
    'D': 10,
    'N': 5,
    'P': 1,
  }

  const coinsAfterExchange = {};
  let currentFreeCoins = currency;

  Object.keys(exchanger).forEach(coinName => {
    if (currentFreeCoins >= exchanger[coinName]) {
      coinsAfterExchange[coinName] = Math.floor(currentFreeCoins / exchanger[coinName]);
      currentFreeCoins = currentFreeCoins % exchanger[coinName];
    }
  })

  return coinsAfterExchange;
}
