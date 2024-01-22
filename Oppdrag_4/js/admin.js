
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);

let radEn = document.createElement('tr');
let headingEn = document.createElement('th');
headingEn.innerHTML = "Navn";
let headingTo = document.createElement('th');
headingTo.innerHTML = "Gjester";
let headingTre = document.createElement('th');
headingTre.innerHTML = "Telefon Nr.";
let headingFire = document.createElement('th')
headingFire.innerHTML = "Adresse"
let headingFem = document.createElement('th')
headingFem.innerHTML = "E-Post"
let headingSeks = document.createElement('th')
headingSeks.innerHTML = "DyreParken"
let headingSyv = document.createElement('th')
headingSyv.innerHTML = "BadeLand"
let headingAtte = document.createElement('th')
headingAtte.innerHTML = "Frokost"
let headingNi = document.createElement('th')
headingNi.innerHTML = "Både Badeland og Dyrepark kombinasjon"
let headingTi = document.createElement('th')
headingTi.innerHTML = "Pris"

radEn.appendChild(headingEn);
radEn.appendChild(headingTo);
radEn.appendChild(headingTre);
radEn.appendChild(headingFire);
radEn.appendChild(headingFem);
radEn.appendChild(headingSeks);
radEn.appendChild(headingSyv);
radEn.appendChild(headingAtte);
radEn.appendChild(headingNi);
radEn.appendChild(headingTi);
thead.appendChild(radEn);

var lengdeAvBestillinger = JSON.parse(localStorage.getItem('testObject'))

for(var i = 0; i < lengdeAvBestillinger.length; i++) {
    let radTo = document.createElement("tr")
    radTo.id = "kunde" + i

    let kundeNavn = document.createElement("td")
    kundeNavn.class = "kunde_Navn"
    let kundeNavnText = document.createTextNode(lengdeAvBestillinger[i].navnElValue)
    kundeNavn.appendChild(kundeNavnText)
    radTo.appendChild(kundeNavn)
    tbody.appendChild(radTo);

    let personer = document.createElement("td")
    personer.class = "kunde_Navn"
    let personerText = document.createTextNode(lengdeAvBestillinger[i].antallPersonerElValue)
    personer.appendChild(personerText)
    radTo.appendChild(personer)
    tbody.appendChild(radTo);

    let telefon = document.createElement("td")
    telefon.class = "kunde_Navn"
    let telefonText = document.createTextNode(lengdeAvBestillinger[i].telefonElValue)
    telefon.appendChild(telefonText)
    radTo.appendChild(telefon)
    tbody.appendChild(radTo);

    let adresse = document.createElement("td")
    adresse.class = "kunde_Navn"
    let adresseText = document.createTextNode(lengdeAvBestillinger[i].adressElValue)
    adresse.appendChild(adresseText)
    radTo.appendChild(adresse)
    tbody.appendChild(radTo);

    let epost = document.createElement("td")
    epost.class = "kunde_Navn"
    let epostText = document.createTextNode(lengdeAvBestillinger[i].epostElValue)
    epost.appendChild(epostText)
    radTo.appendChild(epost)
    tbody.appendChild(radTo);

    let dyrepark = document.createElement("td")
    dyrepark.class = "kunde_Navn"
    let dyreparkText = document.createTextNode(lengdeAvBestillinger[i].dyreParkenElChecked)
    dyrepark.appendChild(dyreparkText)
    radTo.appendChild(dyrepark)
    tbody.appendChild(radTo);

    let badeland = document.createElement("td")
    badeland.class = "kunde_Navn"
    let badelandText = document.createTextNode(lengdeAvBestillinger[i].badeLandElChecked)
    badeland.appendChild(badelandText)
    radTo.appendChild(badeland)
    tbody.appendChild(radTo);

    let frokost = document.createElement("td")
    frokost.class = "kunde_Navn"
    let frokostText = document.createTextNode(lengdeAvBestillinger[i].frokostValgt)
    frokost.appendChild(frokostText)
    radTo.appendChild(frokost)
    tbody.appendChild(radTo);

    let beggevalg = document.createElement("td")
    beggevalg.class = "kunde_Navn"
    let beggevalgText = document.createTextNode(lengdeAvBestillinger[i].beggeToElChecked)
    beggevalg.appendChild(beggevalgText)
    radTo.appendChild(beggevalg)
    tbody.appendChild(radTo);

    let totalprisen = document.createElement("td")
    totalprisen.class = "kunde_Navn"
    let totalprisenText = document.createTextNode(lengdeAvBestillinger[i].prisOppsummeringElValue)
    totalprisen.appendChild(totalprisenText)
    radTo.appendChild(totalprisen)
    tbody.appendChild(radTo);

    let knappen = document.createElement("td")
    knappen.class = "knappDesign"
    let knapp = document.createElement("button")
    knapp.onclick = function() {
        var row = knappen.parentNode;
        var rowName = knapp.parentNode.rowIndex;

        console.log(lengdeAvBestillinger)
        lengdeAvBestillinger.splice(rowName - 1, 1)
        localStorage.setItem("testObject", JSON.stringify(lengdeAvBestillinger))
        console.log(row.rowIndex)
        row.parentNode.removeChild(row);
    }
    knappen.appendChild(knapp);
    radTo.appendChild(knappen);
    tbody.appendChild(radTo);
}