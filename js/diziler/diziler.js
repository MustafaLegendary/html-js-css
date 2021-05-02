/* const rakamlar = [5, -7, 15, -34, 17, 23];

const topla = function (dizi) {
    let pozitifler = 0;
    let negatifler = 0;

    for(let i = 0 ; i < dizi.length ; i++){
        if(dizi[i] >= 0){
            pozitifler += dizi [i];            
        }else {
            negatifler += dizi[i];
        }
    }
    return `Dizideki Sayıların Toplamı : 
    Pozitif Elemanlar ${pozitifler}'dir.
    Negatif Elemanlar ${negatifler}'dir`
}
 */
 console.log(topla(rakamlar));
console.log("Not Programı");
console.log("Lütfen notları tek tek giriniz.");
console.log("Not girişini bitirmek için 'b' Tuşuna Basınız.");
const notlar = [];

let i = 0;
let toplam = 0;

while (true){
    let not = prompt((i+1) + ".Kişinin notunu giriniz:")
    if(not == "b"){
        break;
    }

    notlar[i] = Number(not);
    toplam += notlar[i];
    i++;
}

const ortalama = toplam / (notlar.length);
console.log("Sınıf Ortalaması: " +  Math.round(ortalama));

console.log(notlar); 