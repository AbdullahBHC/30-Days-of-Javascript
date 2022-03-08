let sayi1=20,sayi2=5
// sayi1 = sayi1 + sayi2
console.log(sayi1+=sayi2)

 // sayi1 = sayi1 - sayi2
console.log(sayi1-=sayi2)

 // sayi1 = sayi1 * sayi2
console.log(sayi1*=sayi2)

// sayi1 = sayi1 / sayi2
console.log(sayi1/=sayi2)

let x,y
console.log(x==y) // değer olarak eşit
console.log(x===y) // hem değer hem de veri türü olarak eşit

console.log(x!=y) // değer olarak eşit değil
console.log(x!==y) // hem değer olarak hemde veri türü olarak eşit değil

console.log(x>y) // x, y den büyüktür
console.log(x>=y) // x, y den büyük veya eşittir

console.log(x<y) // x, y den küçüktür
console.log(x<=y) // x, y den küçük veya eşittir

console.log("metin".length=="berat".length) // metin uzunlukları eşit

let num1=5,num2=10
console.log(num1>2 && num2>5) // iki şart da doğruysa > true değilse > false
console.log(num1>10 && num2>5)
console.log(num1>10 && num2>20)

console.log(num1>2 || num2>5) // şartlardan biri doğruysa > true ikisi de değilse > false
console.log(num1>10 || num2>5)
console.log(num1>10 || num2>20)

let i=0
console.log(++i) // 1
console.log(i) // 1

let j=0
console.log(j++) // 0
console.log(j) // 1

let number=5
console.log(number>2 ? `${number}, 2'den büyüktür` : `${number}, 2'den küçüktür.`)
number=1
console.log(number>2 ? `${number}, 2'den büyüktür` : `${number}, 2'den küçüktür.`)