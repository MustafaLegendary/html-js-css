const artıkYıl = function(yıl){
    tamBölünme = yıl%4 == 0 &&(yıl%100 != 0 || yıl%400 == 0)
    console.log(tamBölünme);
    if (tamBölünme){
        return true
    }else if (!tamBölünme){
        return false
    }
} 

let yıl = +prompt("Yılı giriniz.")
console.log(typeof yıl);
const sonuç = artıkYıl(yıl)
console.log(sonuç == true ? 'girilen yıl artık yıldır' : 'girilen yıl artık yıl değildir');

