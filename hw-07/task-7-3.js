const students = [
    { name: "Alice", age: 20, grade: 4.5 },
    { name: "Bob", age: 21, grade: 3.9 },
    { name: "Charlie", age: 19, grade: 4.8 },
];
console.log('students >', students);

function calculateAverageGrade(students) {

    let sum = 0;

    for (let i = 0; i < students.length; i++) {
        sum = sum + (students[i].grade);
        console.log(students[i].name, students[i].grade);
        averageGrade = (sum / students.length).toFixed(1);
    };
    return averageGrade;
};
console.log('calculated average grade >', calculateAverageGrade(students));

