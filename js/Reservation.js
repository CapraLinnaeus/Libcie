class Reservation{
    constructor(stationname, lastname, firstname) {
        this.stationname = stationname;
        this.lastname = lastname;
        this.firstname = firstname;
    }

    print(){
        let reservationdisplay = document.getElementById("reservationdisplay");
        let counter = 15; // 20 * 60
        let intervalstationname = this.stationname;
        let lastname = this.lastname;
        let interval = window.setInterval(function(){
              let message = "Vélo réservé à la station " + intervalstationname + " par " + this.firstname + " " + this.lastname + ". Temps restant : " + counter;
              reservationdisplay.innerText = message;
              counter = counter - 1;
            if (counter === 0){
                reservationdisplay.innerText = "";
                clearInterval(interval);
            }
        }, 1000);




    }
}
