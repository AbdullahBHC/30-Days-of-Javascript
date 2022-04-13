const user = {}
console.log(user)

const person = {
    name: "Abdullah",
    surname: "Bahçeci",
    age: 19,
    country: "Turkey",
    title: "teacher",
    isMarried: false,
    skills: ["HTML", "CSS", "JS", "C#", "Java"],
    'phone number': "0507 045 56 53",
    siblings: [{
            firstName: "Metin",
            lastName: "Bahçeci",
        },
        {
            firstName: "Berat",
            lastName: "Bahçeci",
        }
    ],
    getFullName: function () {
        return this.name + " " + this.surname
    },
    getPersonInfo: function () {
        let skillsWithoutLastSkill = this.skills.splice(0, this.skills.length - 1).join(', ')
        // let lastSkill = this.skills.splice(this.skills.length-1)[0]
        let lastSkill = this.skills.at(-1)
        let skills = skillsWithoutLastSkill + " and " + lastSkill
        let fullName = this.getFullName()
        let statement = `${fullName} is a ${this.title}.\n He lives in ${this.country}.\n He teaches ${skills}`

        return statement
    }
}
person.skills.push("Unity")
console.log(person)
console.log(person.getPersonInfo())
console.log(person.name)
console.log(person.getFullName())
console.log(person['phone number'])
console.log(person.siblings[1])

// let newUser = person
// console.log(person)
// newUser.name = "Murat"
// console.log(person)

let newUser2 = Object.assign({}, person)
console.log(person)
newUser2.name = "Ayşe"
console.log(newUser2)

const keys = Object.keys(person)
console.log(keys)

const values = Object.values(person)
console.log(values)

const entries = Object.entries(person)
console.log(entries)
for (let [key, val] of Object.entries(person)) {
    console.log("Key: " + key, "Value: " + val)
}

if (person.hasOwnProperty("name"))
    console.log("Evet böyle bir property var.")
else
    console.log("Hayır böyle bir property yok.")

// Object.freeze() // property de silme veya güncelleme yapılamaz.
// Object.seal() // property de silme yapılamaz.
console.log(person.hasOwnProperty("name"))