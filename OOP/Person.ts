import {Occupation} from "./Type";

export class Person {
  name: string;
  birthday: number;
  occupation: Occupation;
  
  constructor(name: string, birthday: number, occupation: Occupation) {
    this.name = name;
    this.birthday = birthday;
    this.occupation = occupation;
  }
  
  answerName() {
    console.log('my name is' + this.name);
  }
  
  answerOccupation() {
    console.log('my occupation is' + this.occupation);
  }
  
  answerBirthday() {
    console.log('my birthday is' + new Date(this.birthday));
  }
}