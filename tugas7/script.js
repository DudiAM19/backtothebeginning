// Soal 1
const printTriangle = (num) => {
    let str = '';
    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= i; j++) {
            str += '* ';
        }
        str += '\n';
    }
    return str;
}

console.log(printTriangle(4));

// Soal 2
const printSquare = (num) => {
    let str = '';
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            str += '* ';
        }
        str += '\n';
    }
    return str;
}
console.log(printSquare(4));

// Soal 3
function gradeCheck(nilai){
    if(nilai >= 65){
        return console.log('Lulus!')
    }else{
        return console.log('Tidak Lulus')
    }
}

gradeCheck(50);

// Soal 4
let nilai = [50, 70, 90];

function addArray(arr){
    return nilai.push(arr);
}

addArray(80);
console.log(nilai);

