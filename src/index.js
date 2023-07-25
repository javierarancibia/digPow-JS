const digPow = (n, p) => {
  const nArray = n.toString().split("");
  let sum = 0;
  let index = p;
  for (let i = 0; i < nArray.length; i++) {
    sum = sum + Math.pow(Number(nArray[i]), index);
    index = index + 1;
  }
  const k = sum / n;
  if (Number.isInteger(k)) {
    return k;
  }
  return -1;
};

console.log(digPow(154, 2));
