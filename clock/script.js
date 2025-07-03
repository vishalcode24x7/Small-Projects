// const option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
setInterval(() => {
    let time;
    let a = new Date();
    let hr = a.getHours();
    let min = a.getMinutes();
    let second = a.getSeconds();
    let am_pm = "AM";
    // date = a.toLocaleDateString(undefined, option);        
    // time = document.q(".display"); /*+ " on " + date*/;
    if (hr > 12) {
        am_pm = "PM";
        hr = hr - 12;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (second < 10) {
        second = "0" + second;
    }
    if (hr < 10) {
        hr = "0" + hr;
    }
    time = hr + " : " + min + " : " + second + am_pm;
    // time = hr + " : " + min + " : " + second + am_pm;
    document.getElementById('time').innerHTML = time;
});