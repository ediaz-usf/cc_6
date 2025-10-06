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