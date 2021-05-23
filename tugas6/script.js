// Soal 1
// Pengulangan berguna, jika Anda ingin menjalankan kode yang sama berulang kali, setiap kali dengan nilai yang berbeda

// for
for(var i = 0; i < 10; i++){
    console.log(i);
}
// for in
var person = {fname:"John", lname:"Doe", age:25};

for(var x in person){
    console.log(person[x]);
}
// for of
let cars = ["BMW", "Volvo", "Mini"];

for(let x of cars){
    console.log(x)
}

// while
var i = 0;
while(i < 10){
    console.log(i);
    i++;
}

//do while
var i = 0;
do {
    console.log(i);
    i++
}
while(i < 7);


// Soal 2
function angka(num){
  for(var i = 0; i < num; i++){
    console.log(i);
  }
}

angka(12);

// Soal 3
function cekGanjilGenap(angka){
    if(angka % 2 == 0){
        return console.log('genap');
    }else{
        return console.log('ganjil');
    }
}

cekGanjilGenap(3);

// Soal 4
function deretGanjilGenap(num){
    for(var i = 1; i < num; i++){
        if(i % 2 == 0){
            console.log(i + ' adalah bilangan genap');
        }else{
            console.log(i + ' adalah bilangan ganjil');
        }
    }
}

deretGanjilGenap(11);

// Soal 5
const kegiatan = [
    ['bangun',6],
    ['mandi',7],
    ['sarapan',8],
    ['belajar',10],
    ['tidur',11],
]

for(let i = 0; i < kegiatan.length; i++){
    console.log('Pada pukul ' + kegiatan[i][1] + ' saya ' + kegiatan[i][0]);
}