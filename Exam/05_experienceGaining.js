function experienceGaining(input) {
    let expNeed = input.shift();
    let countOfBattles = input.shift();
    let battles = 0;
    let count = 1;
    for (let i = 0; i < input.length; i++) {
        let currentBattle = input[i];
        if (count % 3 == 0) {
            currentBattle  += currentBattle * 0.15;
        }
        if (count % 5 == 0) {
            currentBattle *= 0.90;
        }
        if (count % 15 == 0) {
            currentBattle += currentBattle * 0.05;
        }
        count++;
       battles += currentBattle;
        if (battles >= expNeed) {
            console.log(`Player successfully collected his needed experience for ${count - 1} battles.`)
            break;
        }
    }
    if (expNeed > battles) {
        console.log(`Player was not able to collect the needed experience, ${(expNeed - battles).toFixed(2)} more needed.`)
    }
}
experienceGaining([400,
    5,
    50,
    100,
    200,
    100,
    20])
    
    
    
    