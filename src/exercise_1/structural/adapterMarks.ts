class OldMarksSystem {
    getMarks(): number { return 85; }
  }
  interface NewMarks {
    getPercentage(): string;
  }
  class MarksAdapter implements NewMarks {
    private oldSys: OldMarksSystem;
    constructor(oldSys: OldMarksSystem) {
        this.oldSys = oldSys;
    }
    getPercentage(): string {
      return this.oldSys.getMarks() + "%";
    }
  }
  const oldSys = new OldMarksSystem();
  const adapter = new MarksAdapter(oldSys);
  console.log("Converted:", adapter.getPercentage());
  