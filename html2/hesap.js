function hesapla(){
    var sayi1 = document.getElementById("kenar1").value;
     
    sayi1 = Number(sayi1);

     
    var piNumarası = Math.PI;
    var cevreFormülü = 2 * piNumarası * sayi1;
    var alanFormülü = piNumarası * Math.pow(sayi1, 2);
    var cevreFormülü = `Çevresi: ${cevreFormülü} dır. Alanı: ${alanFormülü} dır.`
    alert(cevreFormülü)
    }
     
    var hesapBtn=document.getElementById("hesapla");
     
    hesapBtn.onclick=hesapla;