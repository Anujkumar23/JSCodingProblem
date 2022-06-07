let arr = [1, 3, 2, 2, 3, 4];

function duplicateNumber(num) {
  let duplicateValues = [];

  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (i !== j) {
        if (num[i] === num[j]) {
          if (!duplicateValues.includes(num[i])) {
            duplicateValues.push(num[i]);
          }
        }
      }
    }
  }
  return duplicateValues.reduce(function (a, b) {
    return (a = a + b);
  });
}

console.log(duplicateNumber(arr));
