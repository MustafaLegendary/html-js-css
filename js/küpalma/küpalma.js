const küpAl = () => {
    let girilcekdeger = prompt("sayıyı giriniz")
    const sonuc = Math.pow(girilcekdeger, 3)
    alert(sonuc) 
}


const karesiniAl = () => {
    let girilcekdeger = prompt("sayıyı giriniz")
    const sonuc = Math.pow(girilcekdeger, 2)
    alert(sonuc)
} 

const üsAl = () => {
    let taban = prompt("taban giriniz")
    let üs = prompt("Üs giriniz.")
    const sonuc = Math.pow(taban, üs)
    alert(sonuc)
}
