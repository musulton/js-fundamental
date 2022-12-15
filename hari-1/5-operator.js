/*
Operator adalah simbol yang digunakan untuk melakukn operasi pada suatu nilai atau variabel
ada macam2 operator diantaranya

 */

// 1. Aritmatika
// operator untuk melakukan operasi aritmatika seperti penjumlahan, pengurangan, dsb

let add = 5 + 5;
console.log(add)

let sub = 5 - 5;
console.log(sub);

let mul = 5 * 5;
console.log(mul);

let div = 5 / 5;
console.log(div);

let mod = 5 % 5;
console.log(mod);

let exp = 5 ** 5;
console.log(exp);

// operator + bisa digunakan untuk melakukan penggabungan teks
let firsName = "Muhammad";
let lastName = "Sulton";
console.log(firsName + " " + lastName);

// ketika menggabungkan string dan number maka semuanya akan dianggap sebagai string
let number1 = "1000";
let number2 = 1; // auto casting ke string
console.log(number1 + number2); // 10001

let number4 = 1000; // auto casting ke string
let number5 = "1";
console.log(number4 + number5); // 10001

let number1 = "1000";
let number2 = 1; // auto casting ke number
console.log(number1 - number2);

let number4 = 1000; // auto casting ke number
let number5 = "1";
console.log(number4 - number5);


// 2. Assignment
// digunakan untuk memberikan tugas kepada variabel

// mengisi nilai pada variabel
let fullname = "Muhammad Sulton";

let number10 = 10;
number10 = 10 + 10;

// mengisi nilai dan lakukan penambahan pada variabel
number10 += 10;
console.log(number10);

number10 = number10 - 10;
// mengisi nilai dan lakukan pengurangan pada variabel
number10 -= 10;
console.log(number10);

number10 = number10 / 10;
// mengisi nilai dan lakukan pembagian pada variabel
number10 /= 10;
console.log(number10)

number10 = number10 * 10;
// mengisi nilai dan lakukan perkalian pada variabel
number10 *= 10;

number10 = number10 ** 10;
// mengisi nilai dan lakukan perpangkatan pada variabel
number10 **= 10;

number10 = number10 % 10;
// mengisi nilai dan lakukan modulus pada variabel
number10 %= 10;


// 3. Perbandingan
// digunakan untuk membandingkan dua nilai

let boolean1 = 10 == "10"; // nilai sama dengan
let boolean2 = 10 === "10"; // nilai dan tipe data sama dengan

let boolean3 = 5 < 10; // lebih kecil dari
let boolean4 = 5 > 10; // lebih besar dari
let boolean5 = 5 != "5"; // nilai tidak sama dengan
let boolean5 = 5 !== "5"; // nilai dan tipe data tidak sama dengan
let boolean6 = 5 <= "10"; // lebih kecil dari sama dengan
let boolean7 = 5 >= 10; // lebih besar dari sama dengan

// 4. Logika
// digunakan untuk melakukan operasi terhadap nilai boolean

console.log("AND", false && false);
console.log("OR", false || false);
console.log("Negasi", !false);

// 5. Bitwise
// operator yang digunakan untuk operasi berdasarkan bit (biner)
let a = 0
let b = 1

// & AND
console.log(a & b);

// | OR
console.log(a | b);

// ^ XOR
console.log(a ^ b);

// ~ NEGASI
console.log(~a);

// 6. Ternary
// terdiri dari 3 bagian, biasanya dibuat untuk percabangan
// <kondisi> ? "benar" : "salah"
let result = 10 % 2 === 0 ? "Genap" : "Ganjil"
