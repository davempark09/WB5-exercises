let academyMembers = [
 {
 memID: 101,
 name: "Bob Brown",
 films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
 },
 {
 memID: 142,
 name: "Sallie Smith",
 films: ["A Good Day", "A Better Day"]
 },
 {
 memID: 187,
 name: "Fred Flanders",
 films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
 },
 {
 memID: 203,
 name: "Bobbie Boots",
 films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
 },
];

// Who is the Academy Member whose ID is 187?
// console.log(academyMembers.find(person => person.memID === 187))

// Who has been in at least 3 films?
// console.log(academyMembers.filter(person => person.films.length >= 3))

// Who has a name that starts with "Bob"?
// console.log(academyMembers.filter(person => person.name.startsWith('Bob')))

// HARDER: Which Academy Members have been in a film that starts with "A"
// academyMembers.forEach(movie => {
//     let vari = movie.films.filter(flick => flick.startsWith('A'))
//     vari.length > 0 && console.log(movie.name)
// })

