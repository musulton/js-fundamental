/*
Untuk membuat object kita juga dapat menggunakan keyword class
class akan terdiri dari properti dan method seperti yang ada pada objek

ada 2 cara untuk membuat objek
1. contructor function
2. class
 */

// 1. constructor function
// di JS fungsi adalah objek, makanya kita dapat bekerja dengan fungsi seolah2 itu adalah objek
// lalu kenapa dipanggil berbeda, karena yang membedakannya dengan objek adalah objek tidak bisa di panggil

function Person1(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        return 'Hello'
    }
}

const person = new Person1('Person1', 20);
// Untuk konfirmasi apakah benar fungsi adalah instance dari objek
// console.log(typeof Person);
// console.log(Person instanceof Object);

// 2. Class
// hanya sintak pemanis untuk membuat objek
// dengan extends kita menetapkan prototype pada objek, cara kerja sama dengan constructor function
// tidak ada abstract dan interface class di JS

// setiap fungsi dan objek di JS mempunyai properti prototype.
// prototype adalah parentnya, jadi ketika tidak menemukan properti di objek / fungsi yang dibuat
// maka JS akan melihat ke parentnya yaitu prototype (inheritance)

class Person0 {
    constructor() {
        this.gender = "Pria"
    }
}

class Person2 extends Person0 {
    constructor(name = 'Person1', age = 10) {
        super();
        this.name = name
        this.age = age
    }

    setAge = age => {
        this.age = age;
    }

    printInfo = () => {
        return `${this.name} is ${this.age} years old`;
    }
}

const sulton = new Person2("Sulton", 20);
// console.log('before:', sulton.printInfo())
// sulton.setAge(20);
// console.log('after:', sulton.printInfo())

// https://stackoverflow.com/questions/22156326/private-properties-in-javascript-es6-classes
