class QuestionPaper {
    public subject: string;
    public questions: string[];
    
    constructor(subject: string, questions: string[]) {
        this.subject = subject;
        this.questions = questions;
    }
    clone(): QuestionPaper {
      return new QuestionPaper(this.subject, [...this.questions]);
    }
  }
  const mathPaper = new QuestionPaper("Math", ["Q1", "Q2"]);
  const backup = mathPaper.clone();
  backup.questions.push("Q3");
  console.log("Original:", mathPaper.questions);
  console.log("Clone:", backup.questions);
  