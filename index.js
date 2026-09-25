const json=`{
    "name" : "jaysinh",
    "age" : 22,
    "hobbies" : ["cricket","football","basket"]
}`
console.log(typeof json);

const object=JSON.parse(json)

console.log(object);
console.log(typeof object)

const jo=JSON.stringify(object)
console.log(typeof jo)

