describe('fizzBuzz', function() {
  it("returns 'fizz' when number divisible by 3", function() {
    expect(fizzBuzz(3)).toEqual('fizz');
    expect(fizzBuzz(6)).toEqual('fizz');
  });

  it("returns 'buzz' when number divisible by 5", function() {
    expect(fizzBuzz(5)).toEqual('buzz');
    expect(fizzBuzz(10)).toEqual('buzz');
  });

  it("returns 'fizzbuzz' when number divisible by 3 and 5", function() {
    expect(fizzBuzz(15)).toEqual('fizzbuzz');
  });

  it("returns number when number is not divisible by 3 or 5", function() {
    expect(fizzBuzz(1)).toEqual(1);
  });
});
