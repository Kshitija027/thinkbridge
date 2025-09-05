// Function Declarations
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Kshitija")); // Hello, Kshitija!

// Function Expressions
const add = function (a, b) {
  return a + b;
};

console.log(add(5, 7)); // 12

// Arrow Functions
const multiply = (x, y) => x * y;
console.log(multiply(3, 4)); // 12

// Block Scope Example (let, const vs var)
function scopeExample() {
  if (true) {
    var functionScoped = "I am function scoped (var)";
    let blockScoped = "I am block scoped (let)";
    const alsoBlockScoped = "I am block scoped (const)";

    console.log(functionScoped); 
    console.log(blockScoped); 
    console.log(alsoBlockScoped); 
  }
  console.log(functionScoped); 

}

scopeExample();
