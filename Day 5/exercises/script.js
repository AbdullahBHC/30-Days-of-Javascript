console.log("Day 5 Exercises")
console.log("LEVEL 1")

const emptyArray = Array()
const emptyArray2 = []
console.log(emptyArray,emptyArray2)

const numbers= [1,2,3,4,5]
console.log(numbers)
console.log(numbers.length)
console.log(numbers.slice(0,1))
console.log(numbers.slice(1,4))
console.log(numbers.slice(4,5))

const mixedDataTypes =["Abdullah","Bahçeci",19,"Türkiye",null,false]
console.log(mixedDataTypes)
console.log(mixedDataTypes.length)

const itCompanies =["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies.slice(0,1))
console.log(itCompanies.slice(1,6))
console.log(itCompanies.slice(6,7))
console.log(itCompanies.slice().join(' '))
console.log(itCompanies.slice().join(' ').toUpperCase())
let noAmazon = itCompanies.slice(0,6).join(', ')
let amazon = itCompanies.slice(6,7).join(' ')
console.log(noAmazon)
console.log(amazon)
console.log(`${noAmazon} and ${amazon} are big IT companies.`)
console.log(itCompanies.join(' ').match(/o/gi))
console.log(itCompanies.sort())
console.log(itCompanies.sort().reverse())

const itCompanies2 =["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
console.log(itCompanies2.slice(0,3))
console.log(itCompanies2.slice(4,7))
console.log(itCompanies2.slice(1,6))
console.log(itCompanies2.splice(0,1))
console.log(itCompanies2.splice(5,6))
console.log(itCompanies2)
console.log(itCompanies2.splice(2,1))
console.log(itCompanies2)
console.log(itCompanies2.splice(0,4))
console.log(itCompanies2)

console.log("LEVEL 2")

let text2 ="I love teaching and empowering people. I teach HTML, CSS, JS, React, Phyton."
console.log(text2.replaceAll(".","").replaceAll(",","").split(' '))
console.log(text2.split(' ').length)

const shoppingCart = ["Milk","Coffee","Tea","Honey"]
console.log(shoppingCart)
console.log(shoppingCart.unshift("Meat"))
console.log(shoppingCart)
console.log(shoppingCart.push("Sugar"))
console.log(shoppingCart)
console.log(shoppingCart.pop("Honey"))
console.log(shoppingCart.pop("Honey"))
console.log(shoppingCart.push("Sugar"))
console.log(shoppingCart[3] = "Green Tea")
console.log(shoppingCart)

const frontEnd =["HTML","CSS","JS","React","Redux"]
const backEnd =["Node","Express","MongoDB"]
const fullStack =[frontEnd,backEnd]
console.log(frontEnd)
console.log(backEnd)
console.log(fullStack[0]+","+fullStack[1])

const ages = [19,22,19,24,20,25,26,24,25,24]
console.log(ages.sort())
console.log("Minimum Yaş: "+ages.slice(0,1))
console.log("Maksimum Yaş: "+ages.slice(9,10))
console.log("Minimum Yaş: "+Math.min(...ages))
console.log("Maksimum Yaş: "+Math.max(...ages))
let topla = (a,b) => a+b
let toplam = ages.reduce(topla)
let ortalama = toplam/ages.length
console.log("Toplam: "+toplam)
console.log("Ortalama: "+ortalama)
console.log(Math.abs(Math.min(...ages)-ortalama))
console.log(Math.abs(Math.max(...ages)-ortalama))