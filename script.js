let date;
let newhour;
function changetime() {
  date = new Date().toTimeString().split("");
  document.getElementById("hours").innerHTML = date[0] + date[1];
  document.getElementById("minutes").innerHTML = date[3] + date[4];
  document.getElementById("seconds").innerHTML = date[6] + date[7];
}
setInterval(changetime, 1000);