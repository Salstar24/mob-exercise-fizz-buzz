const prod_code = (number) => {
  let output = '';

  if (number % 3 === 0) {
    output = output+'Fizz';
  }

  if (number % 5 === 0) {
    output = output+'Buzz';
  }

  if (output.length > 0) {
    return output
  }

  return number;
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

  it('Returns the number if not divisible by 3 or 5', () => {
    expect(prod_code(2)).toBe(2);
  });
});
