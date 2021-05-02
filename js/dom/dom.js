const myTitle = document.getElementById('my-title')
myTitle.innerHTML = 'DOM'

const myHeader1 = document.getElementsByClassName('header')
myHeader1[0].style.color = 'red';
myHeader1[0].style.fontSize = '40px'

const siyahYaz = () => myHeader1[0].style.color = 'blue'
const kırmızıYaz = () => myHeader1[0].style.color = 'yellow'

/* document.querySelector('.header').onmouseover = function (){
    document.querySelector(".header").style.color = 'blue'
}

document.querySelector('.header').onmouseout = function () {
    document.querySelector(".header").style.color = 'black'
} */

/* document.querySelector('.header').addEventListener('mouseover', ()=>{
    const kırmızıYaz = () => myHeader1[0].style.color = 'yellow'
})
document.querySelector('.header').addEventListener('mouseout', siyahYaz) */

// Butona Tıklandığında sayfanın arka plan resmi değiştirilmeli

document.querySelector('#btn1').onclick = function (){
    document.querySelector('#body').style.backgroundColor = 'green'
    document.querySelector('#btn1').innerHTML = 'BAS';
}







const myBody = document.getElementsByTagName('body')
myBody[0].style.backgroundColor = 'black'
const btn1 = document.getElementById('btn1')
/* btn1.innerHTML = 'ARA' */
btn1.style.backgroundColor = 'red'
btn1.style.color = 'white'
btn1.style.width = '140px'
btn1.style.height = '50px'
btn1.style.fontSize = '30px'
const body = document.querySelector('#body');
body.style.backgroundColor = 'purple'
