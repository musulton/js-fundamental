/*
Objek adalah sebuah variabel yang menyimpan nilai (properti) dan fungsi (method).

Objek bisa dibuat dengan beberapa cara diantaranya
 */

// 1. Objek literal
const Person = {
    name: "Sulton",
    sayHello: function () {
        return 'Hello';
    }
}

// 2. Menggunakan fungsi biasa
// Di JS fungsi adalah objek, untuk mengkonfirmasinya kita bisa melihat tipe dan instance nya
// console.log(typeof Person); // function
// console.log(Person instanceof Object); // object
// Kita bisa bekerja dengan fungsi seolah2 itu adalah objek
function person(name, age) {
    let person = {};
    person.name = name;
    person.age = age;
    person.sayHello = function () {
        return 'Hello'
    }

    return person;
}

const Sulton = person("Sulton", 30);

// 3. Menggunakan fungsi constructor
// fungsi constructor selalu dimulai dengan huruf besar
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        return 'Hello'
    }
}

// membuat instance baru untuk objek Sulton
// sehingga context this dalam objek sulton akan mengacu pada dirinya sendiri
const Sulton = new Person("Sulton", 30);
