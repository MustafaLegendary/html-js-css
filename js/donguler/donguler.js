/* const sayı = prompt("Hangi sayıya kadar toplama yapmak istersiniz?");
    let toplam = 0;
for (let i = 1; i <= sayı ; i++){
    toplam += i; // toplam = toplam + i
    console.log(toplam);
}
console.log("Sayıların Toplamı:" + toplam); */
/* const n = prompt("ASALLIK KONTORLÜ, SAYINIZ?")

const asalMı = (n) => {
    if(n < 2){
        console.log("Yanlış Sayı Girdiniz.");
    }else {
        let asal = true;
        for (let i = 2 ; i < n ; i++){
            if (n % i == 0){
                asal = false;
                break;
            }
            /* console.log(asal, (n % i)); */
/*         }
        return asal;
    }
}
 */
/* const sonuç = asalMı(n);
console.log(sonuç ? "asal" : "asal değil");
 */

/* let not;
do {
    not = prompt("Notunuzu Giriniz.");
    if (not < 0 || not > 100){
        alert("Not 0-100 Arasında Olmalıdır!")
    }
}while(not < 0 || not > 100);

alert("Başarılı Not Girişi Yaptınız."); */




let not = prompt("Notunuzu Giriniz.")
while (not < 0 || not > 100){
    alert("Yanlış Not Girişi Lütfen Tekrar Giriniz.")
    not = prompt("Notunuzu Giriniz.")
}
alert("Başarılı Not Girişi Yaptınız.");
