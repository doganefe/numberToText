function yazdir() {
  let sayi = document.querySelector("#inp").value
  //document.querySelector(".cikti").innerHTML = val

  const birler = ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
  const onlar = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
  function SayidanYaziya(number) {
    let sonuc = ""
    const basamakSayisi = number.toString().length
    for (let i = 0; i < basamakSayisi; i++) {

      switch (i) {
        case 0:
          sonuc += birler[number % 10] + " "
          number = Math.floor(number / 10)
          break;
        case 1:
          sonuc += onlar[number % 10] + " "
          number = Math.floor(number / 10)
          break;
        case 2:
          if (number % 10 === 1) {
            sonuc += "yüz ";
          }
          else if (number % 10 === 0) {
            sonuc += " "
          }
          else {
            sonuc += birler[number % 10] + "yüz "
          }
          number = Math.floor(number / 10)
          break;
        case 3:
          if (number % 10 === 1) {
            sonuc += "bin ";
          }
          else {
            sonuc += birler[number % 10] +"bin "
          }
          number = Math.floor(number / 10)
          break;
        case 4:
          sonuc += onlar[number % 10]
          number = Math.floor(number / 10)
          break;
        default :
        sonuc = "girildi değer fazla çok"
        break;
      }
    }
    return sonuc.split(" ").reverse().join(" ")
  }
  document.querySelector(".cikti").innerHTML = SayidanYaziya(sayi)
}
function temizle() {
  document.querySelector("#inp").value = ""
  document.querySelector(".cikti").innerHTML = ""
}
