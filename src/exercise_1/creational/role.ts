abstract class User {
    abstract getRole(): string;
  }
  class Teacher extends User { getRole() { return "Teacher"; } }
  class StudentUser extends User { getRole() { return "Student"; } }
  
  class UserFactory {
    static createUser(type: string): User {
      switch (type) {
        case "teacher": return new Teacher();
        case "student": return new StudentUser();
        default: throw new Error("Invalid role");
      }
    }
  }
  const t = UserFactory.createUser("teacher");
  console.log(t.getRole());
  