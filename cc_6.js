// create employee class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    // describe method to return formatted string
    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }

}

// create manager class with extension
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    // describe method to override parent method
    describe() {
        return `${this.name} manages a team of ${this.teamSize} people in the ${this.department} department.`;
    }
}

// create sample employees and managers
const emp1 = new Employee("Jake","IT");
const emp2 = new Employee("Amy","HR");
const mng1 = new Manager("Tom","IT",5);
const mng2 = new Manager("Sara","HR",3);