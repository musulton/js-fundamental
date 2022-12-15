// Setiap nilai akan mempunyai tipe datanya sendiri
// Macam2 tipe data di JS, diantaranya ada 8

// 1. undefined
// ketika variabel tidak diberi nilai, defaultnya akan berisi undefined
let var1 = undefined;

// 2. boolean
// tipe data yang hanya mempunyai 2 nilai, digunakan untuk operasi logika
let var2 = false;
let var3 = true;

// 3. number
// mencakup nilai dari -2^53 - 1 hingga  2^53 - 1.
// terdiri dari bilangan bulat dan desimal
let myInt = 1234567890123456789012345678901234567890;

let var4 = 10;
let var5 = 10.5;

// ketika keluar dari cakupan nilai, akan menimpulkan bug
const nval1 = 9007199254740991 + 1
const nval2 = 9007199254740991 + 2
// console.log("====", nval1 == nval2); // false

// 4. bigint
// untuk bilangan yang besar yang tidak dicakup oleh tipe data number
// memperbaiki bug diatas
const bval1 =  9007199254740991n + 1n
const bval2 =  9007199254740991n + 2n
// console.log("+++++", bval1 == bval2);  // true

// 5. string
// tipe data yang berisi kumpulan karakter, bisa dibuat dengan single atau double quote
let var6 = "Sulton";
let var7 = 'Sulton';

// 6. null
// nilai dan tipe data kosong, yang sengaja kita isi kosong
// sekilas terlihat sama dengan undefined, bedanya ini bukan nilai default
let var8 = null;

// 7. object
// tipe data yang berisi properti dan nilai
let var9 = {
    firstName: "Muhammad",
    lastName: "Sulton",
    // menggunakan tanda kutip ketika ada spasi pada nama properti
    // tapi tidak disarankan
    "tempat tanggal lahir": "smi, 12 0213 00"
}

// 8. symbol
// simbol tidak dapat diubdah dan unik
const simbol1 = Symbol("hello");
const simbol2 = Symbol("hello");

// apabila dibandingkan meskipun nilainya sama, mereka berbeda
console.log(simbol1 === simbol2) // false

// simbol biasanya digunakan untuk key pada objek, karena dapat menghindari masalah duplikasi dan tabrakan, misal
// ada 2 buah fungsi / library yang menambah properti id pada objek yang sama
let obj = {};
function lib1tag(obj) { obj.id = 42; }
function lib2tag(obj) { obj.id = 369; }
lib1tag(obj)
lib2tag(obj)

// obj akan berisi id dari fungsi yang terahir dipanggil
console.log(obj) // { id: 369 }

// dengan menggunakan simbol kita dapat menambah properti dengan key yang sama, tapi keduanya unik
function lib1tag(obj) {
    let lib1tagId = Symbol("id");
    obj[lib1tagId] = 42;
}
function lib2tag(obj) {
    let lib2tagId = Symbol("id");
    obj[lib2tagId] = 369;
}
lib1tag(obj)
lib2tag(obj)
// obj akan berisi 2 id dari masing2 fungsi
console.log(obj) // { id: 42, id: 369 }
