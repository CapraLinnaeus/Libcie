class Station{
    constructor(number, name, address, position, status, availablebikes, availablestands) {
        this.number = number;
        this.name = name;
        this.address = address;
        this.position = position;
        this.status = status;
        this.availablestands = availablestands;
        this.availablebikes = availablebikes;
    }

    set Number(number){
        this.number = number;
    }

    get Number(){
        return this.number;
    }

    set Name(name){
        this.name = name;
    }

    get Name(){
        return this.name;
    }

    set Address(address){
        this.address = address;
    }

    get Address(){
        return this.address;
    }

    set Position(position){
        this.position = position;
    }

    get Position(){
        return this.position;
    }

    set Status(status){
        this.status = status;
    }

    get Status (){
        return this.status;
    }

    set Availablestands(availablestands){
        this.availablestands = availablestands;
    }

    get Availablestands(){
        return this.availablestands;
    }

    set Availablebikes(availablebikes){
        this.availablebikes = availablebikes;
    }

    get Availablebikes(){
        return this.availablebikes;
    }
}









/*

function ajouterElement (tableau, element) {
    tableau.push(element);
}

function Ordinateur(marque, prix){
    this.marque = marque;
    this.prix = prix;
}

var ordinateur1 = new Ordinateur ("Asus", 2500);
var ordinateur2 = new Ordinateur("Acer", 1400);
var ordinateur3 = new Ordinateur ("MSI", 2800);

Ordinateur.prototype.getMarque = function (){
    return this.marque;
}

Ordinateur.prototype.setPrice = function(price){
    this.price = price;
}

ordinateur3.setPrice(500);
ordinateur1.setPrice(3000);

Ordinateur.prototype.setMarque = function(marque){
    this.marque = marque;
}

ordinateur2.setMarque("HP");

Ordinateur.prototype.getPrice = function() {
    return this.price;
}

var prix1 =  ordinateur2.getPrice();

Ordinateur.prototype.comparePrice(ordinateur)
{
    if (this.price < ordinateur.getPrice)
        return "moins cher";
}

Ordinateur.prototype.addPrice = function (ordinateur) {
    return this.Price + ordinateur.getPrice;
}

Ordinateur.prototype.compareMarque = function (ordinateur){
        if (this.marque === ordinateur.getMarque()){
            return true;
        } else {
            return false;
        }

        */
