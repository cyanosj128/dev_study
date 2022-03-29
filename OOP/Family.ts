import {FamilyMember} from "./FamilyMember";

export class Family {
  members: FamilyMember[];
  
  constructor(members: FamilyMember[]) {
    this.members = members;
  }
}
