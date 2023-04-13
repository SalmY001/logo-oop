//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle} = require("./lib/shapes");

// Defines a Svg class that has a constructor with three methods for rendering and setting the text and shape elements in the SVG string.
class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,colour){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${colour}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }   
}

//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Logo text: Enter up to three characters',
    },
    {
        type: 'input',
        name: 'textColour',
        message: 'Text Colour: Enter colour for logo text (Or a hexadecimal number)',
    },
    {
        type: 'input',
        name: 'shape',
        message: 'Shape Colour: Enter a colour for the logo (OR a hexadecimal number)',
    },
    {
        type: 'list',
        name: 'shapeList',
        message: 'Logo Shape: Choose shape from list',
        choices: ['Circle','Square', 'Triangle'],
    },
];

// Function to write data to file
function writeToFile(fileName, data) {
	console.log("Writing [" + data + "] to file [" + fileName + "]")
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, you have generated a logo.svg!");
    })
};

async function init() {
    //console.log("Starting init");
	var svgString = "";
	var svg_file = "logo.svg";

    // Prompt the user for answers
    const answers = await inquirer.prompt(questions);
        console.log(answers)

	//display user inputs
	var text = "";
	if (answers.text.length > 0 && answers.text.length < 4) {
		// valid character length between 1-3 chars
		text = answers.text;
	} else {
		// invalid character length
		console.log("Invalid text length.  Please enter text length between 1-3 characters");
		return "Invalid"
	}
	fontColour = answers["textColour"];
	shapeColour = answers.shape;
	shapeType = answers["shapeList"];

	//user shape
	let shape;
	if (shapeType === "Square" || shapeType === "square") {	
		shape = new Square();
		console.log("User selected Square shape");
	}
	else if (shapeType === "Circle" || shapeType === "circle") {
		shape = new Circle();
		console.log("User selected Circle shape");
	}
	else if (shapeType === "Triangle" || shapeType === "triangle") {
		shape = new Triangle();
		console.log("User selected Triangle shape");
	}
	else {
		console.log("Invalid shape!");
		return "Invalid Shape";
	}
	shape.setColour(shapeColour);

	// Create a new Svg instance and add the shape and text elements to it
	var svg = new Svg();
	svg.setTextElement(text, fontColour);
	svg.setShapeElement(shape);
	svgString = svg.render();

	//Print shape to log
	console.log("Displaying shape:\n\n" + svgString);

	console.log("Logo shape generated!");
	console.log("Writing logo shape to file...");
	writeToFile(svg_file, svgString); 

}

init()