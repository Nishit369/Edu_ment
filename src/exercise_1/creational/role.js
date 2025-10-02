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
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.getRole = function () { return "Teacher"; };
    return Teacher;
}(User));
var StudentUser = /** @class */ (function (_super) {
    __extends(StudentUser, _super);
    function StudentUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StudentUser.prototype.getRole = function () { return "Student"; };
    return StudentUser;
}(User));
var UserFactory = /** @class */ (function () {
    function UserFactory() {
    }
    UserFactory.createUser = function (type) {
        switch (type) {
            case "teacher": return new Teacher();
            case "student": return new StudentUser();
            default: throw new Error("Invalid role");
        }
    };
    return UserFactory;
}());
var t = UserFactory.createUser("teacher");
console.log(t.getRole());
