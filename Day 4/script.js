console.log("----------IF ELSE----------")

var number1 = 5
if (number1 > 0) {
    console.log(number1 + " 0'dan büyük.")
}

var number2 = 10
if (number2 < 5) {
    console.log(number2 + " 5'den küçük.")
} else {
    console.log(number2 + " 5'den büyük.")
}

var number3 = prompt("Sayı Girin")
if (number3 > 10) {
    console.log(number3 + " 10'dan büyük")
} else if (number3 < 10) {
    console.log(number3 + " 10'dan küçük")
} else {
    console.log(number3 + " 10 a eşit")
}

console.log("----------SWITCH----------")

var number = prompt("Sayı Girin")
switch (true) {
    case number>0:
        console.log("Sayı Pozitif ~ "+ number)
        break;
    case number<0:
        console.log("Sayı Negatif ~ "+ number)
        break;
    default:
        console.log("Sayı Nötr ~ "+ number)
        break;
}

console.log("----------TERNARY OPERATORS----------")

var yagmur = false
yagmur ? console.log("Yağmur Yağıyor") : console.log("Yağmur Yağmıyor")