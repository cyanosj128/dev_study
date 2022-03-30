import {FamilyRole, Occupation} from "./Type";
import {Person} from "./Person";

export class FamilyMember extends Person{
  familyRole: string;
  
  constructor(person: Person, familyRole: FamilyRole) {
    /*
    * super는 상속받는 객체의 constructor를 모두 받을 수 있어야 한다
    * */
    super(person.name, person.birthday, person.occupation);
    this.familyRole = familyRole;
  }
  
  answerFamilyRole() {
    console.log('i am a' + this.familyRole + 'in my family');
  }
  
  changeOccupation(newOccupation: Occupation) {
    this.occupation = newOccupation
  }
}