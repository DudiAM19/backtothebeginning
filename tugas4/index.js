// Soal 1
    // Gunakan ifuntuk menentukan blok kode yang akan dieksekusi, jika kondisi yang ditentukan benar
    // Gunakan elseuntuk menentukan blok kode yang akan dieksekusi, jika kondisi yang sama salah
    // Gunakan else ifuntuk menentukan kondisi baru yang akan diuji, jika kondisi pertama salah
    // Gunakan switchuntuk menentukan banyak blok kode alternatif yang akan dieksekusi



// Soal 2
function cekParameter(x){
    if(x){
        return console.log('ini parameternya' + x);
    } else {
        return console.log('Tidak ada parameter yang diberikan');
    }
}

cekParameter(5)

// Soal 3
const salam = (jam) => {
    if(jam <= 10){
        return console.log('Selamat Pagi!');
    }else if(jam >= 11 && jam <= 14){
        return console.log('Selamat Siang!');
    }else if(jam >= 15 && jam <= 18){
        return console.log('Selamat Sore!');
    }else if(jam >= 19 && jam <= 24){
        return console.log('Selamat Malam!');
    }else{
        return console.log('Jam Salah/Tidak ada');
    }
}

salam(13);

// Soal 4
// tanda == adalah sama dengan, sedangkan tanda === adalah nilai yang sama dan tipe yang sama
// tanda != adalah tidak sama dengan, sedangkan !== adalah nilai yang tidak sama dan tipe yang tidak sama
// tergantung kebutuhan mau menggunakan yang mana saja

