function easterEggs(text){
    let pattern = /([@,#]+([a-z]{3,})[@,#]+\W*\/+([0-9]+)\/+)/g;
    let match;
    while((match = pattern.exec(text)) !== null){
        let color = match[2];
        let amount = match[3];
        console.log(`You found ${amount} ${color} eggs!`);
    }
}


easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/'])