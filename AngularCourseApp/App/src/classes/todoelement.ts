export class Todoelement {
  "name": string;
  "isDone": boolean;
  "editMode": boolean;

  constructor(name) {
    this.isDone = false;
    this.editMode = false;
    this.name = name;
  }

  ediMode() {
    this.editMode = true;
  }

  cancel() {
    this.editMode = false;
  }

  save(name) {
    this.name = name
  }
}
