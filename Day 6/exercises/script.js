console.log("Day 6 Exercises")
console.log("LEVEL 1")

const countriess = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
console.log("For ile ülkelerin sıralanması")
console.log("0 dan 10 a")
for (let i = 0; i <= 10; i++) {
    console.log(i + 1 + " " + countriess[i])
}

console.log("10 dan 0 a")
for (let i = 10; i >= 0; i--) {
    console.log(i + 1 + " " + countriess[i])
}

console.log("0 dan n kadar")
for (let i = 0; i < countriess.length; i++) {
    console.log(i + 1 + " " + countriess[i])

}

console.log("while ile ülkelerin sıralanması")
console.log("0 dan 10 a")
let k = 0
while (k <= 10) {
    console.log(k + 1 + " " + countriess[k])
    k++
}
console.log("10 dan 0 a")
let k2 = 10
while (k2 >= 0) {
    console.log(k2 + 1 + " " + countriess[k2])
    k2--
}

console.log("do-while ile ülkelerin sıralanması")
console.log("0 dan 10 a")
let l = 0
do {
    console.log(l + 1 + " " + countriess[l])
    l++
} while (l <= 10);

console.log("10 dan 0 a")
let l2 = 10
do {
    console.log(l2 + 1 + " " + countriess[l2])
    l2--
} while (l2 >= 0);

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

console.log("For ile dillerin sıralanması")
console.log("0 dan 10 a")
for (let i = 0; i <= 10; i++) {
    console.log(i + 1 + " " + webTechs[i])
}

console.log("10 dan 0 a")
for (let i = 10; i >= 0; i--) {
    console.log(i + 1 + " " + webTechs[i])
}

console.log("0 dan n kadar")
for (let i = 0; i < webTechs.length; i++) {
    console.log(i + 1 + " " + webTechs[i])

}

console.log("while ile dillerin sıralanması")
console.log("0 dan 10 a")
let k3 = 0
while (k3 <= 10) {
    console.log(k3 + 1 + " " + webTechs[k3])
    k3++
}

console.log("10 dan 0 a")
let k4 = 10
while (k4 >= 0) {
    console.log(k4 + 1 + " " + webTechs[k4])
    k4--
}

console.log("do-while ile dillerin sıralanması")
console.log("0 dan 10 a")
let l3 = 0
do {
    console.log(l3 + 1 + " " + webTechs[l3])
    l3++
} while (l3 <= 10);

console.log("10 dan 0 a")
let l4 = 10
do {
    console.log(l4 + 1 + " " + webTechs[l4])
    l4--
} while (l4 >= 0);

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

console.log("For ile ülkelerin sıralanması")
console.log("0 dan 10 a")
for (let i = 0; i <= 10; i++) {
    console.log(i + 1 + " " + mernStack[i])
}

console.log("10 dan 0 a")
for (let i = 10; i >= 0; i--) {
    console.log(i + 1 + " " + mernStack[i])
}

console.log("0 dan n kadar")
for (let i = 0; i < mernStack.length; i++) {
    console.log(i + 1 + " " + mernStack[i])

}

console.log("while ile ülkelerin sıralanması")
console.log("0 dan 10 a")
let k5 = 0
while (k5 <= 10) {
    console.log(k5 + 1 + " " + mernStack[k5])
    k5++
}
console.log("10 dan 0 a")
let k6 = 10
while (k6 >= 0) {
    console.log(k6 + 1 + " " + mernStack[k6])
    k6--
}

console.log("do-while ile ülkelerin sıralanması")
console.log("0 dan 10 a")
let k7 = 0
do {
    console.log(k7 + 1 + " " + mernStack[k7])
    k7++
} while (k7 <= 10);

console.log("10 dan 0 a")
let l5 = 10
do {
    console.log(l5 + 1 + " " + mernStack[l5])
    l5--
} while (l5 >= 0);

