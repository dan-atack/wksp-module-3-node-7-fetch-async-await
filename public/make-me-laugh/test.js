const handleSubmit = (event) => {
    event.preventDefault();
    // this const type statement will grab the id of an option in the dropdown menu, in order to tell the server which type of joke you are requesting.
    const type = document.getElementById('<ID OF THE DROPDOWN>').value;
    fetch('/jokes', {
        method: 'POST',
        headers: {
            // Accept tells the (server?) what type of content you are prepared to accept.
            // Most servers will be ready to cater to a multiple of different Accept types (json, html, etc.)
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        // we could shorten this line to just { type } since the keyword we're linking our type variable to is also 'type', but this
        // is more illustrative so we'll keep the redundant syntax.
        body: { type: type }
    })
    // When your request comes back, parse it into an object. SEE BELOW on line 25
    .then(JSON.parse(data))
    .then(data => {
        console.log(data);
        // check the status using a res.status method.
        // if it's '200' that's good; then render the joke (using the standard DOM methods that we actually understand reasonably well)
    })
}

res.status(200).send({status: 200, data: null }) // you'd have actual data where the null is, of course

module.exports = { handleSubmit };