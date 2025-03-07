//object literal
function getAverageGrade(student, course) {

  for (let i = 0; i < student.transcript.length; i++) { // for loop that goes through each course in the transcript
    
    if (student.transcript[i].course === course) { // checks if the course is found
      let grades = student.transcript[i].grades; // gets the array of grades
      let sum = 0;
      
      for (let j = 0; j < grades.length; j++) { // grades.length is always 3 but idk if this is constant.
        sum += grades[j]; // adds each grade
      }
      
      return sum/grades.length; // returns the avaerage
    }
  }
  
  return -1; // returns -1 if the average wasn't found
}

function getAssignmentMark(student, course, num){
  num--; // assuming that the assigment input are either 1, 2, or 3. Remove this line if assigment "0" as the first assigment is valid input

  for(let i = 0; i < student.transcript.length; i++){

    if(student.transcript[i].course === course){
      return student.transcript[i].grades[num];
    }
  }

  return -1;
}

function averageAssessment(students, courseName, assignment){
  let sum = 0;
  let count = 0;

  for(let i = 0; i < students.length; i++){ // goes through the students constant for each student

    for(let j = 0; j < students[i].transcript.length; j++){ // for the student at postion i in students constant, goes through their transcript
      if(students[i].transcript[j].course === courseName){ // if the student has course in their transcript, it add their grade for assigment num to the sum
        sum += students[i].transcript[j].grades[assignment - 1]; // assuming that the assigment input are either 1, 2, or 3. you can the "- 1" if "0" as the first assigment is valid input
        count++; // increments the number of students with grades for the that course
      }
    }
  }

  return sum/count;
}


let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 50, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};

const students = [bob, sally, paul];

console.log(getAverageGrade(bob, 'INFO 1603'));

console.log(getAssignmentMark(bob, 'INFO 1601', 2));

console.log(averageAssessment(students, 'INFO 1601', 1));