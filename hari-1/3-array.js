/*
Array merupakan variabel yang dapat menyimpan banyak data
Untuk mengakses data yang ada didalam array kita menggunakan indeks
indeks diawali dengan nol (0)

 */

let days = ["Senin", "Selasa", "Rabu"]
// index 0 = Senin
// index 1 = Selasa
// index 2 = Rabu

// kita juga dapat menyimpan beragam data dengan tipe data berbeda pada array JS
let arr = [1, undefined, null, "Sulton", days, person];

// ada banyak built-in function pada array JS, diantara adalah
// .push("nilai") -> untuk menambah data ke paling akhir
// .pop() -> untuk menghapus data di paling akhir
// .shift() -> untuk menghapus data di paling awal
// .unshift("nilai") -> untuk menambah data ke paling awal
// slice(1, 3) -> untuk mengambil data array pada index ke 1 sampai index ke 3
// splice(1, 3) -> untuk menghapus data array dari index ke 1 sampai 3 data selanjutnya
// dan masih banyak lagi
