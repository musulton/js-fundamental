/*
Untuk memahami prototype kita coba bahas materi tambahan ini
Kita akan membuat objek animal
 */

function Animal (name, energy) {
    let animal = {}
    animal.name = name
    animal.energy = energy

    animal.eat = function (amount) {
        console.log(`${this.name} is eating.`)
        this.energy += amount
    }

    animal.sleep = function (length) {
        console.log(`${this.name} is sleeping.`)
        this.energy += length
    }

    animal.play = function (length) {
        console.log(`${this.name} is playing.`)
        this.energy -= length
    }

    return animal
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)

/*
Ada kelemahan dengan pola diatas, tiga metode - eat, sleep, dan play selalu dibuat ulang setiap kali membuat hewan baru. Itu akan membuang-buang memori dan membuat setiap objek hewan lebih besar dari yang seharusnya.
 */

// Solusinya, yaitu dengan cara membuat instansiasi fungsional dengan share method
// jadi setiap kali membuat objek animal baru eat, sleep dan play method tidak akan dibuat ulang karena akan mempunyai referensi ke animalMethods

const animalMethods = {
    eat(amount) {
        console.log(`${this.name} is eating.`)
        this.energy += amount
    },
    sleep(length) {
        console.log(`${this.name} is sleeping.`)
        this.energy += length
    },
    play(length) {
        console.log(`${this.name} is playing.`)
        this.energy -= length
    }
}

function Animal (name, energy) {
    let animal = {}
    animal.name = name
    animal.energy = energy
    animal.eat = animalMethods.eat
    animal.sleep = animalMethods.sleep
    animal.play = animalMethods.play

    return animal
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)

/*
Di bagian ini kita akan membahas kegunaan prototype
setiap fungsi dalam JavaScript memiliki prototype properti yang mereferensikan suatu objek
Jadi, daripada membuat objek terpisah untuk mengelola metode, kita dapat menempatkan masing-masing metode tersebut pada Animal prototipe
 */

function Animal (name, energy) {
    let animal = Object.create(Animal.prototype)
    animal.name = name
    animal.energy = energy

    return animal
}

Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
}

Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
}

Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)

leo.eat(10)
snoop.play(5)

/*
prototype ini hanyalah properti yang dimiliki setiap fungsi dalam JavaScript, seperti yang kita lihat di atas, ini memungkinkan kita untuk berbagi metode di semua contoh fungsi.
 */

class DefaultAnimal{
    play(length) {
        console.log(`${this.name} is playing.`)
        this.energy -= length
    }
}

class Animal extends DefaultAnimal {
    constructor(name, energy) {
        super();
        this.name = name
        this.energy = energy
    }
}

const cat = new Animal("Cat", 10);

// setiap fungsi dan objek di JS mempunyai properti prototype.
// prototype adalah parentnya, jadi ketika tidak menemukan properti di objek / fungsi yang dibuat
// maka JS akan melihat ke parentnya yaitu prototype (inheritance)
