let navnEl = document.getElementById("navnet")
let epostEl = document.getElementById("epost")
let telefonEl = document.getElementById("telefon")
let adressEl = document.getElementById("adresse")

let dyreParkenEl =  document.getElementById("dyreparken")
let badeLandEl = document.getElementById("badeland")
let beggePrisEl = document.getElementById("begge")
let frokostValgJa = document.getElementById("ja")
let frokostValgNei = document.getElementById("nei")

let dyreParkenPrisTekst = document.getElementById("dyreParkenPris")
let badeLandPrisTekst = document.getElementById("badeLandPris")
let beggePrisTekst = document.getElementById("beggePris")
let frokostPrisTekst = document.getElementById("frokost")
let overnattingEl = document.getElementById("overnattingPris");
let prisOppsummeringEl = document.getElementById("prisOppsummering")

let antallPersonerEl = document.getElementById("antallPersoner")
let antallDognEl = document.getElementById("antallDogn")

let navnElValue = navnEl.value; 
let epostElValue = epostEl.value;
let telefonElValue = telefonEl.value;
let adressElValue = adressEl.value;
let antallPersonerElValue = antallPersonerEl.value;
let antallDognElValue = antallDognEl.value;

let dyreParkenElChecked = false
let badeLandElChecked = false
let beggeToElChecked = false
let frokostValgt = false

let dyreParkenVerdi = 0
let badeLandVerdi = 0
let beggeDyreOgBadeLandVerdi = 0
let frokostVerdi = 0

let prisOppsummeringElValue = dyreParkenVerdi + badeLandVerdi + beggeDyreOgBadeLandVerdi + frokostVerdi + (799 * antallPersonerEl.value);

function clear(){
    navnEl.value = ""
    epostEl.value = ""
    telefonEl.value = ""
    adressEl.value = ""
}
clear()

function byttPersoner() {
    overnattingEl.innerText = "Overnatting " + antallPersonerEl.value * 799 * antallDognEl.value + "kr";
    dyreParken() 
    badeLand()
    beggeTo()
    frokostValgKnapp()
    if(frokostValgNei.checked == true){
        frokostPrisTekst.innerText = ""
    }
    oppdaterTotalPrisen()
}

function oppdaterTotalPrisen(){
    prisOppsummeringEl.innerText = "Total: " + ((dyreParkenVerdi + badeLandVerdi + beggeDyreOgBadeLandVerdi + frokostVerdi * antallDognEl.value) + (799 * antallPersonerEl.value * antallDognEl.value)) + "kr"
}

function bestillinger1(navn, ePost, telefon, adresse, dyrepark, badelandet, beggeto, gjester, pris, frokost, dogn){
    this.navnElValue = navn;
    this.epostElValue = ePost;
    this.telefonElValue = telefon;
    this.adressElValue = adresse;
    this.dyreParkenElChecked = dyrepark;
    this.badeLandElChecked = badelandet;
    this.beggeToElChecked = beggeto;
    this.frokostValgt = frokost;
    this.antallPersonerElValue = gjester;
    this.prisOppsummeringElValue = pris;
    this.antallDognElValue = dogn
}

let bestillinger = [];

function dyreParken(){
    if(dyreParkenEl.checked == true){
        beggePrisEl.checked = false
        dyreParkenElChecked = true
        dyreParkenVerdi = +dyreParkenEl.value * +antallPersonerEl.value
        dyreParkenPrisTekst.innerText = "Dyrepark " + dyreParkenEl.value * antallPersonerEl.value + "kr"
    } else if(dyreParkenEl.checked == false){
        dyreParkenVerdi = 0
        dyreParkenPrisTekst.innerText = ""
    }
    console.log(dyreParkenVerdi)
    oppdaterTotalPrisen()
}

function badeLand(){
    if(badeLandEl.checked == true){
        beggePrisEl.checked = false
        badeLandElChecked = true
        badeLandVerdi = +badeLandEl.value * +antallPersonerEl.value
        badeLandPrisTekst.innerText = "Badeland " + badeLandEl.value * antallPersonerEl.value + "kr"
    }else if(badeLandEl.checked == false){
        badeLandVerdi = 0
        badeLandPrisTekst.innerText = ""
    }
    console.log(badeLandVerdi)
    oppdaterTotalPrisen()
}

function beggeTo(){
    if(beggePrisEl.checked == true || (beggePrisEl.checked == true) && (badeLandEl.checked == true) && (dyreParkenEl.checked == true)){
        beggePrisTekst.innerText = "Badeland og Dyrepark " + beggePrisEl.value * antallPersonerEl.value + "kr";
        badeLandEl.checked = false
        dyreParkenEl.checked = false
        beggeToElChecked = true
        badeLandPrisTekst.innerText = ""
        dyreParkenPrisTekst.innerText = ""
        beggeDyreOgBadeLandVerdi = +beggePrisEl.value * +antallPersonerEl.value
    } else if(beggePrisEl.checked == false){
        beggeDyreOgBadeLandVerdi = 0;
        beggePrisTekst.innerText = ""
    }
    console.log(beggeDyreOgBadeLandVerdi)
    oppdaterTotalPrisen()
}

function frokostValgKnapp(){
    if(frokostValgJa.checked == true){
        frokostPrisTekst.innerText = "Frokost " + frokostValgJa.value * antallPersonerEl.value + "kr"
        frokostVerdi = +frokostValgJa.value * +antallPersonerEl.value
        frokostValgt = true
    }else{
        frokostVerdi = 0
        frokostPrisTekst.innerText = ""
    }
    console.log(frokostVerdi)
    oppdaterTotalPrisen()
}

function bekreft(){
    navnElValue = navnEl.value
    epostElValue = epostEl.value
    telefonElValue = telefonEl.value
    adressElValue = adressEl.value
    antallPersonerElValue = antallPersonerEl.value
    antallDognElValue = antallDognEl.value
    prisOppsummeringElValue = dyreParkenVerdi + badeLandVerdi + beggeDyreOgBadeLandVerdi + frokostVerdi + (799 * antallPersonerEl.value)

    let bookingArray = new bestillinger1(navnElValue, epostElValue, telefonElValue, adressElValue, dyreParkenElChecked, badeLandElChecked, beggeToElChecked, antallPersonerElValue, prisOppsummeringElValue, frokostValgt, antallDognElValue)
    bestillinger.push(bookingArray)

    localStorage.setItem('testObject', JSON.stringify(bestillinger));
    var retrievedPerson = JSON.parse(localStorage.getItem('testObject'));

    console.log(retrievedPerson)
    clear()
};


