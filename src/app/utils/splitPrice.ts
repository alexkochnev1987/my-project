export const splitPrice = (price: number) => {
  let number = 0;
  return String(price)
    .split("")
    .reduceRight((prev, curr, index) => {
      number++;
      if (number % 3 === 0) {
        return ` ${curr}${prev}`;
      }
      return `${curr}${prev}`;
    }, "");
};
