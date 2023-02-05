let students = [

  { name: 'Mika', country: 'Brasil' },
  { name: 'Silva', country: 'Portugal' },
  { name: 'João', country: 'Japão' }
]

students.forEach(students => {
  students.year = 2023;
  students.age = 20;
}
)

let countries = students.map(s => s.country)
let nameStudent = students.map(s => s.name)
let ageStudent = students.map(s => s.age)

let nonBrazilian = students.filter(student => student.country == 'Brasil')
console.log(nonBrazilian)
console.log(nameStudent, countries, ageStudent)
