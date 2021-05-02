/* let sayılar = [];
for (let i = 0; true ; ++i){
    let not = prompt(i + 1 + ".Sayıyı Giriniz:");
    if (not == 'b'){
        break;
    }
    sayılar[i] = not
    console.log(sayılar[i]);
}
console.log(sayılar);
console.log(sayılar.sort((a,b) => a - b));
console.log(sayılar.sort((a,b) => b - a));
console.log(sayılar);

 */

const bireyler = ["Mustafa","Murat","Ahmet","Mustafa","Ayşe","AliCan","Can","Canan"];
bireyler
    .sort((x,y) => x.length - y.length)
    .map(x => x + ":" + x.length)
    .forEach((x) => console.log(x));

const numaralar = [16, 4, 25, 169, 81];
const kareKök = numaralar.filter((x) => x %2 == 0)
.map((x) => Math.sqrt(x))
.reduce((x, y) => x + y)
console.log(kareKök);
