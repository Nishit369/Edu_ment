var OldMarksSystem = /** @class */ (function () {
    function OldMarksSystem() {
    }
    OldMarksSystem.prototype.getMarks = function () { return 85; };
    return OldMarksSystem;
}());
var MarksAdapter = /** @class */ (function () {
    function MarksAdapter(oldSys) {
        this.oldSys = oldSys;
    }
    MarksAdapter.prototype.getPercentage = function () {
        return this.oldSys.getMarks() + "%";
    };
    return MarksAdapter;
}());
var oldSys = new OldMarksSystem();
var adapter = new MarksAdapter(oldSys);
console.log("Converted:", adapter.getPercentage());
