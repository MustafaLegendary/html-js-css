document.querySelector(".btn").onclick = function(){
    let islem = document.querySelector(".islem")
    let sayi1 = document.querySelector(".sayı1")
    let sayi2 = document.querySelector(".sayı2")
    let mesaj = document.querySelector(".sonuc");
    let sonuc = Number(sayi1.value) + Number(sayi2.value)
    if (islem.value == '+'){
        mesaj.innerHTML = `${sayi1.value} ${islem.value} ${sayi2.value} = ${sonuc}`
    }
    let cikarma = Number(sayi1.value) - Number(sayi2.value)
    if (islem.value == '-'){
        mesaj.innerHTML = `${sayi1.value} ${islem.value} ${sayi2.value} = ${cikarma}`
    }
    let carpma = Number(sayi1.value) * Number(sayi2.value)
    if (islem.value == '*'){
        mesaj.innerHTML = `${sayi1.value} ${islem.value} ${sayi2.value} = ${carpma}`
    }
    let bolme = (Number(sayi1.value) / Number(sayi2.value)).toFixed(2)
    if (islem.value == '/'){
        mesaj.innerHTML = `${sayi1.value} ÷ ${sayi2.value} = ${bolme}`
    }
}
