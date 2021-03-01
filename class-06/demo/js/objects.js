let students = [];
let student1 = {
  name: 'zuhair',
  age: 25,
  isEnrolled: true,
  clases: ['101d18', '102d20', '201d16'],
  '1x': true,
  'full name': 'test test',
  obj: { id: 1, name: 'x' },
};
students.push(student1);
let studentName = 'name';
console.log(studentName);
console.log(student1.age);
console.log(student1['age']);
console.log(student1.studentName);
console.log(student1[studentName]); // student1['name']
// console.log(student1.1x)
console.log(student1['1x']);
// console.log(student1.full name)
console.log(student1['full name']);
console.log(student1);
console.log(typeof student1);
console.log(typeof []);
console.log(Array.isArray([]));
