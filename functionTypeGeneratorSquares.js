function* squaresOfNumber(limit) {
  for (let i = 1; i <= limit; i++) {
    yield i * i;
  }
}

const squares = squaresOfNumber(5);

console.log(squares.next().value);
console.log(squares.next());
console.log(squares.next());
console.log(squares.next());
console.log(squares.next().done);
