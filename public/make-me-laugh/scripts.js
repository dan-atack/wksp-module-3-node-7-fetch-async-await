// constants:

const type = document.getElementById('type');
const submitButton = document.querySelector('button');

const handleSubmit = async (event) => {
  event.preventDefault();
  const jokeType = type.value;
  const data = { jokeType: type.value };
  if (jokeType === 'dad' || jokeType === 'geek' || jokeType === 'tronald') {
    // Once we get our joke type from the dropdown menu options, and disable the button after its done its thing,
    submitButton.disabled = true;
    // We'll post a fetch request to the server:
    let recieved = await fetch(`/${jokeType}-joke`, {
      // This is a post request since we're sending the joke type for the server to hold onto so it knows which type of joke to get:
      method: 'POST',
      // Always stringify before sending to the server:
      body: JSON.stringify(data),
      // Standard json headers so the server knows what to expect:
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    // When we get our response back from the server it initially comes in the form of a promise;
    // the .json() method call RESOLVES that into a long string, since we stringified it on the server end before sending...
    let result = await recieved.json();
    // then we use JSON.parse to convert the string into an object...
    let final = await JSON.parse(result);
    // And finally we can access the property of the object that interests us and get our stupid god damn joke:
    if (jokeType === 'dad' || jokeType === 'geek') {
      console.log(final.joke);
    } else if (jokeType === 'tronald') {
      console.log(final.value);
    }

    // Hallelujah!
  } else {
    console.log(
      'invalid joke type selected. Please choose a joke type from the menu.'
    );
  }
};
