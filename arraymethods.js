/* Opdracht 1*/
// We hebben een array met e-mailaddressen van medewerkers. Voer nu de volgende acties uit:

const emailadresses = ['n.eeken@novi.nl', 'n.stuivenberg@novi.nl', 'm.vandergeest@novi-education.nl', 'a.wiersma@novi.nl'];

// 1a. Onze nieuwe medewerker Melissa moet worden toegevoegd aan de lijst met emailadressen. Haar email is: m.westerbroek@novi.nl

console.log("Opdracht 1a");
emailadresses.push("m.westerbroek@novi.nl");
console.log(emailadresses)
console.log();


// 1b. Jouw collega wil weten of het emailadres van Nick Stuivenberg in de lijst staat. Zoek dit voor hem uit. (dus: bevat onze array n.stuivenberg@novi.nl?)

console.log("Opdracht 1b");

const x = emailadresses.includes("n.stuivenberg@novi.nl")
if (x === true) {
    console.log("bevat adres Nick")
} else {
    console.log("bevat geen adres Nick")
}
console.log();


// 1c. Collega's staan in de emaillijst op volgorde waarin ze bij Novi zjin komen werken. Nu blijkt echter dat een andere collega, Tess,
// bij Novi is komen werken VOOR Melissa. Haar e-mailadres moet dus worden toegevoegd op de één na laatste plek: t.mellink@novi.nl

console.log("Opdracht 1c")

console.log(emailadresses)
lengthOfEmailadresse = emailadresses.length;
console.log("aantal adressen = " + lengthOfEmailadresse)

emailadresses.splice(lengthOfEmailadresse - 1, 0, "t.mellink@novi.nl")

console.log(emailadresses)


// 1d. Er staat een foutje in de lijst. Het email adres van Mitchel moet worden aangepast naar m.vandergeest@novi.nl, maar je weet niet
// op welke plek in de lijst dit emailadres staat. Dit gebeurt helaas wel vaker. Schrijf een functie die drie parameters verwacht:
// een array met emailadressen, het oude emailadres dat vervangen moet worden, en het nieuwe emailadres.
// Deze functie achterhaalt het indexnummer van het oude emailadres en vervangt dit vervolgens voor het nieuwe adres.
// TIP: schrijf 'm eerst zoals je hem zou toepassen op bovenstaande array en schrijf die code dan om naar een functie

// [
// 'n.eeken@novi.nl',
//     'n.stuivenberg@novi.nl',
//     'm.vandergeest@novi-education.nl',  DEZE NAAR    m.vandergeest@novi.nl
//     'a.wiersma@novi.nl',
//     't.mellink@novi.nl',
//     'm.westerbroek@novi.nl'
// ]


console.log("Opdracht 1d")
// //stap 1 zoek index nummer, checked niet of naam er meerdere keren in staat
//
// let numberOfIndex = emailadresses.indexOf("m.vandergeest@novi-education.nl");
//
// //stap 2 vervang nu met slice het emailadres
//
// emailadresses.splice(numberOfIndex, 1, "m.vandergeest@novi.nl")



function replaceEmailAdress(array, adresOld, adresNew) {
    console.log(array)
    console.log(adresOld)
    console.log(adresNew)

    let numberOfIndex1 = array.indexOf(adresOld);




array.splice(numberOfIndex1,1,adresNew)    // array.splice(numberOfIndex1,1,adresNew);
    console.log(array);

return array;


}
console.log("laatste stukje")

array =['n.eeken@novi.nl',
    'n.stuivenberg@novi.nl',
    'm.vandergeest@novi.nl',
    'a.wiersma@novi.nl',
    't.mellink@novi.nl',
    'm.westerbroek@novi.nl']

adressToChange='a.wiersma@novi.nl'
adresToChangeTo= "hallo@novi.nl"

console.log(replaceEmailAdress(array,adressToChange,adresToChangeTo));

console.log()