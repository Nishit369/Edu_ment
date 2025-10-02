var Student = /** @class */ (function () {
    function Student(id) {
        this.id = id;
    }
    Student.prototype.update = function (message) {
        console.log("Student ".concat(this.id, " notified: ").concat(message));
    };
    return Student;
}());
var ExamBoard = /** @class */ (function () {
    function ExamBoard() {
        this.observers = [];
    }
    ExamBoard.prototype.register = function (o) { this.observers.push(o); };
    ExamBoard.prototype.unregister = function (o) { this.observers = this.observers.filter(function (obs) { return obs !== o; }); };
    ExamBoard.prototype.notify = function (msg) { this.observers.forEach(function (o) { return o.update(msg); }); };
    ExamBoard.prototype.publishResults = function () { this.notify("Results are out! Check your portal."); };
    return ExamBoard;
}());
var examBoard = new ExamBoard();
var s1 = new Student("S101"), s2 = new Student("S102");
examBoard.register(s1);
examBoard.register(s2);
examBoard.publishResults();
