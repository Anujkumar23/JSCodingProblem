// Print all the prime Number till 100
let count = 0;


for (let j = 0; j <= 100; j++) {
  for (let i = 1; i <= j; i++) {
    if (j % i === 0) {
        count++;
    }
  }
  if (count == 2){
    console.log(j);
}
count = 0;
}