document.getElementById("clock");

function currentTime() {
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;
      let t = setTimeout(function(){ currentTime() }, 1000);
  }

  function updateTime(time) {
    if (time < 10) {
      return "0" + time;
    }
    else {
      return time;
    }
  }

  currentTime();