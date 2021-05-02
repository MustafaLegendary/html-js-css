function benimFunction() {
    const yıl = new Date().getFullYear();
    const doğumYılı = prompt("Doğum Yılınızı Giriniz.")
    const yaş = `Yaşınız ${yıl-doğumYılı} dır.`;
    alert(yaş);
}
