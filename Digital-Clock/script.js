// This is the JS file for Digital Clock
var day = "NA";
var day_n = new Date().getDay();
switch (day_n) {
    case 0:
        day = "Sun";
        break;
    case 1:
        day = "Mon";
        break;
    case 2:
        day = "Tues";
        break;
    case 3:
        day = "Wed";
        break;
    case 4:
        day = "Thur";
        break;
    case 5:
        day = "Fri";
        break;
    case 6:
        day = "Sat";
        break;
    default:
        day = "NA";
        break;
}
var month = new Date().getMonth();
switch (month) {
    case 0:
        month = "January";
        break;
    case 1:
        month = "Feb";
        break;
    case 2:
        month = "Mar";
        break;
    case 3:
        month = "Apr";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "June";
        break;
    case 6:
        month = "July";
        break;
    case 7:
        month = "Aug";
        break;
    case 8:
        month = "Sept";
        break;
    case 9:
        month = "Oct";
        break;
    case 10:
        month = "Nov";
        break;
    case 11:
        month = "Dec";
        break;
    default:
        month = "NA";
        break;
}

function clock() {
    var fullDate = new Date();
    var year = fullDate.getFullYear();
    var date = fullDate.getDate();
    var hour = fullDate.getHours();
    var min = fullDate.getMinutes();
    var secs = fullDate.getSeconds();

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (min < 10) {
        min = "0" + min;
    }

    if (secs < 10) {
        secs = "0" + secs;
    }
    document.getElementById("year").innerHTML = year;
    document.getElementById("date").innerHTML = date;
    document.getElementById("month").innerHTML = month;
    document.getElementById("day").innerHTML = day;
    document.getElementById("hour").innerHTML = " &nbsp " + hour + ":";
    document.getElementById("minute").innerHTML = min + ":";
    document.getElementById("second").innerHTML = secs;
}

setInterval(clock, 100);
