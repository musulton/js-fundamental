/*
Promise / janji untuk menangani operasi asinkron dalam JavaScript. lebih baik dari pada callback karena mudah dikelola ketika berhadapan dengan beberapa operasi asinkron, di mana panggilan balik dapat membuat neraka panggilan balik yang mengarah ke kode yang tidak dapat dikelola.

Pada saat promise dikembalikan ke pemanggil, operasi seringkali belum selesai, tetapi objek janji menyediakan metode untuk menangani keberhasilan atau kegagalan operasi.

Promise memiliki tiga kondisi, yaitu:
1. Pending (Janji sedang dalam proses)
2. Fullfilled (Janji ditepati)
3. Rejected (Janji gagal terpenuhi)

ref:
https://www.freecodecamp.org/news/how-to-deal-with-nested-callbacks-and-avoid-callback-hell-1bc8dc4a2012/

 */

const doStep1 = (init) => new Promise((resolve) => {
    setTimeout(() => {
        const result = init + 1;
        resolve(result);
    }, 1000)
})

const doStep2 = (init) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = init + 2;
        resolve(result);
    }, 1000)

    // reject('Gagal mengambil data')
})

const doStep3 = (init) => new Promise((resolve) => {
    setTimeout(() => {
        const result = init + 3;
        resolve(result);
    }, 1000)
})

// function doOperation() {
//     doStep1(0).then((result1) => {
//         doStep2(result1).then((result2) => {
//             doStep3(result2).then((result3) => {
//                 console.log(`result: ${result3}`)
//             })
//         })
//     })
// }

// Dengan promise kita akan mudah mengelola dan men debug apabila sewaktu2 ada proses yang gagal dijalankan karena kegagalan dapat ditangkap menggunakan .catch method

// function doOperation() {
//     doStep1(0)
//         .then(doStep2)
//         .then(doStep3)
//         .then((result3) => console.log(`result: ${result3}`))
//         .catch((error) => console.log(`Error: ${error}`))
// }

// async function doOperation() {
//     try {
//         const result1 = await doStep1(0);
//         const result2 = await doStep2(result1);
//         const result3 = await doStep3(result2);
//         console.log(`result: ${result3}`)
//     } catch (e) {
//         console.log(`error: ${e}`)
//     }
// }

doOperation();
