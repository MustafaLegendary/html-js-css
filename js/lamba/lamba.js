document.querySelector('.btn-outline-warning').onclick = function (){
    document.querySelector('.resim').src = "./img/lamba_on.gif";
}
document.querySelector('.btn-outline-primary').onclick = function (){
    document.querySelector('.resim').src = "./img/lamba_off.gif";
}
document.querySelector('.resim').onmouseover = function (){
    document.querySelector('.resim').src = "./img/lamba_on.gif";
}
document.querySelector('.resim').onmouseout = function (){
    document.querySelector('.resim').src = "./img/lamba_off.gif";
}

document.querySelector('.text').onkeyup = function(){
    const text = document.querySelector('.text');
    const checkbox = document.querySelector('.checkbox')
    if (checkbox.checked == true){
        text.value = text.value.toUpperCase();
    }else{
        text.value = text.value.toLowerCase();
    }
}
const divListe = document.querySelector('.div-list');
const h1 = document.createElement('H1');
const text = document.createTextNode("Programlama Dilleri");
h1.appendChild(text)
divListe.appendChild(h1)
/* h1.style.color = 'red'
h1.style.marginTop = '15px'; */


document.querySelector('.btn-outline-success').onclick = function(){
    const liste = document.querySelector('.list');
    const yeniListe = document.createElement('LI');
    const input = document.querySelector('.input-list')
    const textNode = document.createTextNode(input.value);
    yeniListe.appendChild(textNode);
    liste.appendChild(yeniListe)
}
document.querySelector('.btn-outline-danger').onclick = function(){
    const liste = document.querySelector(".list");
    liste.removeChild(liste.lastElementChild);
}
 
