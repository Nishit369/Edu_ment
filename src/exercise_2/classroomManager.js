var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Config = /** @class */ (function () {
    function Config(appName) {
        this.appName = appName;
    }
    Config.prototype.getAppName = function () {
        return this.appName;
    };
    Config.getInstance = function () {
        if (!Config.instance)
            Config.instance = new Config("Virtual Classroom");
        return Config.instance;
    };
    return Config;
}());
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.role = function () { return "Teacher"; };
    return Teacher;
}(User));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.role = function () { return "Student"; };
    return Student;
}(User));
var UserFactory = /** @class */ (function () {
    function UserFactory() {
    }
    UserFactory.create = function (type, name) {
        return type === "teacher" ? new Teacher(name) : new Student(name);
    };
    return UserFactory;
}());
var StudentObserver = /** @class */ (function () {
    function StudentObserver(student) {
        this.student = student;
    }
    StudentObserver.prototype.notify = function (msg) { console.log("[Notify ".concat(this.student.name, "] ").concat(msg)); };
    return StudentObserver;
}());
var Classroom = /** @class */ (function () {
    function Classroom(teacher, title) {
        this.observers = [];
        this.teacher = teacher;
        this.title = title;
    }
    Classroom.prototype.registerStudent = function (student) {
        var obs = new StudentObserver(student);
        this.observers.push(obs);
        console.log("".concat(student.name, " joined ").concat(this.title));
    };
    Classroom.prototype.announce = function (msg) {
        console.log("[Teacher ".concat(this.teacher.name, "] Announcement: ").concat(msg));
        this.observers.forEach(function (o) { return o.notify(msg); });
    };
    return Classroom;
}());
var AssignHomework = /** @class */ (function () {
    function AssignHomework(classroom, hw) {
        this.classroom = classroom;
        this.hw = hw;
    }
    AssignHomework.prototype.execute = function () { this.classroom.announce("New Homework: " + this.hw); };
    return AssignHomework;
}());
var AnnounceExam = /** @class */ (function () {
    function AnnounceExam(classroom, date) {
        this.classroom = classroom;
        this.date = date;
    }
    AnnounceExam.prototype.execute = function () { this.classroom.announce("Exam scheduled on " + this.date); };
    return AnnounceExam;
}());
var config = Config.getInstance();
console.log("=== " + config.getAppName() + " ===");
var teacher = UserFactory.create("teacher", "Dr. Rao");
var class1 = new Classroom(teacher, "Algorithms");
var s1 = UserFactory.create("student", "Nina");
var s2 = UserFactory.create("student", "Raj");
class1.registerStudent(s1);
class1.registerStudent(s2);
//executing
var hw = new AssignHomework(class1, "Implement Merge Sort");
var exam = new AnnounceExam(class1, "10-Oct-2025");
hw.execute();
exam.execute();
