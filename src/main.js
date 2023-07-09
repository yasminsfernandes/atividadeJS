let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Usando 'while':");
let a = 0;
while (a < array.length) {
  console.log(array[a]);
  a++;
}

console.log("\nUsando 'do-while':");
let b = 0;
do {
  console.log(array[b]);
  b++;
} while (b < array.length);

console.log("\nUsando 'for':");
for (let c = 0; c < array.length; c++) {
  console.log(array[c]);
}

console.log("\nUsando 'foreach':");
array.forEach(function(element) {
  console.log(element);
});