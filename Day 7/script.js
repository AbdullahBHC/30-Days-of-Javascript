function merhabaDunya() {
    console.log("Merhaba Dünya")
}
merhabaDunya()

function characterInfo() {
    let firstName = "Abdullah"
    let lastName = "Bahçeci"
    let age = 19
    let country = "Turkey"
    let ınfo = `${firstName} ${lastName} ${age} ${country}`
    return ınfo
}
console.log(characterInfo())

function toplama(sayi1, sayi2) {
    let toplam = sayi1 + sayi2
    return toplam
}
console.log("Toplam", toplama(5, 10))

let rakamlar = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let toplam = 0

function rakamlariToplama(dizi) {
    for (let i = 0; i < rakamlar.length; i++) {
        toplam = rakamlar[i] + toplam
    }
    return toplam
}
console.log(rakamlariToplama(rakamlar))

let rakam = [1, 2, 3, 4, 5]
let toplam2 = 1

function carpmaaIslemi(dizi) {
    for (let i = 0; i < dizi.length; i++) {
        toplam2 *= dizi[i]
    }
    return toplam2
}
console.log(carpmaaIslemi(rakam))

function sinirsizSayilar() {
    let toplam = 0
    for (let i = 0; i < arguments.length; i++) {
        toplam += arguments[i]
    }
    return toplam
}
console.log(sinirsizSayilar(1, 2, 3, 4, 5, 6, 7, 8, 9))

const anonymousFunction = function () {
    console.log("Hello World")
}
anonymousFunction()

function hello() {
    console.log("Hello world")
}
hello()

const hello2 = () => {
    console.log("Hello world")
}
hello2()

const hello3 = name => console.log("hello " + name)
hello3("world")

const information = (firstname, lastname, age) => console.log(`Welcome ${firstname} ${lastname} | ${age}`)
information("Abdullah", "Bahçeci", 19)

const sayilar = (num1,...numbers) => {
    console.log(num1)
    console.log(numbers)
}
sayilar(5, 2, 8, 1, 6)

const carpma = (num1,num2=2) => num1*num2
console.log(carpma(5))
console.log(carpma(5,10))