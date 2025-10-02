var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var QuestionPaper = /** @class */ (function () {
    function QuestionPaper(subject, questions) {
        this.subject = subject;
        this.questions = questions;
    }
    QuestionPaper.prototype.clone = function () {
        return new QuestionPaper(this.subject, __spreadArray([], this.questions, true));
    };
    return QuestionPaper;
}());
var mathPaper = new QuestionPaper("Math", ["Q1", "Q2"]);
var backup = mathPaper.clone();
backup.questions.push("Q3");
console.log("Original:", mathPaper.questions);
console.log("Clone:", backup.questions);
