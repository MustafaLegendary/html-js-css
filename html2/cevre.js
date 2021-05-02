function hesapla(){
    var sayi1 = document.getElementById("kenar1").value;
    var sayi2 = document.getElementById("kenar2").value;
    var sayi3 = document.getElementById("kenar3").value;
     
    sayi1 = Number(sayi1);
    sayi2 = Number(sayi2);
    sayi3 = Number(sayi1);
     
    var cevre = sayi1+sayi2+sayi3;
    var cevre = `Üçgenin Çevresi: ${cevre} dır.`
    alert(cevre);
    }
     
    var hesapBtn=document.getElementById("hesapla");
     
    hesapBtn.onclick=hesapla;