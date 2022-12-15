/*
Kita dapat memanipulasi string dengan built-in function String JS
 */

let name = " hello sukabumi and world! ";

// Mengambil dari index 5 sampai index 10
console.log("SUBSTRING", name.substring(2, 1))

// Mengambil dari index 5 sampai 10 item di setelahnya
console.log("SUBSTR", name.substr(5, 10));

// Mengganti item yang ditemukan pertama kali
console.log("REPLACE", name.replace("o", "a"));

// Mengganti semua item
console.log("REPLACE ALL", name.replaceAll("o", "a"));

// Menambah string di belakang
console.log("CONCAT", name.concat("bumi"));

// Menghapus whitespace di awal dan akhir item
console.log("TRIM", name.trim());

// Menghapus whitespace di awal item
console.log("TRIM START", name.trimStart());

// Menghapus whitespace di akhir item
console.log("TRIM END", name.trimEnd());

// Mengambil karater berdasarkan index
console.log("CHAR AT", name.charAt(3));

// Mengambil ascii kode di karakter berdasarkan index
console.log("CHAR CODE AT", name.charCodeAt(3));

// Mengubah string menjadi array berdasarkan separatornya
console.log("SPLIT", name.split(" "));

// Dan masih banyak lagi
