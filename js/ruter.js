
var slemdal = 3012330;
var stasjonsveien = 3012335;
var station_id = 3012330;//starter med slemdal
//var busOrMetro = "Linje "
var id = ["line", "aimed", "expected"];

function startFetching(){
  sendRequest();
  setTimeout(startFetching, 60000);//reload 1 gang hver minutt
}

function sendRequest(){
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://reisapi.ruter.no/StopVisit/GetDepartures/" + station_id, false);//henter rutetabell
  xhr.send();

  var responseToGET = xhr.responseText;
  //document.write(responseToGET);//printer all informasjon fra ruter for testing
  responseToGET = responseToGET.split(",");
  printAll(responseToGET);
}

function changeID(i){
  if(station_id == stasjonsveien){
    if(i == 0){
      //busOrMetro = "Buss "
      id[0] = "46line";
      id[1] = "46aimed";
      id[2] = "46expected";
    }else{
      id[0] = "46line";
      id[1] = "46aimed2";
      id[2] = "46expected2";
    }
  }else if(i == 0){
    //busOrMetro = "Linje "
    id[0] = "line";
    id[1] = "aimed";
    id[2] = "expected";
  }else{
    id[0] = "line";
    id[1] = "aimed2";
    id[2] = "expected2";
  }
}

function printAll(responseToGET){
    //behandler informasjon fra ruter for visning
  var maxResults = 2;
  var currResults = 0;

  changeID(0);
  if(responseToGET.length == 0){
      document.getElementById(id[1]).innerHTML = "Siste avgang har gått."
  }else{
      for(i = 0; i < responseToGET.length; i ++){
        if(responseToGET[i] == "\"DirectionName\":\"1\""){//hvilken retning kollektiven går.. 1=sentrum, 2=andre veien
          currResults++;

          var linjenr = responseToGET[i-1].split(":");

          var linjeTall = parseInt(linjenr[1].charAt(1) + linjenr[1].charAt(2));
          //document.getElementById(id[0]).innerHTML = busOrMetro + linjeTall;//busOrMetro==variabel for å lagre buss og bane nummer

          var aimedArrival = responseToGET[i+19].split("T");
          var timeAimedArrival = aimedArrival[2].split("+");

          document.getElementById(id[1]).innerHTML = timeAimedArrival[0];

          var expectedArrival = responseToGET[i+20].split("T");
          var timeExpectedArrival = expectedArrival[2].split("+");

          document.getElementById(id[2]).innerHTML = timeExpectedArrival[0];

          changeID(1);

          if(currResults == maxResults){
            if(station_id == stasjonsveien){
              station_id = slemdal;
              break;
            }
            station_id = stasjonsveien;

            sendRequest();
            break;
          }
        }
      }
  }
}
