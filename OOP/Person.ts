import {Occupation} from "./Type";

export class Person {
  static id = '12345';
  
  readonly name: string;
  readonly birthday: number;
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
    return this.answerBirthdayImpl;
  }
  
  private answerBirthdayImpl() {
    console.log('my birthday is' + new Date(this.birthday));
  }
}


// abstract class, class
// keyword: static, protected, private, readonly, (static) constructor, dependency injection, single tone
// () => {} lambda function this로 인해 조심해야하는 이유

// static: 클래스(Person)에 종속되어 person1.id는 조회 불가.
// Person.id로 접근해야함
const person1 = new Person('', 0, 'BUSINESSMAN');
// const person2 = new Person('1', 0, 'STUDENT');
// const personId = Person.id;

// protected -> class를 상속받는 자손 class에서 접근이 가능하다.

// immutable Class -> 객체가 생성될때 모든 값이 고정됨. (굉장히 많이 사용하는 개념)
// 객체 생성 비용을 높이는 대신, 코드 안정성을 얻는다

// javascript에서 overloading이 안되는 이유는 undefined라는 개념이 있어서이다
