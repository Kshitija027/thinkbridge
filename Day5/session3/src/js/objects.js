// Object Creation
const person = {
  name: "Kshitija",
  age: 23,
  skills: ["Java", "React", "Angular"],
  greet: function () {
    return `Hi, I am ${this.name} and I know ${this.skills.join(", ")}.`;
  }
};

console.log(person.greet());

// Iterating Object Properties
console.log("Using for...in:");
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

console.log("\nUsing Object.keys:");
Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});

console.log("\nUsing Object.entries:");
for (let [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
