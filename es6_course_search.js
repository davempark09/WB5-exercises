let courses=[
{CourseId:"PROG100",Title:"Introduction to HTML/CSS/Git",Location:"Classroom 7",StartDate:"09/08/22",Fee:"100.00",},
{CourseId:"PROG200",Title:"Introduction to JavaScript",Location:"Classroom 9",StartDate:"11/22/22",Fee:"350.00",},
{CourseId:"PROG300",Title:"Introduction to Java",Location:"Classroom 1",StartDate:"01/09/23",Fee:"50.00",},
{CourseId:"PROG400",Title:"Introduction to SQL and Databases",Location:"Classroom 7",StartDate:"03/16/23",Fee:"50.00",},
{CourseId:"PROJ500",Title:"Introduction to Angular",Location:"Classroom 1",StartDate:"04/25/23",Fee:"50.00",}]

//When does the PROG200 course start?
// console.log(courses.find(course => course.CourseId === 'PROG200').StartDate)

//What is the title of the PROJ500 course?
// console.log(courses.find(course => course.CourseId === 'PROJ500').Title)

//What are the titles of the courses that cost $50 or less?

// With .map
console.log(courses.filter(course => parseInt(course.Fee) <= 50).map(course => course.Title))
courses.filter(course => parseInt(course.Fee) <= 50).map(course => console.log(course.Title))

// With .forEach
courses.filter(course => parseInt(course.Fee) <= 50).forEach(course => console.log(course.Title))

//What classes meet in "Classroom1"?
// courses.filter(course => course.Location === 'Classroom 1').map(course => console.log(course.CourseId))
