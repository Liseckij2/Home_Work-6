const studentsMock = (() => {
    const generateMarksArray = (qtt, min, max) => new Array(qtt).fill(min).map(() => faker.datatype.number({ min, max }));

    const getStudent = () => ({
        name: faker.name.findName(),
        specialty: faker.name.jobTitle(),
        marks: generateMarksArray(10, 20, 100),
    });

    const getStudentList = qtt => new Array(qtt).fill(null).map(getStudent);

    return {
        getStudent,
        getStudentList
    };
})();

let student = studentsMock.getStudent();
let list = studentsMock.getStudentList(10);

function foo(list) {
    var sum = 0;
list.forEach(student => {
    student.marks.forEach(elemment => {
        sum = sum + elemment ;
    });
sum = Math.round((sum / (student.marks.length)));
Object.defineProperties(list, student["midOcenka"] = sum);
    return student;
});
}
foo(list);

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
    student.marks.forEach(marks => {
        student["MEDIANA"] = result;
    });
    return student;
});
}
addNedian(list);

list.push(studentsMock.getStudent());

function sortByStatus(list) {
 list.sort((a, b) => a.midOcenka < b.midOcenka ? 1 : -1);
 return console.table(list);
  }
  sortByStatus(list);
