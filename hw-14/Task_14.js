function Student(firstName, lastName, birthYear, attendance, courses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.courses = {};

    this.addGrade = function (course, grade) {
        if (!this.courses[course]) {
            this.courses[course] = { grades: [], attendance: [] };
        }
        this.courses[course].grades.push(grade);
    };

    this.addAttendance = function (course, attendedClasses) {
        if (!this.courses[course]) {
            this.courses[course] = { grades: [], attendance: [] };
        }
        this.courses[course].attendance.push(attendedClasses);
    };

    this.averageGrade = function (course) {
        let grades = [];
        if (this.courses[course]) {
            grades = this.courses[course].grades;
        }

        const total = grades.reduce(function (sum, grade) {
            return sum + grade;
        }, 0);

        if (grades.length > 0) {
            return total / grades.length;
        } else {
            return 0;
        }
    };

    this.averageAttendance = function (course) {
        let attendance = [];
        if (this.courses[course]) {
            attendance = this.courses[course].attendance;
        }

        const total = attendance.reduce(function (sum, att) {
            return sum + att;
        }, 0);

        if (attendance.length > 0) {
            return total / attendance.length;
        } else {
            return 0;
        }
    };

    this.getPassedClasses = function (course) {
        if (this.courses[course]) {
            return this.courses[course].attendance.length;
        }
        return 0;
    };




    this.changeCourse = function (oldCourse, newCourse) {
        if (this.courses[oldCourse]) {
            this.courses[newCourse] = this.courses[oldCourse];
            delete this.courses[oldCourse];
        }
    };

    this.addCourse = function (course) {
        if (!this.courses[course]) {
            this.courses[course] = { grades: [], attendance: [] };
        }
    };

    this.removeCourse = function (course) {
        delete this.courses[course];
    };

    this.getStudentInfo = function () {
        return {
            name: `${this.firstName} ${this.lastName}`,
            birthYear: this.birthYear,
            courses: this.courses
        };
    };
}






function Group() {
    this.students = [];

    this.addStudent = function (student) {
        this.students.push(student);
    };

    this.removeStudent = function (student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    };

    this.getRanking = function (course) {
        return this.students
            .map(function (student) {
                return {
                    name: student.firstName + ' ' + student.lastName,
                    averageGrade: student.averageGrade(course),
                    averageAttendance: student.averageAttendance(course)
                };
            })
            .sort(function (a, b) {
                if (b.averageGrade !== a.averageGrade) {
                    return b.averageGrade - a.averageGrade;
                } else {
                    return b.averageAttendance - a.averageAttendance;
                }
            });
    };
}






const student1 = new Student('Ivan', 'Ivanov', 2000);
const student2 = new Student('Olga', 'Petrova', 1999);

student1.addCourse('Math');
student2.addCourse('Math');

student1.addGrade('Math', 5);
student1.addAttendance('Math', 90);
student2.addGrade('Math', 4);
student2.addAttendance('Math', 80);



const group = new Group();

group.addStudent(student1);
group.addStudent(student2);

console.log(group.getRanking('Math'));

console.log(student1.getStudentInfo());
console.log(student2.getStudentInfo());
