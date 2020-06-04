function main() {
    let map = initMap();
    let apiResponse = getStation();
    let stationList = [];
    for (let i = 0; i < apiResponse.length; i++) {
        let element = apiResponse[i];
        console.log(element);
        let station = new Station(element.number, element.name, element.address, element.position, element.status, element.available_bikes, element.available_bike_stands);
        markStation(map, station);
        stationList.push(station);
    }
    console.log(stationList);
    return stationList;
}

function markStation(map, station) {
    let marker = new google.maps.Marker({
        position: station.Position,
        map: map
    });
    let statusId = "greyStatus";
    if(station.status === "OPEN"){
        statusId = "greenStatus";
    }
    if(station.status ==="CLOSE"){
        statusId = "redStatus";
    }
    let popupString = '<h3>' + station.name + "</h3><br>" + "Places disponibles :" +  station.availablestands + " <br>" +  "Vélos disponibles :" + " " + station.availablebikes + "</h3><br>Adresse : " +
        station.address + "<br><span id='" + statusId + "'>" + "Station : " + station.status + "</span>";
    let infoWindow = new google.maps.InfoWindow({
       content: popupString
    });
    marker.onclick = function () {
        infoWindow.open(map, marker);
        let addressdisplay = document.getElementById("addressdisplay");
        console.log(addressdisplay);
        addressdisplay.innerText = "Adresse : " + station.address;
        let standsdisplay = document.getElementById("standsdisplay");
        standsdisplay.innerText = station.availablestands + " places disponibles";
        let bikesdisplay = document.getElementById("bikesdisplay");
        bikesdisplay.innerText = station.availablebikes + " vélos disponibles";
    };
}

function reservation() {
    let nameInput = document.getElementById("lastname");
    let name = nameInput.value;
    let firstnameInput = document.getElementById("firstname");
    let firstname = firstnameInput.value;
    localStorage.setItem('lastname',name);
    localStorage.setItem('firstname',firstname);
    let reservation = new Reservation("Gare SNCF",name,firstname);

    reservation.print();
}

function initMap() {
    let myLatLng = {lat: 49.4431, lng: 1.0993};
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: myLatLng
    });
    return map
}

$( document ).ready(function() {
    main()
});
