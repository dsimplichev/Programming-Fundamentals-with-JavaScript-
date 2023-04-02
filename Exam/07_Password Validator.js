
function manipulatePassword(input) {
    let password = input.shift();

    function isPasswordValid() {
        if (password.length < 8) {
            console.log("Password must be at least 8 characters long!");
            return false;
        }
        if (!/^[a-zA-Z0-9_]+$/.test(password)) {
            console.log("Password must consist only of letters, digits and _!");
            return false;
        }
        if (!/[A-Z]/.test(password)) {
            console.log("Password must consist at least one uppercase letter!");
            return false;
        }
        if (!/[a-z]/.test(password)) {
            console.log("Password must consist at least one lowercase letter!");
            return false;
        }
        if (!/\d/.test(password)) {
            console.log("Password must consist at least one digit!");
            return false;
        }
        return true;
    }

    function replaceChar(char, value) {
        let charCode = char.charCodeAt(0);
        let newChar = String.fromCharCode(charCode + value);
        password = password.replaceAll(char, newChar);
        console.log(password);
    }

    function insertChar(index, char) {
        if (index < 0 || index > password.length) {
            return;
        }
        password = password.slice(0, index) + char + password.slice(index);
        console.log(password);
    }

    function makeUpper(index) {
        if (index < 0 || index >= password.length) {
            return;
        }
        password = password.slice(0, index) + password[index].toUpperCase() + password.slice(index + 1);
        console.log(password);
    }

    function makeLower(index) {
        if (index < 0 || index >= password.length) {
            return;
        }
        password = password.slice(0, index) + password[index].toLowerCase() + password.slice(index + 1);
        console.log(password);
    }

    for (let command of input) {
        const tokens = command.split(" ");
        switch (tokens[0]) {
            case "Make":
                if (tokens[1] === "Upper") {
                    makeUpper(Number(tokens[2]));
                } else if (tokens[1] === "Lower") {
                    makeLower(Number(tokens[2]));
                }
                break;
            case "Insert":
                insertChar(Number(tokens[1]), tokens[2]);
                break;
            case "Replace":
                replaceChar(tokens[1], Number(tokens[2]));
                break;
            case "Validation":
                isPasswordValid();
                break;
            case "Complete":
                return;
        }
    }
}
manipulatePassword(['invalidpassword*',
'Add 2 p',
'Replace i -50',
'Replace * 10',
'Make Upper 2',
'Validation',
'Complete'])
