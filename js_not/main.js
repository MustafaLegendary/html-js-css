/* const not = Number(prompt("Lütfen Notunuzu Giriniz."))

if (not < 0 || not > 100) {
    alert("Not 0 dan küçük, 100 den büyük olamaz")
}else if (not < 25) {
    alert("FF")
}else if (not <= 45) {
    alert("DD")
}else if (not <= 65) {
    alert("CC")
}else if (not <= 75) {
    alert("BB")
}else if (not <= 90) {
    alert("BA")
}else if (not <= 100){
    alert("AA")
}else {
    alert("Hatalı Giriş")
}

 */
/* const ay = prompt("Ay giriniz (1-12)");
switch(ay){
    case '1': alert("Ocak")
            break;
        case '2' : alert("Şubat");
            break
    case '3' : alert("Mart");
        break
            default: alert("Yanlış rakam girdiniz!")
                break;
} */
/* Fonksiyonun tanımlanması */
function yazdır(ad, yaş){
   return `Adım ${ad} ve Yaşım ${yaş}`;
}

const sonuç = yazdır('Murat' , 35);
yazdır('Muhittin', '14');