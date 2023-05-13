"use strict";

let start = () => {
    let second = document.getElementById('seconds').innerHTML;
    let minute = document.getElementById('minutes').innerHTML;
    let houre = document.getElementById('hourse').innerHTML;
    second++;
    document.getElementById('seconds').innerHTML = second;
    if (second == 60) {
        second = 0;
        document.getElementById('seconds').innerHTML = second;
        minute++;
        document.getElementById('minutes').innerHTML = minute;
        if (minute == 60) {
            minute = 0;
            document.getElementById('minutes').innerHTML = minute;
            houre++;
            document.getElementById('hourse').innerHTML = houre;
        }
    }
}
let a;
function timestart() {
    a = setInterval(start, 1000);
}


let stopbtn = () => {
    clearInterval(a);
}

let clearbtn = () => {
    clearInterval(a);
    document.getElementById('seconds').innerHTML = "00";
    document.getElementById('minutes').innerHTML = "00";
    document.getElementById('hourse').innerHTML = "00";
}







