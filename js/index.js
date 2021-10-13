
let student = studentsMock.getStudent();
let list = studentsMock.getStudentList(10);

list.push(studentsMock.getStudent());

function averageNumber (list) {
  let sum = 0;
list.forEach(student => {
student.marks.forEach(elemment => {
sum = sum + elemment ;
  });
sum = Math.round((sum / (student.marks.length)));
student["midOcenka"] = sum;
  return student;
});
}
averageNumber(list);

function separationStudent(list) {
  let negativeResult;
list.filter(function(student) {
  if (student.midOcenka < 60) {
student["status"] = 'Otchislen';
  return negativeResult = student;
}
});
}
separationStudent(list);

function addNedian(list) {
  let result;
list.forEach(student => {
  const median = arr => {
  const mid = Math.floor(arr.length / 2),
   nums = [...arr].sort((a, b) => a - b);
   result = Math.round(arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2);
   return student;
    };
  median(student.marks);
  student.marks.forEach(elemment => {
  student["MEDIANA"] = result;
  });
   return student;
});
}
addNedian(list);

function sortByStatus(list) {
list.sort((a, b) => a.midOcenka < b.midOcenka ? 1 : -1);
return console.table(list);
}
sortByStatus(list);
