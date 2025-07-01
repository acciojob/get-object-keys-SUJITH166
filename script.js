//your JS code here. If required.


const student = {
    name: "john",
};

function getKeys(obj) {
    console.log("Object received:", obj);
    return Object.keys(obj);
}

console.log(student.getKeys()); // Should output: ["name"]