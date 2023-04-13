const {Circle, Square, Triangle} = require("./shapes")
// Imports the Circle, Square, and Triangle shape classes from the 'shapes.js' module and defines a test suite for the shape class.  
// The test case checks whether "Circle, Square, and Triangle" object can be rendered correctly by calling the render method and comparing the result to an expected SVG string.

// Circle Shape
describe('Circle', () => {
    test('renders the correct circle shape and colour', () => {
      const shape = new Circle();
      var colour =('yellow')
      shape.setColour(colour);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${colour}"/>`);
    });
  });
  // Square Shape
  describe('Square', () => {
      test('renders the correct square shape and colour', () => {
        const shape = new Square();
        var colour =('purple')
        shape.setColour(colour);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${colour}"/>`);
      });
    });
  // Triangle Shape
  describe('Triangle', () => {
      test('renders the correct triangle shape and colour', () => {
        const shape = new Triangle();
        var colour =('orange')
        shape.setColour(colour);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${colour}"/>`);
      });
    });