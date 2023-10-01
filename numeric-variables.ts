let counter: number;

counter = 1;

let price = 9.95;

let bin = 0b100;
let anotherBin: number = 0B010;

let octal: number = 0o10;
let anotherOctal: number = 0O12;

let hexadecimal: number = 0Xa;
let anotherHexadecimal: number = 0xF;

//let bigInt: bigint = 9007199254740991n; // BigInt literals are not available when targeting lower than ES2020.

// TypeScript shoud be configured to solve this error
// tsc --init
// in tsconfig.json
// change
// "target": "ES2016" to "ES2021"
// compile with tsconfig.json
// tsc -b

console.log(counter); 
console.log(price); 

console.log(bin);
console.log(bin.toString(2));
console.log(anotherBin);

console.log(octal);
console.log(octal.toString(8));

console.log(hexadecimal);
console.log(hexadecimal.toString(16).toUpperCase());

//console.log(bigInt);
