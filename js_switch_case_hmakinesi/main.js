const s1 = +prompt("Sayı giriniz.");
const işlem = prompt("İşlem seçiniz +, -, /, * ")
const s2 = +prompt("2. sayı giriniz")
switch(işlem){
    case '+' : alert(s1 + s2)
            break;
    case '-' : alert(s1 - s2)
            break
    default : alert("hatalı sayı girdiniz.")
}