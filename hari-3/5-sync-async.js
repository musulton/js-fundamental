/*
Program di JavaScript secara default akan dieksekusi baris per baris atau Synchronous, artinya baris selanjutnya akan dieksekusi setelah baris sebelumnya berhasil dikerjakan. Proses Synchronous bisa disebut blocking, karena harus menunggu tiap proses selesai, baru proses selanjutnya bisa dilakukan.

Pada kasus tertentu, program akan di eksekusi secara asynchronous saat menjalankan / tidak menunggu sampai kode selesai dieksekusi (non blocking), itu terjadi saat program menjalankan web api function.

list semua web api ada disini
https://developer.mozilla.org/en-US/docs/Web/API

Cara kerja JS dapat dilihat di gambar ini
https://miro.medium.com/max/985/0*jBHb1fFqLuoDyYCe.png
 */

function sync() {
    console.log(1)
    console.log(2)
    console.log(3)
}

// output
// 1
// 2
// 3


function async() {
    setTimeout(() => {
        console.log(1)
    }, 0)
    setTimeout(() => {
        console.log(2)
    }, 3000)
    console.log(3)
}

// output
// 3
// 1
// 2
