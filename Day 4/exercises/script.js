console.log("Day 4 Exercises")
console.log("LEVEL 1")

var age = prompt("Yaşını gir")
if (age >= 18) {
    console.log("Araba sürmek için yeterli yaşa geldin")
} else {
    console.log(`Araba sürmene ${18-age} yaş var`)
}

var myAge = prompt("Yaşını gir")
var yourAge = prompt("Onun yaşını gir")
if (myAge > yourAge) {
    console.log(`Ben senden ${myAge-yourAge} yaş büyüğüm`)
} else {
    console.log(`O senden ${yourAge-myAge} yaş büyük`)
}

var a = prompt("a değerini girin"),
    b = prompt("b değerini girin")
console.log(+a > +b ? `${a}, ${b}'den büyüktür` : `${a}, ${b}'den küçüktür`)
if (+a > +b) {
    console.log(`${a}, ${b}'den büyüktür`)
} else {
    console.log(`${a}, ${b}'den küçüktür`)
}

var sayi = prompt("Sayı Gir ( Tek / Çift Hesaplama )")
if (sayi % 2 == 0) {
    console.log("girdiğin sayı çift")
} else {
    console.log("girdiğin sayı tek")
}

console.log("LEVEL 2")

var not = prompt("Notunuzu Girin")
if (not >= 80) {
    console.log(`Notunuz : ${not} ~ Notunuzun Harf Karşılığı : A`)
} else if (not >= 70) {
    console.log(`Notunuz : ${not} ~ Notunuzun Harf Karşılığı : B`)
} else if (not >= 60) {
    console.log(`Notunuz : ${not} ~ Notunuzun Harf Karşılığı : C`)
} else if (not >= 50) {
    console.log(`Notunuz : ${not} ~ Notunuzun Harf Karşılığı : D`)
} else {
    console.log(`Notunuz : ${not} ~ Notunuzun Harf Karşılığı : F`)
}

var month = prompt("Ay Girin")
switch (month) {
    case "September":
        console.log("the season is Autumn")
        break;
    case "October":
        console.log("the season is Autumn")
        break;
    case "November":
        console.log("the season is Autumn")
        break;

    case "December":
        console.log("the season is Winter")
        break;
    case "January":
        console.log("the season is Winter")
        break;
    case "February":
        console.log("the season is Winter")
        break;

    case "March":
        console.log("the season is Spring")
        break;
    case "April":
        console.log("the season is Spring")
        break;
    case "May":
        console.log("the season is Spring")
        break;

    case "June":
        console.log("the season is Summer")
        break;
    case "July":
        console.log("the season is Summer")
        break;
    case "August":
        console.log("the season is Summer")
        break;

    default:
        console.log("Geçersiz Ay Girdiniz")
        break;
}

var day = prompt("Gün Girin")
if (day == "Cumartesi" && "cumartesi" && "Pazar" && "pazar") {
    console.log("Haftasonundayız")
} else {
    console.log("Haftaiçindeyiz")
}

var ay = prompt("Ay Girin")
if (ay == "Nisan" && "Haziran" && "Eylül" && "Kasım") {
    console.log("30")
} else if (ay == "Şubat") {
    console.log("28")
} else {
    console.log("31")
}