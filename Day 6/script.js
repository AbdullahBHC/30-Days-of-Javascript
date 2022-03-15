console.log("FOR")
console.log("0 dan 5 e kadar")
for (let i = 0; i <= 5; i++) {
    console.log(i)
}

console.log("5 den 0 a kadar")
for (let i = 5; i >= 0; i--) {
    console.log(i)
}

console.log("0 dan 20 ye kadar olan sayıları toplamak")
let toplam = 0
for (let i = 0; i < 20; i++) {
    toplam += i
}
console.log(toplam)

console.log("0 dan 5 e kadar çarpım tablosu")
for (let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i*i}`)
}

console.log("5 elemanlı dizi")
const names = ["Ahmet", "Mehmet", "Metin", "Fatma", "Ayşe"]
for (let i = 0; i < 5; i++) {
    console.log(names[i])
}

console.log("WHILE")
let i = 0
while (i <= 5) {
    console.log(i)
    i++
}

console.log("DO-WHILE")
let j = 5
do {
    console.log(j)
    j--
} while (j >= 0);

console.log("FOR OF")
for (const name of names) {
    console.log(name)
}

const countries = ["Turkey", "Germany", "France", "Spain", "England"]
const newArr = []
for (const country of countries) {
    console.log(newArr.push(country.toUpperCase()))
}
console.log(countries)
console.log(newArr)

console.log("BREAK")
for (const name of names) {
    if (name == "Metin") {
        console.log(name + " bulundu")
        break
    }
    console.log(name)
}

console.log("CONTUINE")
for (const name of names) {
    if (name == "Metin") {
        console.log(name + " es geçildi")
        continue
    }

    if (name == "Ayşe") {
        console.log(name + " bulundu")
        break
    }
    console.log(name)
}