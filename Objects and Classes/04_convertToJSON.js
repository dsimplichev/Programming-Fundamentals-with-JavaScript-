function convertTo(name, lastName, hairColor){

let personInfo = {
    name,
    lastName,
    hairColor,

}

let jsonFile = JSON.stringify(personInfo);
console.log(jsonFile)




}
convertTo('George',
'Jones',
'Brown')