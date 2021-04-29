let sourceMap = new Map();
let nums = [
  { source: "s1", productCode: "p1", date: "1", qty: 10 },
  { source: "s1", productCode: "p1", date: "1", qty: 10 },
  { source: "s1", productCode: "p1", date: "2", qty: 10 },
  { source: "s1", productCode: "p1", date: "2", qty: 20 },
  { source: "s1", productCode: "p2", date: "1", qty: 30 },
  { source: "s1", productCode: "p2", date: "2", qty: 20 },
  { source: "s2", productCode: "p1", date: "1", qty: 10 },
  { source: "s2", productCode: "p1", date: "2", qty: 10 },
  { source: "s2", productCode: "p3", date: "1", qty: 20 },
];

for (let obj of nums) {
  source = obj["source"];
  productCode = obj["productCode"];
  date = obj["date"];
  qty = obj["qty"];
  if (sourceMap.has(source)) {
    if (sourceMap.get(source).has(productCode)) {
      if (sourceMap.get(source).get(productCode).has(date)) {
        sourceMap
          .get(source)
          .get(productCode)
          .set(date, sourceMap.get(source).get(productCode).get(date) + qty);
      } else {
        sourceMap.get(source).get(productCode).set(date, qty);
      }
    } else {
      let dateMap = new Map();
      sourceMap.get(source).set(productCode, dateMap);
    }
  } else {
    let productMap = new Map();
    sourceMap.set(source, productMap);
  }
}

console.log(sourceMap);
