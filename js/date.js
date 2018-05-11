
function start(){
  startFetching();
  startTime();
}

function startTime() {
    //starter å hente datoen og formatere informasjonen til visning
    var date = new Date();

    var dayNumber = date.getDay();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    month = setMonth(month);
    var dayText = setDay(dayNumber);

    //Viser tid/dato på siden
    document.getElementById('date').innerHTML = dayText + " " + day + ". " + month + " " + year;
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;

    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };

    return i;
}

function setDay(dayNumber){
    switch (dayNumber) {
        case 1: return "Mandag"
        case 2: return "Tirsdag"
        case 3: return "Onsdag"
        case 4: return "Torsdag"
        case 5: return "Fredag"
        case 6: return "Lørdag"
        case 7: return "Søndag"
        default: return "ERROR"
    }
}

function setMonth(month){
    switch (month) {
        case 1: return "Januar"
        case 2: return "Februar"
        case 3: return "Mars"
        case 4: return "April"
        case 5: return "Mai"
        case 6: return "Juni"
        case 7: return "Juli"
        case 8: return "August"
        case 9: return "September"
        case 10: return "Oktober"
        case 11: return "November"
        case 12: return "Desember"
        default: return "ERROR"
    }
}
