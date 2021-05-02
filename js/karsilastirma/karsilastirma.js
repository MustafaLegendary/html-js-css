
/* let sayi1 = Number(prompt("Lütfen 1. Sayıyı Giriniz.")) 
let sayi2 = Number(prompt("Lütfen 2. Sayıyı Giriniz.")) 
let sayi3 = Number(prompt("Lütfen 3. Sayıyı Giriniz."))  */

/* let toplamSayi = Number(sayi1) + Number(sayi2) + Number(sayi3);
let carpimSayi = sayi1 * sayi2 * sayi3 */
/* alert(cevap) */
/* let enBüyük
if(sayi1 > sayi2){
    if (sayi1 > sayi3) {
        enBüyük = sayi1
    }else if(sayi3 > sayi1) {
        enBüyük = sayi3
    }
}else if(sayi2 > sayi1) {
    if (sayi2 > sayi3) {
        enBüyük = sayi2
    }else if(sayi3 > sayi2) {
        enBüyük = sayi3
    }
} */
/* yöntem 2 */
/* function myFunction() {
    let sayi1 = Number(prompt("Lütfen 1. Sayıyı Giriniz.")) 
    let sayi2 = Number(prompt("Lütfen 2. Sayıyı Giriniz.")) 
    let sayi3 = Number(prompt("Lütfen 3. Sayıyı Giriniz.")) 
    
    let enBüyük;
    if ((sayi1 >= sayi2) && (sayi1 >= sayi3)){
        enBüyük = sayi1
    }else if ((sayi2 >= sayi1 ) && (sayi2 >= sayi3)) {
        enBüyük = sayi2;
    }else if ((sayi3 >= sayi1) && (sayi3 >= sayi2)) {
        enBüyük = sayi3;
    }

    alert(`Girilen sayıların En Büyüğü ${enBüyük} dır.`);
} */
/* yöntem 3 */
function myFunction() {
    let sayi1 = Number(prompt("Lütfen 1. Sayıyı Giriniz.")) 
    let sayi2 = Number(prompt("Lütfen 2. Sayıyı Giriniz.")) 
    let sayi3 = Number(prompt("Lütfen 3. Sayıyı Giriniz.")) 
    
    let enKüçük = sayi1;
    if (sayi1 < enKüçük){
        enKüçük = sayi1
    }
    if (sayi2 < enKüçük){
        enKüçük = sayi2
    }
    if (sayi3 < enKüçük){
        enKüçük = sayi3;
    }
    if (sayi2 < sayi3){
        alert(`${enKüçük} < ${sayi2} < ${sayi3}`)
    }else{
        alert(`${enKüçük} < ${sayi3} < ${sayi2}`)
    }
}