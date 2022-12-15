/*
Fungsi untuk mengkonversi nilai ke tipe data lain
 */

const num1 = 10;
const num2 = "20";
// JS tidak melempar kesalahan, tetap mengeksekusi kode dibawah namun prosesnya jadi concat string
const result = num2 + num1; // 2010

const toString = String(num1);
const toBoolean = Boolean("");
const toNumber = Number(10.5);
const toBigInt = BigInt(10);
const toSymbol = Symbol("Ini adalah simbol");
const toInt = parseInt("10.001")

const toStringNum2 = String(num2);
const toFloat = parseFloat(toStringNum2);

console.log(typeof toFloat);
