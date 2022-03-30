import {Angle} from "./Angle";
Angle.instance;

/* Abstraction
 * 구현방식은 숨긴다
 * 역할에 집중하고 실제로 수행 방식은 신경쓰지 않는다
 */

// 함수로 빼는 것도 추상화라고 볼수 있다
function square(n) {
  return n * n;
}

const a = square(5);

abstract class OneWayContainer<E> {
  protected readonly container = [];
  
  abstract push(value: E);
  abstract pop(): E;
  abstract peek(): E;
  
  isEmpty(): boolean {
    return this.container.length === 0;
  }
}

/*
 * Stack은 OneWayContainer의 역할을 수행해야 한다.
 *
 */
class Stack<E> extends OneWayContainer<E> {
  peek(): E {
    return this.container[this.container.length - 1];
  }
  
  pop(): E {
    const element = this.peek();
    this.container.splice(this.container.length - 1, 1);
    return element;
  }
  
  push(value: E) {
    this.container.push(value);
  }
  
  isStack() {
    return true;
  }
}

class Queue<E> extends OneWayContainer<E> {
  peek(): E {
    return this.container[0];
  }
  
  pop(): E {
    const element = this.peek();
    this.container.shift();
    return element;
  }
  
  push(value: E) {
    this.container.push(value);
  }
  
  isQueue() {
    return true;
  }
}

let stack: Stack<number> = new Stack();
stack.isStack();

let queue: Queue<number> = new Queue();
queue.isQueue();

let oneWayContainer: OneWayContainer<number> = new Queue();
// oneWayContainer = queue;

while (!oneWayContainer.isEmpty()) {
  const state = oneWayContainer.pop();
  
  const nextStates = [state + 1, state + 2, state + 3, state + 4, state + 5];
  for (const next of nextStates) {
    // duplicate check, visited check
    oneWayContainer.push(next);
  }
}

// 킥보드 / 오토바이 (리스/렌트)
// function createMap() {}
// function createMap() {}