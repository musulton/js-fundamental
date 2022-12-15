/*
Looping digunakan untuk mengulang eksekusi kode
ada 5 cara looping, diantaranya
 */

// 1. for
// mempunyai struktur (initialization, condition, increment/decrement)
for (let i = 1; i < 5; i++) {
    console.log(i)
}

// 2. while
// berbeda dengan for inisialisasi di deklarasikan diluar looping dan increment/decrement dideklarasikan didalam blok kode looping
let angka = 0
while (angka < 5) {
    console.log(angka)
    angka++;
}

// 3. do while
// digunakan untuk mengulang blok kode setidaknya 1 kali perulangan
// akan menjalankan blok kode sebelum mengecek kondisi pada perulangan
let angka1 = 0;
do {
    console.log(angka1)
    angka1++
} while (angka1 > 5)

// 4. for in
// untuk mengulang array dan objek, menghasilkan index pada array atau properti pada objek
const days = ["Senin", "Selasa", "Rabu"];
for (let idx in days) {
    console.log(days[idx]);
}

const person = { name: "Sulton", age: 20 }
for (let item of person) {
    console.log(person[item])
}

// 5. for of
// untuk mengulang array, menghasilkan nilai isi array
for (let day of days) {
    console.log(day)
}
