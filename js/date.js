
function start(){
  startFetching();
  startTime();
  startSiteSwitch();
}

function startSiteSwitch(){
    var res = " ";
    var together = "";

    res = textFileReader("newfil.txt");
    if(res == "2"){
      window.location.href = "slider.html";
    }
    setTimeout(startSiteSwitch, 2000);
  }

  function textFileReader( filename )
  {
      var reader = (window.XMLHttpRequest != null )
                 ? new XMLHttpRequest()
                 : new ActiveXObject("Microsoft.XMLHTTP");
      reader.open("GET", filename, false );
      reader.send( );
      return reader.responseText;
  }

function startTime() {
    //starter å hente datoen og formatere informasjonen til visning
    var today = new Date();

    var dayNumber = today.getDay();
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    month = setMonth(month);
    var dayText = setDay(dayNumber);

    //Viser tid/dato på siden
    document.getElementById('date').innerHTML = dayText + " " + date + ". " + month + " " + year;
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;

    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function setDay(day){
	if(day == 1){day = "Mandag"}
    else if(day == 2){day = "Tirsdag"}
    else if(day == 3){day = "Onsdag"}
    else if(day == 4){day = "Torsdag"}
    else if(day == 5){day = "Fredag"}
    else if(day == 6){day = "L&#248;rdag"}
    else if(day == 0){day = "S&#248;ndag"};
    return day;
}

function setMonth(month){
	if(month == 1){month = "Januar"}
    else if(month == 2){month = "Februar"}
    else if(month == 3){month = "Mars"}
    else if(month == 4){month = "April"}
    else if(month == 5){month = "Mai"}
    else if(month == 6){month = "Juni"}
    else if(month == 7){month = "Juli"}
    else if(month == 8){month = "August"}
    else if(month == 9){month = "September"}
    else if(month == 10){month = "Oktober"}
    else if(month == 11){month = "November"}
    else if(month == 12){month = "Desember"};
    return month;
}

function textFileToArray( filename )
{
    var reader = (window.XMLHttpRequest != null )
               ? new XMLHttpRequest()
               : new ActiveXObject("Microsoft.XMLHTTP");
    reader.open("GET", filename, false );
    reader.send( );
    return reader.responseText.split(/(\r\n|\n)/g);
}
