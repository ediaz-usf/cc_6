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

// create company class
class Company {
    constructor() {
        this.employees = [];
    }

    // addEmployee method to add employee to array
    addEmployee(employee) {
        this.employees.push(employee);
    }
    
    // listEmployees method to log all employees' descriptions
    listEmployees() {
        console.log("Company Employees:");
        this.employees.forEach(emp => {
            console.log(emp.describe());
        });
    }
}

// create company object
const apple = new Company();

// add emps and managers to company
apple.addEmployee(emp1);
apple.addEmployee(emp2);
apple.addEmployee(mng1);
apple.addEmployee(mng2);

// list all employees at company
apple.listEmployees();