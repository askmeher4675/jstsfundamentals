//in js, in a n array any value can be stored irrespective of data type
//in js, int is number

let colors = ["red", "green", "blue"];
let colorscolor = ["red", "green", 12];

console.log(colors[0]); //red
console.log(colors[3]); //undefined , as it is out of range

console.log(colors.length); // 3 , length is 3, index is 0,1,2
console.log(typeof colors); //object

console.log(colorscolor);
console.log(colorscolor[2]);

// Traditonal
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//Modern
for (let color of colors) {
  console.log(color);
}
