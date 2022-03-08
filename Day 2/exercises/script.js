console.log("Day 2 Exercises")
console.log("LEVEL 1")

let challenge = "30 Days Of JavaScript"
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0,3))
console.log(challenge.substr(3))
console.log(challenge.includes("Script"))
console.log(challenge.split());
console.log(challenge.split(""));
console.log(challenge.split(" "));

let brand="Facebook Google Microsoft Apple IBM Oracle Amazon"
console.log(brand.split());

console.log(challenge.replace("JavaScript","Phyton"))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt("J"))
console.log(challenge.indexOf("a"))
console.log(challenge.lastIndexOf("a"))

let strng = "You cannot end a sencence with because because because is a conjunction"
console.log(strng.indexOf("because"))
console.log(strng.lastIndexOf("because"))
console.log(strng.search("because"))

let challenge2 = "  30 Days Of JavaScript   "
console.log(challenge2)
console.log(challenge2.trim())

console.log(challenge.startsWith("Of JavaScript"))
console.log(challenge.startsWith("30 Days"))
console.log(challenge.endsWith("30 Days"))
console.log(challenge.endsWith("Of JavaScript"))
console.log(challenge.match(/a/gi))

let string1 = "30 Days",string2=" Of Javascript"
console.log(string1.concat(string2))
console.log(`${string1}${string2}`)

console.log(challenge.repeat(2))

console.log("LEVEL 2")

let string3= "The quote",string4="by John Helmes teaches us to",string5="one another"
console.log(`${string3} 'There is no exercise better for the heart than reaching down and lifting people up.' ${string4} help ${string5}` )
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")

let numberr="10"
console.log(typeof numberr)
console.log(typeof +numberr)

let number7=9.8
console.log(number7)
console.log(Math.ceil(number7))

let strng2 = ["phyton,","jargon"]
console.log(strng2[0,1].includes("on"))

let strng3 ="I hope this course is not full of jargon. Check if jargon is in the sentence"
console.log(strng3.includes("jargon"))
console.log(strng3.match(/jargon/gi))

let randomnumber = Math.ceil(Math.random() * 50)
console.log(randomnumber)

let randomnumber2 = Math.ceil(Math.random() * 50+50)
console.log(randomnumber2)

let randomnumber3 = Math.ceil(Math.random() * 255)
console.log(randomnumber3)

let yazii="javascript", randomnumber4 = Math.ceil(Math.random() * yazii.length)
console.log(randomnumber4)

let sayii1="1"
console.log(`${sayii1} ${sayii1} ${sayii1} ${sayii1} ${sayii1} \n${sayii1*2} ${sayii1} ${sayii1*2} ${sayii1*4} ${sayii1*8}`)

console.log("LEVEL 3")

let strng5 = "You cannot end a sencence with because because because is a conjunction"
console.log(strng5.substr(30,25))

let strng6 = "Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log(strng6.match(/Love/gi))

let strng7 = "You cannot end a sentence with because because because is a conjuction"
console.log(strng7.match(/because/gi))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replaceAll("%","").replaceAll("$","").replaceAll("@","").replaceAll("&","").replaceAll("#",""))

let salaryPerMonth=5000,annualBonus=10000,onlineCoursesPerMounth=15000
console.log(`${"he's wage: " +(salaryPerMonth + annualBonus + onlineCoursesPerMounth) + "€"}`)

let num3 = 3;
console.log(Math.pow(num3,2))