let Sayi1 = 5,Sayi2=5;
console.log(Sayi1 == Sayi2)

let js = "Javascript", py = "Pyhton"
console.log(js==py)

let lightOn = true, LightOff= false
console.log(lightOn==LightOff)

let Sehirler = ["İstanbul", "Ankara" , "İzmir" ,"Bursa"]
Sehirler[3] = "Hatay"
console.log(Sehirler)

let sayi1= [1,2,3,4,5];
let sayi2=[1,2,3,4,5]

console.log(sayi1==sayi2)

console.log(Math.round(5.89) +" > 5.89'u 6'ya yuvarlıyor");
console.log(Math.floor(5.89) +" > 5.89 tabanı 5");
console.log(Math.ceil(5.89) +" > 5.89 tavanı 6");
console.log(Math.max(1,2,3,4,5) + " > en büyük sayıyı alıyor")
console.log(Math.min(1,2,3,4,5) + " > en küçük sayıyı alıyor")
console.log(Math.random());
console.log(Math.floor(Math.random() * 11 )+" > 0 ile 10 arasında rastgele sayı")

let num1= 10,num2=20
console.log(`${num1} + ${num2} = ${num1+num2}`)

let metin="Abdullah"
console.log(metin.length)

let name = "abdullahbhc";
console.log(name[0],name[1],name[2],name[3],name[name.length-1]);
console.log(metin.toUpperCase());
console.log(metin.toLowerCase());

let ad = "abdullah bahçeci 19 years old."
console.log(ad.substr(8,3)); // x den baslayıp y kadar karsılık gelenlerı gosterir.
console.log(ad.substring(8,11)); // arada kalan indeks sayılarına karsılık gelenlerı gosterir.

console.log(ad.split()); // tek indeksli dizi haline getirir.
console.log(ad.split(' ')); // kelime sayısı kadar dizi haline getirir.
console.log(ad.split('')); // harf sayısı kadar dizi haline getirir.

let text = "    fenerbahce  "
console.log(text.split());
console.log(text.split(''));
console.log(text);
console.log(text.trim()); // sağında ve solundaki boşlukları siler.

let yazi="selamın aleykum"
console.log(yazi.includes('selam')); // x içeriyorsa > true , içermiyorsa > false döndürür.
console.log(yazi.includes('aleykum'));
console.log(yazi.includes('Selam'));

let deneme = "30 Days Of Javascript"
console.log(deneme)
console.log(deneme.replace("Javascript","Phyton")) // kelimeyi değiştirir.

console.log(deneme.charAt(0)); // x. indeksde ki değeri gösterir.
console.log(deneme.charAt(deneme.length-1));  // sonuncu indeksde ki değeri gösterir.

let takım = "Besiktas"
console.log(takım.indexOf("as"))
console.log(takım.indexOf("k"))
console.log(takım.indexOf("esik"))
console.log(takım.indexOf("besik"))
console.log(takım.lastIndexOf("s"))

console.log(takım.concat(" spor kulübü"))

let sayi="30";
console.log(sayi.concat(" Days"," Of"," Javascript")) // stringleri birleştirir.

let soyad = "bahçeci"
console.log(soyad.startsWith("ba")); // x ile başlıyorsa > true , başlamıyorsa > false döndürür.
console.log(soyad.startsWith("Bahç"));

console.log(soyad.endsWith("ci")); // x ile bitiyorsa > true , bitmiyorsa > false döndürür.
console.log(soyad.endsWith("Çeci"));

let kısametin =" merhaba ben abdullah"

console.log(kısametin.search("abdullah")) // x'in kaçıncı indekste başladığını gösterir.
console.log(kısametin.search("aba"))

let uzunmetin ="ı love javascript. ıf you dont love javascript what else can you Love"
console.log(uzunmetin.match("love")) // kaçıncı indekste başladığını gösterir.
console.log(uzunmetin.match(/love/g)) // toplam kaç x olduğunu gösterir.
console.log(uzunmetin.match(/love/gi)) // toplam kaç x olduğunu gösterir. (büyük  küçük harf farketmeden)

let string = "love"
console.log(string.repeat(5))

let number = "10"
console.log(typeof +number);  // "parseInt()", "Number()", "+" string'i int'e çevirme yöntemleri

let number2= "20"
let numberStrıngToInt = parseInt(number2)
console.log(typeof numberStrıngToInt)

let number3 ="30"
let numberStrıngToInt2 = Number(number3)
console.log(typeof numberStrıngToInt2)

let number4 = "10,51"
console.log(typeof +number);  // "parseFloat()", "Number()", "+" string'i int'e çevirme yöntemleri

let number5= "20,65"
let numberStrıngToInt3 = parseFloat(number5)
console.log(typeof numberStrıngToInt3)

let number6 ="30,98"
let numberStrıngToInt4 = Number(number6)
console.log(typeof numberStrıngToInt4)