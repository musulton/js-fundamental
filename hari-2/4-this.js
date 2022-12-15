/*
This merupakan properti yang mengacu pada konteks nya, konteksnya dapat berubah2 tergantung darimana dia dipanggilnya
1. ketika dipanggil didalam objek itu akan mengacu pada objek itu sendiri
2. ketika dipanggil di scope global maka itu akan mengacu pada objek window (apabila di browser)
3. ketika dipanggil di scope global maka itu akan mengacu pada objek module (apabila di file js / node)
4. ketika dipanggil di dalam reguler / declaration function maka itu akan mengacu pada objek global
5. ketika dipanggil di dalam arrow function maka itu akan mengacu ke lexical scope nya

lexical scope -> tempat dimana fungsi / item tersebut dibuat
 */

const person = {
    name: "Sulton",
    age: 20,
    getPerson: function () {
        // context nya ke object person
        return this;
    },
    getModule: () => {
        // di arrow function context this ke object module.exports / tempat objek person di buat
        return this;
    }
}

// contextnya adalah objek module.export karena saat ini this dipanggil dari node
console.log(this)

// ketika dipanggil didalam function maka context this adalah objek global
function fn1() {
    return this;
}

// console.log(person.getPerson())
// console.log(module.exports)
// console.log(person.getModule())

const animal = {
    name: "cat"
}

// context this ke objek animal, karena di panggil dari objek animal
animal.say = person.sayHello;
// animal.getInfo = person.getInfo;
// console.log(animal.getInfo());


// person.fn1 = fn1;
//
// console.log(person.fn1())

function fooz(name, age) {
    let address = "Ragunan";
    console.log(name, age, this.address, address)
}

// dibuat untuk digunakan sebagai context this pada fooz function
const obj = {
    address: "Sukaraja"
}

// 3 cara untuk mengubah konteks this di dalam reguler function

// 1. Pakai array sebagai parameter
fooz.apply(obj, ["Ade", 30]);

// 2. Pakai parameter variadic
fooz.call(obj, "Ade", 30)

// 3. Ditampung di dalam variabel
const foozBind = fooz.bind(obj);
foozBind("Ade", 20);
