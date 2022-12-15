/*
Destructuring digunakan untuk mengektrak nilai yang ada pada array dan object
kedalam sebuah variabel
 */


// 1. Destructuring pada object
let person = {
    name: "person",
    age: 20,
    gender: "male",
    address: "Ragunan",
    hobi: "baca buku"
}

// Tanpa menggunakan destructuring
let age = person.age;
let name = person.name;
let gender = person.gender;

// Menggunakan destructuring
let { name, age, gender } = person;


// Destructuring pada array
// akan ditempatkan pada variabel sesuai urutan indexnya
let days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
let [senin, selasa, ...otherDays] = days;
