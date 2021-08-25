function checkCashRegister(price, cash, cid) {
  var change = [];
  let cidSum = (cid.reduce((sum, unit) => unit[1] + sum, 0)).toFixed(2);

  let changeSum = cash - price;

  if (changeSum > cidSum)
    return {
      status: "INSUFFICIENT_FUNDS", change: []
    };
  if (changeSum == cidSum)
    return {
      status: "CLOSED", change: [...cid]
    };
  
  let units = {
    'ONE HUNDRED': 100.00,
    'TWENTY': 20.00,
    'TEN': 10.00,
    'FIVE': 5.00,
    'ONE': 1.00,
    'QUARTER': 0.25,
    'DIME': 0.10,
    'NICKEL': 0.05,
    'PENNY': 0.01
  };

  cid = cid.reverse();
  for (let i of cid) {
    let amount = 0;
    while (changeSum >= units[i[0]] && i[1] > 0) {
      i[1] -= units[i[0]];
      changeSum -= units[i[0]];
      changeSum = changeSum.toFixed(2);
      amount += units[i[0]];
    }
    if (amount)
      change.push([i[0], amount]);
  }

  if (changeSum > 0)
    return {
      status: "INSUFFICIENT_FUNDS", change: []
    };

  return {
    status: "OPEN",
    change: change
  };
}