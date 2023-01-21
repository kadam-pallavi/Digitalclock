
document.body.style.backgroundImage = "url('https://cdn.wallpapersafari.com/15/19/9bdWqY.jpg')";
document.body.style.imageRendering= "url('https://i.pinimg.com/originals/36/c4/52/36c452a5d1f30c954a58518aacb72fb7.jpg')";


function displayTime() {
  let dateTime = new Date();
  let hrs = dateTime.getHours();
  let mins = dateTime.getMinutes();
  let sec = dateTime.getSeconds();
  let sess = document.getElementById('sessions');

  if (hrs <= 12) {
    sess.innerHTML = 'am'
  }
  else {
    sess.innerHTML = 'pm'
  }

  document.getElementById('hours').innerHTML = hrs;
  document.getElementById('minutes').innerHTML = mins;
  document.getElementById('seconds').innerHTML = sec;



}
setInterval(displayTime, 10);
