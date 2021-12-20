function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

const generator = generateSequence();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
