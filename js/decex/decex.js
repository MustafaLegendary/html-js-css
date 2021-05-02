/* function yazdır(isim, doğumTarihi){
    const yaş = new Date().getFullYear() - doğumTarihi;
    return `Benim adım ${isim} yaşım ${yaş}'dır`;
}

console.log(yazdır("John", 1989));; */

const yazdır = function(isim, doğumTarihi){
    const yaş = new Date().getFullYear() - doğumTarihi;
    return `Benim adım ${isim} yaşım ${yaş}'dır`;
}

console.log(yazdır("John", 1989));;


// 3-Arrow Function

const yazdır3 = (isim, doğumTarihi) => `Benim Adım ${isim} yaşım ${2021-doğumTarihi}`
console.log(yazdır3('Mehmet', 1967));