for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i*i}`)
}

for (let i = 0; i <= 10; i++) {
    console.log(Math.pow(i, 1) + " ", Math.pow(i, 2) + " ", Math.pow(i, 3))
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

let sayac = 0;
for (let sayi = 2; sayi <= 100; sayi++) {
    let kontrol = 0;
    for (let i = 2; i < sayi; i++) {
        if (sayi % i == 0) {
            kontrol = 1;
            break;
        }
    }

    if (kontrol == 0) {
        console.log(sayi);
        sayac++;
    }
}

let toplam2 = 0
for (let i = 0; i <= 100; i++) {
    toplam2 += i
}
console.log("Tüm sayıların toplamı: " + toplam2)

let tektoplam = 0,
    cifttoplam = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        cifttoplam += i
    } else {
        tektoplam += i
    }
}
console.log("Tek sayıların toplamı: " + tektoplam)
console.log("Çift sayıların toplamı: " + cifttoplam)
let toplamlar = []
toplamlar.push(tektoplam, cifttoplam)
console.log(toplamlar)

for (let i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random() * 11))
}

const sayilar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sayilar)
for (let i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random() * sayilar[i]))
}

const dizi = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "y", "v", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("karışık üretme")
let randomSayi = []
for (let i = 0; i < 6; i++) {
    randomSayi[i] = dizi[Math.floor(Math.random() * 32)]
}
console.log(randomSayi)
console.log(randomSayi.join(''))

console.log("LEVEL 2")

console.log("karışık üretme")
randomSayi = []
randomLenght = Math.floor(Math.random() * dizi.length + 1)
console.log(randomLenght)
for (let i = 0; i < randomLenght; i++) {
    randomSayi[i] = dizi[Math.floor(Math.random() * 32)]
}
console.log(randomSayi)
console.log(randomSayi.join(''))

console.log("karışık hexa")
randomSayi = []
const hexadecimalCode = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < 6; i++) {
    randomSayi[i] = hexadecimalCode[(Math.floor(Math.random() * 16))]
}
console.log(randomSayi)
console.log("#" + randomSayi.join(''))

console.log("karışık rbg")
randomSayi = []
for (let i = 0; i < 3; i++) {
    randomSayi[i] = (Math.floor(Math.random() * 255))
}
console.log("RBG(" + randomSayi[0] + "," + randomSayi[1] + "," + randomSayi[2] + ")")

console.log("countries but upper case")
const newCountries = []
for (let i = 0; i < countriess.length; i++) {
    newCountries.push(countriess[i].toUpperCase())
}
console.log(countriess)
console.log(newCountries)

console.log("countries lenght")
const countriesLenght = []
for (let i = 0; i < newCountries.length; i++) {
    countriesLenght[i] = (newCountries[i].length)
}
console.log(countriesLenght)

console.log("countries info")
for (let i = 0; i < newCountries.length; i++) {
    console.log(newCountries[i], newCountries[i].slice(0, 3), newCountries[i].length)
}

console.log("countries filter ~> land")
let bunlarLand = []
for (let i = 0; i < countriess.length; i++) {
    if (countriess[i].includes("land") == true) {
        console.log("Çıktı 1: ", countriess[i].split(' '))
        bunlarLand.push(countriess[i])
    }
}
console.log("Çıktı 2: ", bunlarLand)
console.log("Çıktı 3: ", bunlarLand.join(' '))

console.log("countries filter ~> ia")
let bunlarAi = []
for (let i = 0; i < countriess.length; i++) {
    if (countriess[i].endsWith("ia") == true) {
        console.log("Çıktı 1: ", countriess[i].split(' '))
        bunlarAi.push(countriess[i])
    }
}

console.log("Çıktı 2: ", bunlarAi)
console.log("Çıktı 3: ", bunlarAi.join(' '))

console.log("countries bigger length")
let countriesMaxLenght = []
for (let i = 0; i < countriess.length; i++) {
    countriesMaxLenght[i] = countriess[i].length
}
console.log(countriess)
console.log(countriesMaxLenght)
console.log(countriesMaxLenght.sort().reverse().splice(0, 1))

console.log("countries 5 length")
let fiveLengthCountry = []
for (let i = 0; i < countriesLenght.length; i++) {
    if (countriess[i].length == 5) {
        fiveLengthCountry.push(countriess[i])
    }
}
console.log(fiveLengthCountry)

console.log("webtechs bigger length")
let lengthSort = []
for (let i = 0; i < webTechs.length; i++) {
    lengthSort[i] = webTechs[i].length
}
console.log(webTechs)
console.log(lengthSort)
console.log(lengthSort.sort().splice(0, 1))

console.log("webtech biggest word")
let webtechAll = []
let webtechInfo = []
for (let i = 0; i < webTechs.length; i++) {
    webtechAll.push(webTechs[i], webTechs[i].length)
}
console.log(webtechAll)

console.log("mern")
let mern = []
for (let i = 0; i < mernStack.length; i++) {
    mern[i] = mernStack[i].charAt(0)
}
console.log(mern.join(''))

console.log("for of")
for (const webtech of webTechs) {
    console.log(webtech)
}

console.log("fruits reverse")
let fruits = ["banana", "orange", "mango", "lemon"]
console.log(fruits)
console.log(fruits.reverse())


const fullStack = [
    ["HTML", "CSS", "JS", "React"]["Node", "Express", "MongoDB"]
]
for (let i = 0; i < fullStack.length; i++) {
    console.log(fullStack[i])
}

console.log("LEVEL 3")


const sortedCountries = []
for (let i = 0; i < countriess.length; i++) {
    sortedCountries[i] = countriess[i]
}
console.log(countriess)
console.log(sortedCountries.sort())

console.log(webTechs)
console.log(webTechs.sort())

console.log(mernStack)
console.log(mernStack.sort())

console.log("countries without land")
for (let i = 0; i < sortedCountries.length; i++) {
    if (!sortedCountries[i].includes("land")) {
        console.log("İçerisinde ~Land~ Geçmeyen Ülkeler: ", sortedCountries[i])
    }
}

console.log("countries max length")
const sirala = []
for (let i = 0; i < sortedCountries.length; i++) {
    sirala[i] = (sortedCountries[i], sortedCountries[i].length)
}
console.log("En uzun karakterli ülke: ", sortedCountries.splice(0, 1).join(), "~>", sirala.sort().reverse().splice(0, 1).join())

console.log("countries without 5 length")
for (let i = 0; i < sortedCountries.length; i++) {
    if (sortedCountries[i].length != 5) {
        console.log(sortedCountries[i])
    }
}

console.log("countries reverse and capitalize")
const reverse=[]
for (let i = 0; i < sortedCountries.length; i++) {
reverse.push(sortedCountries[i].toLocaleUpperCase())
}
console.log(sortedCountries)
console.log(reverse.sort())