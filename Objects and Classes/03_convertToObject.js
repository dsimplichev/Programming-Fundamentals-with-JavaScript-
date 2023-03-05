function convertToObject(input){


let newObj = JSON.parse(input);
let keys = Object.keys(newObj);
for(let key of keys){
    let value = newObj[key];
    console.log(`${key}: ${value}`);
}


}
 convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')