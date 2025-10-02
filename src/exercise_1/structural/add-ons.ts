interface Course { getDescription(): string; getCost(): number; }
class BasicCourse implements Course {
  getDescription() { return "Basic Course"; }
  getCost() { return 100; }
}
class CertificateDecorator implements Course {
  private course: Course;
  constructor(course: Course) {
    this.course = course;
  }
  getDescription() { return this.course.getDescription() + " + Certificate"; }
  getCost() { return this.course.getCost() + 50; }
}
class ProjectDecorator implements Course {
  private course: Course;
  constructor(course: Course) {
    this.course = course;
  }
  getDescription() { return this.course.getDescription() + " + Project"; }
  getCost() { return this.course.getCost() + 70; }
}
let course: Course = new BasicCourse();
course = new CertificateDecorator(course);
course = new ProjectDecorator(course);
console.log(course.getDescription(), "=>", course.getCost());
