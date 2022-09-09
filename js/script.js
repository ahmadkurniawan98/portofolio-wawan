var typed = new Typed(".auto-input", {
  strings: ["Ahmad Kurniawan", "Web Developer", "Front End Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

function ganti() {
  document.getElementById("title").innerHTML = "Judul";
  document.getElementById("title").style.color = "red";
}
// hanya title about yang berubah
