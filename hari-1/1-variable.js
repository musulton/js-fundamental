/*
Variabel digunakan untuk menampung sebuah nilai
 */

// Menampilkan nama ke konsol berulang
console.log("Muhammad Sulton Al Fatih")
console.log("Muhammad Sulton Al Fatih")
console.log("Muhammad Sulton Al Fatih")

// dengan menggunakan variabel, kita dapat menyimpan nilai yang dicetak tanpa perlu menulis ulang setiap kali dipanggil
// ketika nilai pada variabel tersebut dirubah maka akan berdampak ke yang manggil variabel tersebut
var myName = "Muhammad Sulton Al Fatih";
console.log(myName);
console.log(myName);
console.log(myName);

/*
Ada 3 cara membuat variabel yaitu dengan var, let dan const

Variabel yang dibuat dengan keyword var akan terkena hoisting
(mesin js akan selalu mendeklarasikan variabel ini di awal dengan nilai undefined)
Variabel ini akan disimpan di global scope atau di dalam fungsi scope.

Tidak disarankan menggunakan var karena setiap variabel akan disimpan di global,
dan itu akan mengakibatkan kebocoran memori (memory heap), kita bisa menggunakan let.
 */
var fullName = "Muhammad Sulton";
console.log(fullName);

/*
Variabel yang dibuat dengan let tidak akan terkena hoisting,
variabel ini akan disimpan didalam blok scope, jadi ketika di deklarasikan di dalam blok scope
variabel tidak akan global scope (tidak dapat dipanggil dari luar bloknya)
 */
let firstName = "Muhammad";
let lastName = "Sulton";
let ttl = "Sukabumi, 01 01 2000";
lastName = "Rahman";
console.log(firstName, lastName, ttl);

/*
Variabel yang dibuat dengan keyword const tidak akan terkena hosting,
scopenya sama dengan variabel let, bedanya dengan const anda tidak bisa re-aasign nilai
 */
const education = "S1";
const hobi = "Mobil lejen";
console.log(education, hobi);
