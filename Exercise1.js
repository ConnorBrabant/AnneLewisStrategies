const fetch = require("node-fetch");

async function fetchUserCards() {
    let userData = [];
    callsRemaining = 5;
    while (callsRemaining !== 0) {
        let callsMade = []

        for (let i = 0; i < 5; i++) {
            callsMade.push(fetch('http://faker.hook.io/?property=helpers.userCard&locale=en_US'))
        }

        await Promise.all(callsMade).then(responses => {
                return Promise.all(responses.map(response => response.json()))
        }).then(cardsRetrieved => {
            userData = userData.concat(cardsRetrieved)
            callsRemaining -= 1
        }).catch(err => console.log(err))
    }

    console.log(userData)
}

fetchUserCards();