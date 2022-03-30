export class Angle {
  readonly radian: number;
  
  static readonly instance = new Angle(0);
  
  private constructor(radian: number) {
    this.radian = radian;
  }
  
  // add(angle: Angle): Angle {
  //   return new Angle(this.radian + angle.radian);
  // }
  
  // static radian(radian: number): Angle {
  //   return new Angle(radian);
  // }
  //
  // static degree(degree: number): Angle {
  //   return new Angle(degree / 180 * Math.PI);
  // }
}

Angle.instance;

/*
 * Angle 클래스 안에서는 radian으로 통일
 * 하지만 radian과 degree를 둘다 사용해서 Angle 클래스를 만들고 싶을때
 * static radian, static degree를 뚫어서 제공
 */

// const r = Angle.radian(Math.PI);
// const d = Angle.degree(180);
// const angle = r.add(d);

// export {angle};