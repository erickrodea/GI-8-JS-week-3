
//EASY

function exercise(day) {
    return `Today's exercise: ${day}`

};

console.log(exercise("swimming"));

//MEDIUM

function sharePizza(slice, slices) {
    let fullPizza = slice;
    let slicePerPerson = slice / slices;

    return `Each person gets ${slicePerPerson.toFixed(2)} slices of pizza; from our ${fullPizza} slice pizza`
};
console.log(sharePizza(8, 2))



//HARD

//create a closure of name and ssn objects 
function createPII(name, ssn) {
    // Private variables are being created
    let NAME = name;
    let SSN = ssn;

    // Public methods to access data
    //The get syntax binds an object property to a function that will
    //be called when that property is looked up.
    return {
        getName: function () {
            return NAME;
        },
        getSSN: function () {
            return SSN;
        },

    };
}

// Create a PII object instanciate the object for it to be called
const patient2 = createPII("John", "123-45-6789", "10/9/1997");

// Access the properties and methods
console.log(patient2.name); // Output: Undefined
console.log(patient2.ssn);   // Output: Undefined
console.log(patient2.getName());  // Output: John
console.log(patient2.getSSN());  // Output: 123-45-678



























