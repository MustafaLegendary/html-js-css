/* const isimler = ["ahmet","mehmet","ismet","can","mustafa", ""];
const soyisimler = ["yılmaz","öztürk","çalışkan","yaman","bektaş"];

const birleştir = (isimler, soyisimler) => {
    const adlar = []

    for (let i in isimler){
        if (!isimler[i] || !soyisimler[i]){
            break;
        }
        adlar[i] = `${isimler[i]} ${soyisimler[i]}`;
        console.log(adlar[i]);
    }
    return adlar;
}

console.log(birleştir(isimler,soyisimler));


isimler.forEach((isimler) => console.log(isimler));

soyisimler.forEach(yazdır)

function yazdır (x){
    console.log(x);
} */

/* const rakamlar = [5, -7, 15, -34, 17, 23]
let toplam = 0;

rakamlar.forEach(hesapla);

function hesapla (e){
    toplam += e;
    document.querySelector('.toplam').innerHTML = toplam; 
} */
/* const sayılar = [3, 7, 17, 8, 9, 3, 0];

const yeniDizi = [];
sayılar.forEach(katAl)

function katAl(değer,indis,dizi){
    yeniDizi[indis] = değer * 5
    console.log(dizi[indis]);
    console.log(yeniDizi[indis]);
}
console.log(yeniDizi); */
/* const sayılar = [3, 7, 17, 8, 9, 3, 0];

const katAlınmış = sayılar.map((x) => x * 5);
console.log(katAlınmış);

const isimler = ["Mustafa", "Murat", "Ahmet", "Ayşe", "Canan"];
const değişmiş = isimler.map(function (x){
    if (x != "Mustafa"){
        return x
    }else {
        return "MUSTAFA"
    }
});
console.log(değişmiş); */
tlEuro = 9.68
tlDolar = 8.1

const tlFiyatlar = [3550, 150, 100, 50, 80];
const euroFiyatlar = tlFiyatlar.map( (x) => (x / tlEuro).toFixed(2))
const dolarFiyatlar = tlFiyatlar.map ( (x) => (x / tlDolar).toFixed(2))
console.log(euroFiyatlar);
console.log(dolarFiyatlar);

