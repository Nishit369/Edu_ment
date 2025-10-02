var BasicCourse = /** @class */ (function () {
    function BasicCourse() {
    }
    BasicCourse.prototype.getDescription = function () { return "Basic Course"; };
    BasicCourse.prototype.getCost = function () { return 100; };
    return BasicCourse;
}());
var CertificateDecorator = /** @class */ (function () {
    function CertificateDecorator(course) {
        this.course = course;
    }
    CertificateDecorator.prototype.getDescription = function () { return this.course.getDescription() + " + Certificate"; };
    CertificateDecorator.prototype.getCost = function () { return this.course.getCost() + 50; };
    return CertificateDecorator;
}());
var ProjectDecorator = /** @class */ (function () {
    function ProjectDecorator(course) {
        this.course = course;
    }
    ProjectDecorator.prototype.getDescription = function () { return this.course.getDescription() + " + Project"; };
    ProjectDecorator.prototype.getCost = function () { return this.course.getCost() + 70; };
    return ProjectDecorator;
}());
var course = new BasicCourse();
course = new CertificateDecorator(course);
course = new ProjectDecorator(course);
console.log(course.getDescription(), "=>", course.getCost());
