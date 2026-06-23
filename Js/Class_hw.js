// create the following classes
class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  work() {
    console.log("Employee :");
  }
  showdetails() {
    console.log(`${this.id}, ${this.name}`);
  }
}
display = new Employee(101, "A");
display.work();
display.showdetails();

class Devloper extends Employee {
  constructor(name, id, language) {
    super(id, name);
    this.language = language;
  }
  work() {
    console.log("Devloper :");
  }
  writecode() {
    console.log(`${this.id},${this.name} ${this.id} ${this.language}`);
  }
}

// !class FrontEnd Devloper
class FrontendDev extends Devloper {
  constructor(id, name, language, framwork) {
    super(id, name, language);
    this.framwork = framwork;
  }
  work() {
    console.log("Frontend Devloper :");
  }
  BuildUI() {
    console.log(`${this.id},${this.name},${this.language},${this.framwork}`);
  }
}
display = new FrontendDev(102, "B", "JavaScript", "React");
display.work();
display.BuildUI();

// !class Manager
class Manager extends Employee {
  constructor(id, name, teamsize) {
    super(id, name);
    this.teamsize = teamsize;
  }
  work() {
    console.log("Manager :");
  }
  conductMeeting() {
    console.log(`${this.id},${this.name},${this.teamsize} `);
  }
}
display = new Manager(101, "C", 10);
display.work();
display.conductMeeting();
