describe("Hello world", function() {
  it("should return hello world!", function() {
    expect(helloWorld()).toEqual("Hello World!");
  });
  it("has world", function() {
        expect(helloWorld()).toContain("World");
        expect(helloWorld()).not.toContain("hello");
  });
});

describe("Generic Check", function() {
  it("is a var with value 10", function() {
    expect(myVar).toEqual(10);
  });
});

describe("Shipping charges calculator", function(){

  it("shipping should be number ", function(){
    
    expect(calculateShipping(199)).toEqual(jasmine.any(Number));
  });
});
