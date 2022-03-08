let text="Bu bir alert() methodudur."
alert(text)

let input="Sayı giriniz",placeholder="sadece rakam giriniz"
let promptmethodu = prompt(input,placeholder)
console.log(promptmethodu)

console.log(confirm("Silmek istediğine emin misin?"))

console.log("---------------------DATE---------------------")

let time = new Date()
console.log(time.getFullYear())
console.log(time.getMonth())
console.log(time.getDate())
console.log(time.getHours())
console.log(time.getMinutes())
console.log(time.getSeconds())
console.log(time.getMilliseconds())
console.log(time.getTime())
console.log(time.getDay())
console.log("0"+time.getDate()+". 0"+(time.getMonth()+1)+"."+time.getFullYear()+" - "+time.getHours()+":"+time.getMinutes())
let aylar=["ocak","şubat","mart","nisan","mayıs","haziran","temmuz","ağustos","eylül","ekim","kasım","aralık"]
let gunler=["pazar","pazartesi","salı","çarşamba","perşembe","cuma","cumartesi"]
console.log("0"+time.getMonth()+" "+aylar[time.getMonth()]+" "+time.getFullYear()+" "+ gunler[time.getDay()]+" "+time.getHours()+":"+time.getSeconds())