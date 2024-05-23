class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = [];
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    present() {
        if (this.attendance.length < 25) {
            this.attendance.push(true);
        } else {
            console.log("Масив відвідуваності вже заповнений");
        }
    }

    absent() {
        if (this.attendance.length < 25) {
            this.attendance.push(false);
        } else {
            console.log("Масив відвідуваності вже заповнений");
        }
    }

    summary() {
        const averageGrade = this.grades.reduce((acc, val) => acc + val, 0) / this.grades.length;
        const attendanceRate = this.attendance.filter(val => val).length / this.attendance.length;
        
        if (averageGrade > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendanceRate > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

// Приклад використання
const student1 = new Student("Георгий", "Вещев", 2006);
student1.addGrade(95);
student1.addGrade(85);
student1.present();
student1.present();
student1.present();
student1.absent();

console.log(`Студент ${student1.firstName} ${student1.lastName}, вік: ${student1.getAge()}, оцінки: ${student1.grades}, відвідуваність: ${student1.attendance}`);
console.log(student1.summary());
