console.log("Day 6 Exercises")
console.log("LEVEL 1")

function fullName(name) {
    return name
}
console.log(fullName("Abdullah Bahçeci"))

function fullName2(firstName, lastName) {
    return firstName + lastName
}
console.log(fullName2("Abdullah ", "Bahçeci"))

function addNumbers(num1, num2) {
    return num1 + num2
}
console.log("Toplam : " + addNumbers(5, 10))

function areaOfRectangle(length, width) {
    return length * width
}
console.log("Rectangle area : " + areaOfRectangle(5, 10))

function perimeterOfRectangle(length, width) {
    return 2 * (length + width)
}
console.log("Rectangle perimeter: " + perimeterOfRectangle(5, 10))

function volumeOfRectPrism(length, width, height) {
    return length * width * height
}
console.log("Rectangle prism volume: " + volumeOfRectPrism(2, 2, 2))

function areaOfCircle(r, pi = 3.14) {
    return pi * r * r
}
console.log("Circle area: " + areaOfCircle(5))

function circumOfCircle(r, pi = 3.14) {
    return 2 * pi * r
}
console.log("Circle circumference : " + circumOfCircle(5))

function densityOfSubstance(mass, volume) {
    return mass / volume
}
console.log("Substance density : " + densityOfSubstance(10, 5))

function speed(totalDistance, totalTime) {
    return totalDistance / totalTime
}
console.log("Speed : " + speed(20, 5))

function weightOfSubstance(mass, gravity) {
    return mass * gravity
}
console.log("Substance weigth : " + weightOfSubstance(5, 5))

function convertCelsiusToFahrenheit(oC) {
    return (oC * 9 / 5) + 32
}
console.log("Celcius to Fahrenheit : " + convertCelsiusToFahrenheit(5))

let total = 0

function calculateOfBMI(weight, height) {
    total = weight / (height * height)
    return total

}
console.log(calculateOfBMI(60, 1.70))
if (total >= 30) {
    console.log("You are obese.")
} else if (total >= 25) {
    console.log("You are overweight.")
} else if (total >= 18.5) {
    console.log("You are normalweight.")
} else {
    console.log("You are underweight.")
}

function checkSeason(month) {
    if (month == "December" || month == "January" || month == "February") {
        console.log("Winter")
    } else if (month == "March" || month == "April" || month == "May") {
        console.log("Spring")
    } else if (month == "June" || month == "July" || month == "August") {
        console.log("Summer")
    } else if (month == "September" || month == "October" || month == "November") {
        console.log("Autumn")
    } else("Wrong Month")
    return month
}
console.log(checkSeason("September"))

console.log("LEVEL 2")

const sayilar2 = [1, 2, 3, 4, 5, 6, 7]

function printArray(dizi) {
    return dizi
}
console.log(printArray(sayilar2))

function printArray(dizi) {
    for (let i = 0; i < sayilar2.length; i++) {
        return dizi
    }
}
console.log(printArray(sayilar2))

function showDateTime() {
    let time = new Date
    let day = time.getDay() + 3
    let month = time.getMonth() + 1
    let year = time.getFullYear()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let fullDate = `${day}/${month}/${year} ${hour}:${minute}`
    return fullDate
}
console.log(showDateTime())

function reverseArray(dizi) {
    sayilar2.reverse()
    return sayilar2
}
console.log(reverseArray(sayilar2))

const kelimeler = ["merhaba", "selam", "naber"]

function capitalizeArray(diziler) {
    for (let i = 0; i < kelimeler.length; i++) {
        kelimeler[i].toUpperCase()
    }
    return kelimeler
}
console.log(capitalizeArray(kelimeler))

function addItem(item) {
    return item
}
console.log(addItem("selam"))

function sumOfNumbers(number) {
    let total2 = 0,
        tekToplam = 0,
        ciftToplam = 0

    for (let i = 0; i <= number; i++) {
        total2 += i
        if (i % 2 == 0) {
            ciftToplam += i
        } else {
            tekToplam += i
        }
    }
    return `Toplam: ${total2} | Tek Toplam: ${tekToplam} | Çift Toplam: ${ciftToplam}`
}
console.log(sumOfNumbers(2))

function evensAndOdds(sayi) {
    let total = 0,
        tekSayilar = 0,
        ciftSayilar = 0

    for (let i = 0; i <= sayi; i++) {
        total = i
        if (i % 2 == 0) {
            ciftSayilar++
        } else {
            tekSayilar++
        }
    }
    return `Toplam Adet: ${total} | Tek Sayı Adet: ${tekSayilar} | Çift Sayı Adet: ${ciftSayilar}`

}
console.log(evensAndOdds(10))

function sınırsızToplama(...numbers) {
    let total = 0
    for (let i = 0; i < numbers; i++) {
        total += i
    }
    return total
}
    console.log(sınırsızToplama(1, 2, 3, 4, 5))