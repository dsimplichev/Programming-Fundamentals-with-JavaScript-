function rightPlace(string, replace, result) {


    let replaceWord = string.replace('_', replace);

    if (replaceWord !== result) {
        console.log("Not Matched")
    } else {
        console.log("Matched")
    }




}
rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')