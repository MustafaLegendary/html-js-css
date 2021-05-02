// Firma, 3000 TL den az olan maaşlara %10 zam yapmak istiyor
// ve zam yapılan bu kişilere toplam kaç TL ödeneceğini bilmek
// istiyor. İlgili programı yazınız.

/* const fiyatlar = [3000, 2891, 3500, 4200, 7000, 2500];
const zam = fiyatlar.map(function(x,i){
    if (x < 3000){ 
        console.log(`Toplam Zam: ${(x * 1.1).toFixed(0)}`);
    }
});
console.log(fiyatlar); */



// Biri dizi içerisindeki en büyük sayı, en küçük sayıyı bulan mettolar yazalım.
// Dizi yöntemleri yardımıyla
let sayılar = [];
for (let i = 0; true ; i++){
    let not = prompt(i + 1 + ".Sayıyı Giriniz:");
    if (not == 'b'){
        break;
    }
    sayılar[i] = not
}






console.log("======= NOT PROGRAMI =========");
console.log(" lütfen notuları tek tek giriniz.");
console.log(" Not girişini bitirmek için  b tuşuna basınız");

const notlar = [];

let i = 0;
let toplam = 0;

while (true) {
  let not = prompt(i + 1 + ".kişini notunu giriniz:");
  if (not == "b") {
    break;
  }

  notlar[i] = Number(not);
  toplam += notlar[i];
  i++;
}
