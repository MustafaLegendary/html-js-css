/* const sayılar = [3, -5, 9, 22, 45, 56,];
console.log("Dizinin Birinci Elemanı: " + sayılar[0]);
console.log("Dizinin İkinci Elemanı: " + sayılar[1]);
console.log("Dizinin Üçüncü Elemanı: " + sayılar[2]);
console.log("Dizinin Dördüncü Elemanı: " + sayılar[3]);
console.log("Dizinin Beşinci Elemanı: " + sayılar[4]);
console.log("Dizinin Altıncı Elemanı: " + sayılar[5]);
sayılar[3] = sayılar[3] +5;

console.log(sayılar.length);


for (let i = 0 ; i < sayılar.length ; i++){
    sayılar[i] = sayılar [i] * 2;
    console.log(sayılar[i]);
}

console.log(sayılar);

const meyveler = ["Elma", "Armut", "Şeftali", "Kiraz"];

meyveler[4] = "Muz";
meyveler.push("Ananas"); // Dizinin sonuna eleman ekler.

const silinen = meyveler.pop(); // Dizinin sonundaki elemanı siler.
console.log(meyveler);
meyveler.reverse();
console.log(meyveler);

meyveler.push("Portakal", "Mandalina");
console.log(meyveler);
const rakamlar = [3, 5, 12, 45, 4, 13];
/* console.log(rakamlar.sort()); */

rakamlar.shift(); // Dizinin ilk elemanını siler.
console.log(rakamlar);

rakamlar.unshift(-2, -7, 99); // Dizinin 0. İndeksine yeni eleman ekler.


console.log(silinen);

rakamlar.splice(1 ,0 ,99);
console.log(rakamlar);

const harfler = ['a', 'z', 'k'];
const dizi = [15 ,20 ,30];

const yeniDizi = dizi.concat(harfler, 'Merhaba', ['Nasılsın' ,5]);

for (let i = 0 ; i < yeniDizi.length ; i++) {
    console.log(yeniDizi[i]);
}
console.log(yeniDizi);

const elementler = ["Ateş", "Hava", "Su"];

/* console.log(elementler.join());
console.log(elementler.join("-")); */

console.log(elementler.toString());
console.log(elementler);

/* const hayvanlar = ["fil","kuş","deve","fare","kedi"];
const dilim1 = hayvanlar.slice(2);
console.log(dilim1);
console.log(hayvanlar);
 */
const hayvanlar = ["fil","kuş","deve","fare","kedi","deve"];

const ara = prompt("Hayvanat Bahçesinde aramak istediğiniz hayvan nedir?").toLowerCase()

const bulDöndür = (veritabanı , bul)=>{
    let hayvanSayısı = 0;
    if (hayvanlar.includes(ara)){
        for(let i = 0; i < hayvanlar.length ; i++){
            if (hayvanlar[i] == ara) {
                hayvanSayısı++; 
            }
        }
    }
    return hayvanSayısı;
}
const sayı = bulDöndür(hayvanlar, ara)
sayı != 0 ? console.log("Aradığınız hayvan " + sayı + " kadar bulunmaktadır.") : console.log("Aradığınız hayvan hayvanat bahçesinde bulunmamaktadır.");