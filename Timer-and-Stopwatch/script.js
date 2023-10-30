// dom objects
let tog = document.querySelector("switch");
let stopp = document.getElementById("stopwatch");
let timm = document.getElementById("countdown");
let isVisible = 'stopwatch';
let dp1 = document.getElementById("displayTime1");
let timer1 = null;
timm.style.display = 'none';
function switcher(){
    if(isVisible === 'stopwatch'){
        stopp.style.display = 'none';
        timm.style.display = 'block';
        isVisible = 'countdown';
    }else{
        timm.style.display = 'none';
        stopp.style.display = 'block';
        isVisible = 'stopwatch';
    }
}
let time  = 0;
function getTime(){
    time = prompt("Enter time in minutes:");
    time = time * 60;
    let[s,m,h] = [0,0,0];
    setIt();
}
function setIt(){
        let temph = time / 3600;
        h = Math.floor(temph);
        let tempm = (temph - h) * 60;
        m = Math.floor(tempm);
        let temps = (tempm - m) * 60;
        s = Math.floor(temps);
        let h1 = h < 10 ? "0" + h : h;
    let m1 = m < 10 ? "0" + m : m;
    let s1 = s < 10 ? "0" + s : s;
    dp1.innerHTML = `${h1}  :  ${m1}  :  ${s1}`;
}
function countdownn(){
   if(s == 0 && m == 0 && h == 0){
    alert("Your timer is up!!!!!!");
    
    clearInterval(timer1);
    dp1.innerHTML = "00 : 00 : 00";
    return;
   } 
    
    if(s == 0){
        if(m == 0){
            h--;
            m = 60;
        }else{
            m--;
            s = 60;
        }

    }
    s--;
    
    h1 = h < 10 ? "0" + h : h;
    m1 = m < 10 ? "0" + m : m;
    s1 = s < 10 ? "0" + s : s;
    dp1.innerHTML = `${h1}  :  ${m1}  :  ${s1}`;

    
}
function watchStart1(){
    if(s == 0){
        if(m == 0){
            if(h == 0){
                getTime();
            }
        }
    }
    if(timer1 !== null){
        clearInterval(timer1);
    }
   timer1 =  setInterval(countdownn,1000);
}
function watchStop1(){
    clearInterval(timer1);
}
function watchReset1(){
    clearInterval(timer1);
    [s,m,h] = [0,0,0]
    dp1.innerHTML = "00 : 00 : 00";
}
let [seconds,minutes,hours] = [0,0,0]
let dp = document.getElementById("displayTime");
let timer = null;
function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    dp.innerHTML = `${h}  :  ${m}  :  ${s}`;
    // dp.innerHTML = h + "  :  " + m + "  :  " + s;
}
function watchStart(){
    if(timer !== null){
        clearInterval(timer);
    }
   timer =  setInterval(stopwatch,1000);
}
function watchStop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    [seconds,minutes,hours] = [0,0,0]
    dp.innerHTML = "00 : 00 : 00";
}
