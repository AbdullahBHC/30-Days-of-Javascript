// 2 FARKLI DİZİ OLUŞTURMA YÖNTEMİ

let isimler = Array()
console.log(isimler)

let isimler2= []
console.log(isimler2)

let meyveler =["Elma","Armut","Çilek"]
console.log(meyveler)
console.log(meyveler.length)

let cv =["Abdullah","Bahçeci",19,"Türkiye",null,false]
console.log(cv)

let js = "javascript"
console.log(js.split('')) // her harfi bir eleman haline getirir.

let companies="Facebook, Google, IBM, Microsoft, Apple"
console.log(companies.split(',')) // her kelimeyi bir eleman haline getirir.

let text="selam ben abdullah 19 yaşındayım"
console.log(text.split(' ')) // her kelimeyi bir eleman haline getirir.

let sebzeler=["domates","salatalık","patates"]
console.log(sebzeler) // tüm elemanlar
console.log(sebzeler[0]) // ilk eleman
console.log(sebzeler[sebzeler.length-1]) // son eleman
console.log(sebzeler.length) // kaç eleman olduğunu gösterir.

let sayilar = [1,5,13,453,894]
console.log(sayilar)
sayilar[1]=10
console.log(sayilar)
sayilar[3]=5784
console.log(sayilar)

let besElemanliBosDizi = [,,,,,]
console.log(besElemanliBosDizi)
let besElemanliBosArray = Array(5)
console.log(besElemanliBosArray)

console.log("-------------fill methodu-------------")
const threeXvalues = Array(3).fill("X")
console.log(threeXvalues)

const five0values = Array(5).fill(0)
console.log(five0values)

console.log("-------------concat methodu-------------")
const birinciDizi = [1,2,3]
console.log(birinciDizi)

const ikinciDizi = [4,5,6]
console.log(ikinciDizi)

const ucuncuDizi=birinciDizi.concat(ikinciDizi)
console.log(ucuncuDizi)

console.log("-------------length methodu-------------")
let name = "Abdullah"
console.log(name.length)

console.log("-------------indexOf methodu-------------")
const rakamlar = [3,6,8,1,2]
console.log(rakamlar.indexOf(3)) // girilen değerin hangi indekste olduğunu gösterir.
console.log(rakamlar.indexOf(8)) 
console.log(rakamlar.indexOf(4)) // girilen değer yok ise -1 döndürür.

console.log("-------------lastIndexOf methodu-------------")
const rakamlar2 = [3,6,4,8,5,1,3,1,2,4]
console.log(rakamlar2.indexOf(3)) // girilen değerin hangi indekste olduğunu gösterir.
console.log(rakamlar2.lastIndexOf(3)) // girilen değerin en son hangi indekste olduğunu gösterir.

console.log(rakamlar2.indexOf(4))
console.log(rakamlar2.lastIndexOf(4))

console.log("-------------includes methodu-------------")
let adlar = ["Ahmet","Mehmet","Ayşe"]
console.log(adlar.includes("Mehmet")) // girilen değer var ise /true yok ise /false döndürür.
console.log(adlar.includes("Fatma"))

console.log("-------------isArray methodu-------------")
let hayvanlar=["At","Eşek","İnek"]
console.log(Array.isArray(hayvanlar)) // değişken array ise /true değilse /false döndürür.

let hayvan = "At".split(' ')
console.log(Array.isArray(hayvan))

let hayvan2="Eşek"
console.log(Array.isArray(hayvan2))

console.log("-------------toString methodu-------------")
let texts= ["selam","ben","Abdullah"]
console.log(texts)
console.log(texts.toString())

console.log("-------------join methodu-------------")
const names=["Abdullah","Metin","Berat","Mehmet","Adile"]
console.log(names)
console.log(names.join()) // diziyi, stringe olduğu gibi çevirir.
console.log(names.join('')) // diziyi, stringe virgülsüz boşluksuz çevirir.
console.log(names.join(' ')) // diziyi, stringe virgülsüz boşluklu çevirir.
console.log(names.join(', ')) // diziyi, stringe virgüllü boşluklu çevirir.
console.log(names.join(' # ')) // diziyi, stringe # boşluklu çevirir.

console.log("-------------slice methodu-------------")
const names2=["Abdullah","Metin","Berat","Mehmet","Adile"]
console.log(names2)
console.log(names2.slice(1,4)) // arada kalan indeksleri gösterir

console.log("-------------splice methodu-------------")
const names3=["Abdullah","Metin","Berat","Mehmet","Adile"]
console.log(names3)
console.log(names3.splice(1,2,"Metin2","Berat2")) // arada kalan indekslerin değerini değiştirir.
console.log(names3)

console.log("-------------push methodu-------------")
const names4=["Abdullah","Metin","Berat","Mehmet","Adile"]
console.log(names4)
console.log(names4.push("Zeliha")) // dizinin sonuna yeni eleman ekler.
console.log(names4)

console.log("-------------pop methodu-------------")
const names5=["Abdullah","Metin","Berat","Mehmet","Adile"]
console.log(names5)
console.log(names5.pop()) // dizinin sonundan bir eleman siler.
console.log(names5)

console.log("-------------shift methodu-------------")
const names6=["Abdullah","Metin","Berat","Mehmet","Adile"]
console.log(names6)
console.log(names6.shift()) // dizinin başından bir eleman siler.
console.log(names6)

console.log("-------------push methodu-------------")
const names7=["Abdullah","Metin","Berat","Mehmet","Adile"]
console.log(names7)
console.log(names7.push("Zeliha")) // dizinin sonuna bir eleman ekler.
console.log(names7)

console.log("-------------unshift methodu-------------")
const names8=["Abdullah","Metin","Berat","Mehmet","Adile"]
console.log(names8)
console.log(names8.unshift("Zeliha")) // dizinin başına bir eleman ekler.
console.log(names8)

console.log("-------------reverse methodu-------------")
let isim =["Abdullah","Metin","Berat"]
console.log(isim)
console.log(isim.reverse())
console.log(isim[2].split('').reverse().join(''))

const webTechs=["HTML","CSS","Javascript","React","Redux","Node","MongoDB"]
console.log(webTechs.sort()) // a dan z ye sıralar.
console.log(webTechs.reverse()) // reverse ile ters çevirdik z den a ya sıraladı.

const frontEndTechs=["HTML","CSS","Javascript","React"]
const backEndTechs=["Node","Express","MongoDB"]
const fullStackTechs=[frontEndTechs,backEndTechs]
console.log(frontEndTechs)
console.log(backEndTechs)
console.log(fullStackTechs)
console.log(fullStackTechs[0])
console.log(fullStackTechs[1])
console.log(fullStackTechs.length)