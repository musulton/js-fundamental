/*
Tipe data di JS dibagi jadi 2
Primitif -> saat di assign ke variabel lain, maka nilainya yang di kopi
diantaranya:
undefined
null
boolean
number
string
symbol

maka nilai primitif adalah immutable (ketika di assign ke variabel a dan variabel a ini dimanipulasi, maka variabel sumber tidak akan berubah)

Referensi -> saat di assign ke variabel lain, maka letak memorinya yang di kopi
diantaranya:
objects
arrays
functions

nilai referensi adalah mutable (ketika di assign ke variabel a dan variabel a dimanipulasi, maka variabel sumber akan berubah)

 */

// ada 3 cara untuk membuat nilai baru dari object dan array lain

const object = { name: "Name" };
const array = [1,2,3,4];

// 1. operator spread
const newArray = [...array];
const newObject = {...object};


// 2. Menggunakan method dari tipe datanya
const newArray1 = Array.from(array);
const newObject1 = Object.assign({}, object);

// 3. Menggunakan JSON method
// dapat digunakan untuk akan mengatasi deep reference pada array dan object
const newArray2 = JSON.parse(JSON.stringify(array));
const newObject3 = JSON.parse(JSON.stringify(object))
