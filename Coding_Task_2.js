console.log("\n Task 2 done by Ramanpreet\n")
function calculateNumberToothbrushForLife(age, amountPerMonth) {
  
  const maxAge = 98;

  const totalToothbrushes = (maxAge - age) * 12 * amountPerMonth;
  console.log(`You will need ${totalToothbrushes} toothbrushes to last you until the age of ${maxAge}`);
}

calculateNumberToothbrushForLife(25, 1); // First call
calculateNumberToothbrushForLife(30, 2); // Second call with different value
