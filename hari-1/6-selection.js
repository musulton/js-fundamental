/*
Di JS ada yang dinamakan dengan truthy dan falsy,
Truthy -> Nilai yang dianggap benar
Falsy -> Nilai yang dianggap salah

Nilai falsy diantaranya adalah
1. false
2. 0
3. -0
4. ""
5. null
6. undefined
7. NaN

Selain nilai2 diatas merupakan nilai truthy
 */

/*
Selection / percabangan digunakan untuk mengontrol alur kode
percabangan akan membuat program dapat berpikir dan menentukan tindakan sesuai logika/kondisi yang kita berikan

Ada 2 cara untuk membuat percabangan
1. If else
2. Switch case
 */

let score = 100;

// 1. If else
if (score > 80) {
    console.log("Lulus dengan baik");
} else if (score > 50) {
    console.log("Lulus");
} else {
    console.log("Tidak lulus")
}

let grade = "A";

// 2. Switch case
switch (grade) {
    case "A":
        console.log("Lulus dengan baik");
        break;
    case "B":
        console.log("Lulus");
        break;
    default:
        console.log("Tidak Lulus");
}
