//your JS code here. If required.


const student = {
    name: "john",
    age: 30,
    city: "New York"
};

function getKeys(obj) {
    return Object.keys(obj);
}

console.log(getKeys(student)); // This will output: ["name", "age", "city"]