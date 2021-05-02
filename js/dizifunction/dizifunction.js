/* const isimler = ["ahmet", "mehmet", "ismet", "saffet"];

const buyukHarf = isimler.map(function(x){
   return x.toUpperCase();
});

console.log(buyukHarf);

const bHarf = [];
isimler.forEach(function(d,i){
    bHarf[i] = d.toUpperCase
});



const fiyatlar = [100, 150, 50, 80, 20]

const zam = fiyatlar.map(function(x,i){
    if (x < 75){
        return `${i + 1}. Ürünün Fiyatı: ${(x * 1.1).toFixed(0)}` 
    }else {
        return `${i + 1}. Ürünün Fiyatı: ${(x * 1.25).toFixed(0)}` 
    }
});

 console.log(zam);



const kordinatlar = [-100, 0, 100, 50, 75, -45];
const negatifKordinatlar = kordinatlar.filter(t => t<0)
console.log(negatifKordinatlar);

// For Each İle Filter.
/* negatifKordinatlar.forEach((x) => console.log(x * -1)); */

/* console.log(kordinatlar);
console.log(negatifKordinatlar);

const guncelDizi = kordinatlar
.filter((x) => x < 0) // Filtreleme Aşaması.
.map((x) => x * 2) // Modifikasyon İle Değişiklik.
.forEach((x) => console.log(x)); //Tanılama Ve Yazdırma.


const bireyler = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "Canan"];

const başHarfeGöreSeç = function(harf){
    const kHarf = harf.toLowerCase()
    const yeniDizi = bireyler
    .map((t) => t.toLowerCase())
    .filter((t) => t.startsWith(kHarf))
    if(!yeniDizi.length){
        return `Aradığınız Eleman Bulunamadı.`;
    }else {
        return yeniDizi;
    }
}

console.log(başHarfeGöreSeç("m"));
console.log(başHarfeGöreSeç("M"));
console.log(başHarfeGöreSeç("A"));
console.log(başHarfeGöreSeç("Z")); */



