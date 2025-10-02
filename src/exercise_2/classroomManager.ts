class Config {
    private static instance: Config;
    private appName: string;

    public getAppName(): string {
        return this.appName;
    }
    private constructor(appName: string) {
        this.appName = appName;
    }
    static getInstance() {
      if (!Config.instance) Config.instance = new Config("Virtual Classroom");
      return Config.instance;
    }
  }
  
  abstract class User {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract role(): string;
  }
  class Teacher extends User { role() { return "Teacher"; } }
  class Student extends User { role() { return "Student"; } }
  
  class UserFactory {
    static create(type: "teacher" | "student", name: string): User {
      return type === "teacher" ? new Teacher(name) : new Student(name);
    }
  }
  
  interface Observer { notify(msg: string): void; }
  class StudentObserver implements Observer {
    public student: Student;
    constructor(student: Student) {
        this.student = student;
    }
    notify(msg: string) { console.log(`[Notify ${this.student.name}] ${msg}`); }
  }
  class Classroom {
    private observers: Observer[] = [];
    public teacher: Teacher;
    public title: string;
    constructor(teacher: Teacher, title: string) {
        this.teacher = teacher;
        this.title = title;
    }
    registerStudent(student: Student) {
      const obs = new StudentObserver(student);
      this.observers.push(obs);
      console.log(`${student.name} joined ${this.title}`);
    }
    announce(msg: string) {
      console.log(`[Teacher ${this.teacher.name}] Announcement: ${msg}`);
      this.observers.forEach(o => o.notify(msg));
    }
  }
  
  interface Command { execute(): void; }
  class AssignHomework implements Command {
    private classroom: Classroom;
    private hw: string;
    constructor(classroom: Classroom, hw: string) {
        this.classroom = classroom;
        this.hw = hw;
    }
    execute() { this.classroom.announce("New Homework: " + this.hw); }
  }
  class AnnounceExam implements Command {
    private classroom: Classroom;
    private date: string;
    constructor(classroom: Classroom, date: string) {
        this.classroom = classroom;
        this.date = date;
    }
    execute() { this.classroom.announce("Exam scheduled on " + this.date); }
  }
  
  const config = Config.getInstance();
  console.log("=== " + config.getAppName() + " ===");
  
  const teacher = UserFactory.create("teacher", "Dr. Rao") as Teacher;
  const class1 = new Classroom(teacher, "Algorithms");
  
  const s1 = UserFactory.create("student", "Nina") as Student;
  const s2 = UserFactory.create("student", "Raj") as Student;
  class1.registerStudent(s1);
  class1.registerStudent(s2);
  //executing
  const hw = new AssignHomework(class1, "Implement Merge Sort");
  const exam = new AnnounceExam(class1, "10-Oct-2025");
  hw.execute();
  exam.execute();
