// Soal 1
function fazztrack(num){
    for(let i=1; i<num; i++){
        console.log(i)
        if(i % 3 == 0){
            console.log(' fazz');
        }else if(i % 5 == 0){
            console.log(' track');
        }else if(i % 3 && 5 == 0){
            console.log('fazztrack');
        }
    }
}

fazztrack(6);

// Soal 2
function genap(angka){
    if(angka % 2 == 0){
        return true;
    }
}

console.log(genap(4));

function ganjil(angka){
    if(angka % 2 != 0){
        return false;
    }
}

console.log(ganjil(5))

// Soal 3
function cekParameter(param){
    if(typeof param == typeof ""){
        console.log("Parameter " + param + " adalah String!");
    }else if(typeof param == typeof 0){
        console.log('Parameter ' + param + " adalah Number!");
    }else if(typeof param == typeof true){
        console.log('Parameter ' + param + " adalah Boolean!");
    }else if(Array.isArray(param)){
        console.log('Parameter ' + param + " adalah Array!");
    }else if(typeof param == typeof null){
        console.log('Parameter ' + param + " adalah Object!");
    }
    }

cekParameter("Dudi")
cekParameter(10);
cekParameter(true);
cekParameter(['dudi', 'ali']);
cekParameter({name:'John', age:34});