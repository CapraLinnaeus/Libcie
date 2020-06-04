function getStation(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=Rouen&apiKey=1fd6f2d71de7762b936ff7d9afb5f67d317e9b23', false);
    xhr.send(null);
    var response = "";
    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            response = JSON.parse(xhr.responseText);
        }
    });
    return JSON.parse(xhr.responseText);
}
