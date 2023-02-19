function friendListMaintenance(inputData) {
 
    const names = inputData.shift().split(", ");
    let command = inputData.shift();
 
    let blackListedCount = 0;
    let lostCount = 0;
 
 
    while(command != "Report") {
 
        let [currentCommand, data, newUserName] = command.split(" ");
 
        if(currentCommand == "Blacklist") {
            if(names.includes(data)) {
            console.log(`${data} was blacklisted.`);
            names[names.indexOf(data)] = "Blacklisted"
            blackListedCount++;
        } else {
            console.log(`${data} was not found.`)
        }
        }
        
        if(currentCommand == "Error" && data >= 0 && data <= names.length -1 && names[data] != "Blacklisted" && names[data] != "Lost") {
            console.log(`${names[data]} was lost due to an error.`);
            names[data] = "Lost";
            lostCount++;
        }
 
        if(currentCommand == "Change" && data >= 0 && data <= names.length -1 ) {
            console.log(`${names[data]} changed his username to ${newUserName}.`)
            names[data] = newUserName;
        }
 
        command = inputData.shift();
    }
 
    console.log(`Blacklisted names: ${blackListedCount}`);
    console.log(`Lost names: ${lostCount}`);
    console.log(names.join(" "))
 
}

friendListMaintenance(["Mike, John, Eddie",
    "Blacklist Mike",
    "Error 0",
    "Report"])
