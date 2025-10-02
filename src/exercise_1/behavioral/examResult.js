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
var Student = /** @class */ (function () {
    function Student(name, gpa, income) {
        this.name = name;
        this.gpa = gpa;
        this.income = income;
    }
    return Student;
}());
var AbstractHandler = /** @class */ (function () {
    function AbstractHandler() {
    }
    AbstractHandler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    AbstractHandler.prototype.handleNext = function (student) {
        if (this.nextHandler)
            this.nextHandler.handleRequest(student);
    };
    return AbstractHandler;
}());
var GPACheck = /** @class */ (function (_super) {
    __extends(GPACheck, _super);
    function GPACheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GPACheck.prototype.handleRequest = function (student) {
        if (student.gpa < 3.0) {
            console.log("".concat(student.name, " rejected: GPA too low."));
        }
        else
            this.handleNext(student);
    };
    return GPACheck;
}(AbstractHandler));
var IncomeCheck = /** @class */ (function (_super) {
    __extends(IncomeCheck, _super);
    function IncomeCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IncomeCheck.prototype.handleRequest = function (student) {
        if (student.income > 50000) {
            console.log("".concat(student.name, " rejected: Income too high."));
        }
        else
            console.log("".concat(student.name, " approved for scholarship."));
    };
    return IncomeCheck;
}(AbstractHandler));
var s1 = new Student("Alice", 3.5, 20000);
var s2 = new Student("Bob", 2.8, 30000);
var gpa = new GPACheck();
var income = new IncomeCheck();
gpa.setNext(income);
gpa.handleRequest(s1);
gpa.handleRequest(s2);
