function messagesManager(input) {
    const messagesCapacity = Number(input.shift());
    let users = {};

    input.map((i) => {
        if (i.includes("Add")) {
            const [command, username, send, receive] = i.split("=");
            if (users.hasOwnProperty(username)) {
                return;
            }
            users[username] = {
                send: Number(send),
                receive: Number(receive),
            };
        } else if (i.includes("Message")) {
            const [command, sender, receiver] = i.split("=");
            if (users.hasOwnProperty(sender) && users.hasOwnProperty(receiver)) {
                if (
                    users[sender].send + 1 + users[sender].receive ==
                    messagesCapacity
                ) {
                    delete users[sender];
                    console.log(`${sender} reached the capacity!`);
                } else {
                    users[sender].send += 1;
                }

                if (
                    users[receiver].receive + 1 + users[receiver].send ==
                    messagesCapacity
                ) {
                    delete users[receiver];
                    console.log(`${receiver} reached the capacity!`);
                } else {
                    users[receiver].receive += 1;
                }
            }
        } else if (i.includes("Empty")) {
            const [command, username] = i.split("=");
            if (username == "All") {
                users = {};
            } else {
                delete users[username];
            }
        } else if (i.includes("Statistics")) {
            console.log(`Users count: ${Object.keys(users).length}`);
            for (const user in users) {
                console.log(`${user} - ${users[user].send + users[user].receive}`);
            }
        }
    });
}

messagesManager(["10",
    "Add=Berg=9=0",
    "Add=Kevin=0=0",
    "Message=Berg=Kevin",
    "Add=Mark=5=4",
    "Statistics"])
