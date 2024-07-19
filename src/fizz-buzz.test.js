const prod_code = (number) => {

  // number = 15
  if (number % 15 ||)
  if (number % 3 === 0) {
    return 'Fizz';
  }

  if (number % 5 === 0) {
    return 'Buzz';
  }

  if (number % 5 === 0) {
    return 'Buzz';
  }

  return 'no matches';
};

describe('Fizz Buzz', () => {
  it('Returns "Fizz" if the number is divisible by 3', () => {
    expect(prod_code(3)).toBe('Fizz');
  });

  it('Returns "Buzz" if the number is divisible by 5', () => {
    expect(prod_code(5)).toBe('Buzz');
  });

  it('Returns "FizzBuzz" if the number is divisible by 3 and 5', () => {
    expect(prod_code(15)).toBe('FizzBuzz');
  });
});
