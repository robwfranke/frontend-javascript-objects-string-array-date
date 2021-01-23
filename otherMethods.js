/* Opdracht 1 */
// Schrijf een functie die de diameter van een cirkel verwacht als parameter en
// de omtrek van die cirkel bererekent en teruggeeft
// tip: PI * diameter
// ---- Verwachte uitkomsten:
// 4 geeft 12.566370614359172
// 12 geeft 37.69911184307752

console.log("Opdracht 1")
function calculateCircumference(diameter){
    let circumference = Math.PI*diameter;
    return circumference;
}

console.log(calculateCircumference(4))
console.log(calculateCircumference(12))

console.log()

/* Opdracht 2 */
// Schrijf bovenstaande functie nogmaals, maar zorg er nu voor dat de uitkomst wordt afgerond
// ---- Verwachte uitkomsten:
// 4 geeft 13
// 12 geeft 38

console.log("Opdracht 2")

function calculateCircumferenceRoundOff(diameter){
    let circumference = Math.round(Math.PI*diameter)
    return circumference;
}

console.log(calculateCircumferenceRoundOff(4))
console.log(calculateCircumferenceRoundOff(12))
console.log()

/* Opdracht 3 */
// Schrijf een functie die het laatste karakter in een string teruggeeft
// ---- Verwachte uitkomsten:
// "vermicelli" geeft "i"
// "kroepoek" geeft "k"

console.log("Opdracht 3")
function lastCharacter(name){
    // let x=name[name.length-1];
    // let x=name.charAt(name.length-1);
    let x=name.slice(-1)
    return x;
}

console.log(lastCharacter("vermicelli"))
console.log(lastCharacter("kroepoek"))
console.log()



/* Opdracht 4 */
// Schrijf een functie die een array maakt van alle woorden in een zin, maar wanneer er
// spaties aan het begin of einde van de zin staan, deze niet in de array zet.
// ---- Verwachte uitkomsten:
// " De pot verwijt de ketel dat hij zwart ziet" geeft ['De', 'pot', 'verwijt', 'de', 'ketel', 'dat', 'hij', 'zwart', 'ziet'];
// "Niet geschoten is altijd mis " geeft [ 'Niet', 'geschoten', 'is', 'altijd', 'mis' ];




/* Opdracht 5 */
// Maak een variabele today aan en sla daar een nieuw date-object in op
// Print in de console (in nummers) in welke maand we nu zitten
// Print in de console (in nummers) welk uur van de dag het is



/* BONUS OPDRACHT (als je tijd over hebt) */
// Schrijf een functie die twee strings als parameters verwacht en de langste naam teruggeeft.
// als de namen beide even lang zijn geeft hij de string "Beide namen zijn even lang" terug
// ---- Verwachte uitkomsten:
// "Nick", "Nova" geeft "Beide namen zijn even lang"
// "Mitchel", "Nick" geeft "Mitchel"



