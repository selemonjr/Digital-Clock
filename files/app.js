const clock = document.querySelector(".item");
//setting the interval//
setInterval(time,1000)
function time() {
    const time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if(hour > 12) {
        am_pm = "PM";

    } if (hour == 0) {
        am_pm = "AM";
    };

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;
    clock.innerHTML = currentTime;
}
//Invoking the function//
time();