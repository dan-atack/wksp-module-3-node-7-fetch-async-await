// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {
    try {
        let recieved = await request("http://api.open-notify.org/iss-now.json");
        recieved = await JSON.parse(recieved);
        const lat = recieved.iss_position.latitude;
        const lng = recieved.iss_position.longitude;
        console.log(`lat: ${lat}, lng: ${lng}`);
    }
    catch(err) {
        console.log("the ISS says fuck yourself.")
    }
}

getIssPosition();