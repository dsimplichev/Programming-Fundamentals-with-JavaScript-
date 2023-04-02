function solve(input) {
    let stringToReplace = input.shift();
    let index = 0;
    let command = input[index];
    index++;
    while (command != "Complete") {
        if (command.includes("Lower")) {
            let index = command.split(" ")[2];
            newString = stringToReplace[index].toLowerCase();
            stringToReplace = stringToReplace.replace(index + 1, newString);
        } else if (command.includes("Upper")) {
            let index = command.split(" ")[2];
            newString = stringToReplace[index].toUpperCase();
            stringToReplace = stringToReplace.replace(index, newString);
        } else if (command.includes("Insert")) {
            let [lineCommand, index, char] = command.split(" ");
            if (index < 0 || index > stringToReplace.length) {
                return;
            }
            stringToReplace =
                stringToReplace.slice(0, index) +
                char +
                stringToReplace.slice(index, stringToReplace.length - 1);
        } else if (command.includes("Replace")) {
            let [lineCommand, char, value] = command.split(" ");
            const newCharacter = String.fromCharCode( char.charCodeAt(0) + Number(value));
            stringToReplace = stringToReplace.replaceAll(char, newCharacter);
        } else if (command.includes("Validation")) {
            if (stringToReplace.length < 8) {
                console.log("Password must be at least 8 characters long!");
            }
            if (!stringToReplace.match(/(\w*)/g)) {
                console.log("Password must consist only letters, diggits and _!");
            }
            if (!stringToReplace.match(/[A-Z]/g)) {
                console.log("Password must consist at least one uppercase letter!");
            }
            if (!stringToReplace.match(/[a-z]/g)) {
                console.log("Password must consist at least one lowercase letter!");
            }
            if (!stringToReplace.match(/[0-9]/g)) {
                console.log("Password must consist at least one digit!");
            }
        }
        command = input[index];
        index++;
    }
    console.log(stringToReplace);
}
solve([
    "123456789",
    "Insert 3 R",
    "Replace 5 15",
    "Validation",
    "Make Lower 3",
    "Complete",
  ]);