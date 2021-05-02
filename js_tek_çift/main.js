function myFunction() {
    let sayi = prompt("Tek veya Çift olduğunu öğrenmek istediğiniz sayıyı giriniz.");
    
        if(sayi%2 === 0){
            alert("Girilen sayı çifttir.")
        }else
        if(sayi%2 === 1){
            alert("Girilen sayı tektir.")
        }else{
            alert("Lütfen geçerli bir sayı giriniz!")
        }
}
