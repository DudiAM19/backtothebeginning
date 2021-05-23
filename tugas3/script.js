// Soal 1
// Fungsi JavaScript ditentukan dengan functionkata kunci, diikuti dengan nama , diikuti dengan tanda kurung (). Nama fungsi dapat berisi huruf, angka, garis bawah, dan tanda dolar (aturan yang sama seperti variabel)

function salam(nama){
    return console.log('Hallo ' + nama + ' selamat pagi')
}

salam('dudi');

// Soal 2
function tambah(bilanganPertama, bilanganKedua){
    return console.log(bilanganPertama + bilanganKedua);
}

tambah(2, 1);

// Soal 3
const penjelasanArrowFunction = () => {
    return console.log('Arrow function adalah sintaks penulisan function pada javascript dengan kode yang lebih ringkas');
}

penjelasanArrowFunction();

//Soal 4
const perkalian = (bilanganPertama, bilanganKedua) => {
    return console.log(bilanganPertama * bilanganKedua);
}

perkalian(3, 4);