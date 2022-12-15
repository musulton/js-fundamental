/*
callback adalah fungsi yang akan dieksekusi setelah fungsi lain selesai dieksekusi

Fungsi apa pun yang diteruskan sebagai argumen ke suatu fungsi sehingga dapat dieksekusi dalam fungsi tersebut disebut sebagai fungsi callback

Dapat digunakan untuk menhandle fungsi asinkron
 */

// Callback example ke 1

function add(num1, num2, cb) {
    let result;
    setTimeout(() => {
        result = num1 + num2
        cb(result);
    }, 3000)

    console.log(result);
}

// Callback example ke 2

function download(url, success, failed) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        // process the picture once it is completed
        if (url) {
            success(url);
        } else {
            failed();
        }

    }, 1000);
}

// let url = 'https://www.enigmacamp.com';
// download(
//     url,
//     function(picture) {
//         console.log(`Success download ${picture}`);
//     },
//     function () {
//         console.log('Failed download')
//     });

// example 3
// Di sini kami memiliki satu operasi yang dibagi menjadi tiga langkah, di mana setiap langkah bergantung pada langkah terakhir. Dalam contoh kita, langkah pertama menambahkan 1 ke input, langkah kedua menambahkan 2, dan langkah ketiga menambahkan 3. Dimulai dengan input 0, hasil akhirnya adalah 6 (0 + 1 + 2 + 3). Sebagai program sinkron, ini sangat mudah

// Contoh operasi sinkron
// function doStep1(init) {
//     return init + 1;
// }
//
// function doStep2(init) {
//     return init + 2;
// }
//
// function doStep3(init) {
//     return init + 3;
// }
//
// function doOperation() {
//     let result = 0;
//     result = doStep1(result);
//     result = doStep2(result);
//     result = doStep3(result);
//     console.log(`result: ${result}`);
// }

// Contoh proses asinkron
// Apabila salah satu atau semua langkah merupakan proses asinkron maka hasilnya akan berbeda / tidak sesuai harapan

function doStep1(init) {
    let result = init;
    setTimeout(() => {
        result += 1
    })
    return result;
}

function doStep2(init) {
    let result = init;
    setTimeout(() => {
        result += 2
    })
    return result;
}

function doStep3(init) {
    let result = init;
    setTimeout(() => {
        result += 3
    })
    return result;
}

function doOperation() {
    let result = 0;
    result = doStep1(result);
    result = doStep2(result);
    result = doStep3(result);
    console.log(`result: ${result}`);
}

doOperation();

// dengan callback
//
// function doStep1(init, callback) {
//     setTimeout(() => {
//         const result = init + 1;
//         callback(result);
//     }, 1000)
// }
//
// function doStep2(init, callback) {
//     setTimeout(() => {
//         const result = init + 2;
//         callback(result);
//     })
// }
//
// function doStep3(init, callback) {
//     setTimeout(() => {
//         const result = init + 3;
//         callback(result);
//     })
// }
//
// function doOperation() {
//     doStep1(0, (result1) => {
//         doStep2(result1, (result2) => {
//             doStep3(result2, (result3) => {
//                 console.log(`result: ${result3}`);
//             });
//         });
//     });
// }
//
// doOperation();

// Karena kita harus memanggil callback di dalam callback, kita mendapatkan fungsi bersarang dalam doOperation().
// ini disebut callback hell, akan sulit dikelola dan didebug maka dari itu ada cara lain yang lebih modern
// yaitu dengan menggunakan promise
