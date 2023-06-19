export const getData = async (count) => {
  await sleep(1000);

  console.log("fetch data ", count);
  return "Hello Data " + count;
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
