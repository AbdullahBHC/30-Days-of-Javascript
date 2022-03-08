console.log("Day 3 Exercises")
console.log("LEVEL 1")


let firstName="Abdullah",lastName="Bahçeci",country="Türkiye",city="İstanbul",age=19,isMarried=false,year=2022
console.log(typeof firstName +" "+ firstName)
console.log(typeof lastName +" "+ lastName)
console.log(typeof country +" "+ country)
console.log(typeof city +" "+ city)
console.log(typeof age +" "+ age)
console.log(typeof isMarried +" "+ isMarried)
console.log(typeof year +" "+ year)

let textt="10"
console.log(typeof textt +" "+textt)
console.log(typeof +textt+" "+textt)

let numberr=9.8
console.log(typeof numberr+" "+numberr)
let numberToInt=parseInt(numberr)
console.log(typeof numberr + " "+numberr)

// --------------------------------------------------------------

// truthy values
    //  all numbers
    //  all strings
    //  the boolean true
//

// falsy values
    //  the boolean false
    //  NaN
    //  undefined
//

// --------------------------------------------------------------

// 4 > 3 true
// 4 >= 3 true
// 4 < 3 false
// 4 <= 3 false
// 4 == 4 true
// 4 === 4 true
// 4 != 4 false
// 4 !== 4 false
// 4 != '4' false
// 4 == '4' true
// 4 === '4' false

console.log(4>3,4>=3,4 < 3,4 <= 3, 4 == 4, 4 === 4,4 != 4, 4 !== 4, 4 != '4',4 == '4',4 === '4')

let text1 = "phyton",text2="jargon"
console.log(text1.length==text2.length)
console.log(text1.length!==text2.length)

// --------------------------------------------------------------

// 4 > 3 && 10 < 12 true
// 4 > 3 && 10 > 12 false
// 4 > 3 || 10 < 12 true 
// 4 > 3 || 10 > 12 true
// !(4 > 3) false
// !(4 < 3) true
// !(false) true
// !(4 > 3 && 10 < 12) false
// !(4 > 3 && 10 > 12) true
// !(4 === '4') true

console.log(4 > 3 && 10 < 12,4 > 3 && 10 > 12,4 > 3 || 10 < 12,4 > 3 || 10 > 12,!(4 > 3),!(4 < 3),!(false),
!(4 > 3 && 10 < 12),!(4 > 3 && 10 > 12),!(4 === '4'))

// --------------------------------------------------------------

// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.

let date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth()+1)
console.log("0"+(date.getDay()-1)+".0"+(date.getMonth()+1)+"."+date.getFullYear())
console.log(date.getDay())
console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds())
console.log(date.getMinutes())
console.log(date.getTime())

// --------------------------------------------------------------

console.log("LEVEL 2")

let taban = prompt("Üçgenin tabanını giriniz")
let yukseklik = prompt("Üçgenin yüksekliğini giriniz")
console.log(`Üçgenin Alanı :  ${0.5*taban*yukseklik}`)

let aKenari = prompt("A kenarının uzunluğunu giriniz")
let bKenari = prompt("B kenarının uzunluğunu giriniz")
let cKenari = prompt("C kenarının uzunluğunu giriniz")
console.log(`Üçgenin Çevre Uzunluğu : ${(+aKenari)+(+bKenari)+(+cKenari)}`)

let genislik=prompt("Dikdörtgenin genişliğini giriniz")
let dyukseklik=prompt("Dikdörtgenin yüksekliğini giriniz")
console.log(`Dikdörtgenin Alanı : ${((+genislik)+(+dyukseklik))*2}`)

let yarıçap = prompt("Dairenin yarıçapını giriniz")
console.log(`Dairenin Alanı : ${3.14*yarıçap*yarıçap}`)

let yarıçap2 = prompt("Dairenin yarıçapını giriniz")
console.log(`Dairenin Çevresi : ${3.14*yarıçap2*2}`)

let hours = prompt("Haftada kaç saat çalıştığınızı girin")
let rateperhour = prompt("Saatlik ücretiniz yazın")
console.log(`Haftalık Kazancınız : ${hours*rateperhour}`)

let name=prompt("Adınızı Girin")
console.log(name.length>7 ? "Adınız Uzun" : "Adınız Kısa")

let firstNamee=prompt("Adınızı Girin")
let lastNamee=prompt("Soyadınızı Girin")
console.log(firstNamee.length>lastNamee.length ? `Adınız Soyadınızdan Uzun ${"+ " + firstNamee.length+ ">" + lastNamee.length}` : `Adınız Soyadınızdan Uzun Değil ${" " + firstNamee.length+"<"+lastNamee.length}`)

let myAge = prompt("Kendi Yaşını Gir")
let yourAge=prompt("Onun Yaşını Gir")
console.log(`Ben senden ${myAge-yourAge} yaş büyüğüm.`)

let birthYear = prompt("Doğum Yılını Gir")
console.log(2022-birthYear>=18 ? `${2022-birthYear +" Yaşındasın." } Araba Sürecek Yaşa Geldin Aslanım` : `${2022-birthYear+ " Yaşındasın."} "Araba Sürmene Daha ${18 - (2022-birthYear)} Sene Var.`)

let liveAge = prompt("Yaşını Gir")
console.log(liveAge*12*30*24*60*60)

let datee= new Date()
console.log(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDay()-1)+" "+date.getHours()+":"+date.getMinutes())
console.log((date.getDay()-1)+"-"+(date.getMonth()+1)+"-"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes())
console.log((date.getDay()-1)+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes())

if (date.getHours().length<2) {
   console.log( "0"+date.getHours())
}
console.log(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDay()-1)+" "+date.getHours()+":"+date.getMinutes())
