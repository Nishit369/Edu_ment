interface Handler {
    setNext(handler: Handler): Handler;
    handleRequest(student: Student): void;
  }
  
  class Student {
    public name: string;
    public gpa: number;
    public income: number;

    constructor(name: string, gpa: number, income: number) {
      this.name = name;
      this.gpa = gpa;
      this.income = income;
    }
  }
  
  abstract class AbstractHandler implements Handler {
    private nextHandler?: Handler;
    setNext(handler: Handler): Handler {
      this.nextHandler = handler;
      return handler;
    }
    handleNext(student: Student) {
      if (this.nextHandler) this.nextHandler.handleRequest(student);
    }
    abstract handleRequest(student: Student): void; //for the interface
  }
  
  class GPACheck extends AbstractHandler {
    handleRequest(student: Student) {
      if (student.gpa < 3.0) {
        console.log(`${student.name} rejected: GPA too low.`);
      } else this.handleNext(student);
    }
  }
  
  class IncomeCheck extends AbstractHandler {
    handleRequest(student: Student) {
      if (student.income > 50000) {
        console.log(`${student.name} rejected: Income too high.`);
      } else console.log(`${student.name} approved for scholarship.`);
    }
  }
  
  const s1 = new Student("Alice", 3.5, 20000);
  const s2 = new Student("Bob", 2.8, 30000);
  
  const gpa = new GPACheck();
  const income = new IncomeCheck();
  gpa.setNext(income);
  
  gpa.handleRequest(s1);
  gpa.handleRequest(s2);
