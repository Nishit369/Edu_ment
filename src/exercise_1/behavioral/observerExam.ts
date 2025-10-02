interface Observer {
    update(message: string): void;
  }
  class Student implements Observer {
    public id: string;
    constructor(id: string) {
      this.id = id;
    }
    update(message: string) {
      console.log(`Student ${this.id} notified: ${message}`);
    }
  }
  class ExamBoard {
    private observers: Observer[] = [];
    register(o: Observer) { this.observers.push(o); }
    unregister(o: Observer) { this.observers = this.observers.filter(obs => obs !== o); }
    notify(msg: string) { this.observers.forEach(o => o.update(msg)); }
    publishResults() { this.notify("Results are out! Check your portal."); }
  }
  
  const examBoard = new ExamBoard();
  const s1 = new Student("S101"), s2 = new Student("S102");
  examBoard.register(s1); examBoard.register(s2);
  examBoard.publishResults();
  