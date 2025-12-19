const teks = document.getElementById("teks-bergerak");

const sambutan = [
  "🌸 Selamat Datang di Flower Shop",
  "💐 Temukan Bunga Terindah di Sini",
  "🌹 Ungkapkan Perasaan dengan Bunga",
];

let index = 0;

setInterval(() => {
  teks.innerText = sambutan[index];
  index = (index + 1) % sambutan.length;
}, 2000);
