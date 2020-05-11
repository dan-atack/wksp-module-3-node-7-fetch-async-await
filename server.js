'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const request = require('request-promise');

const PORT = process.env.PORT || 8000;

// Remember since the server is acting as a channel between client and api it's an asynchronous operation that takes place:
const handleDadJoke = async (req, res) => {
  // Request from the client is a stringified json object, so we 'unpack' that here with the req. body to get at its content (in this case, the type of joke requested):
  let jokeType = req.body.jokeType;
  if (jokeType === 'dad') {
    try {
      // Send the request to the server, by giving its URL:
      let reply = await request('https://icanhazdadjoke.com/', {
        // We'll still attach some basic options to specify, in particular, the fact that we are expecting a json style response:
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      // When we get our reply, we'll stringify it before passing it back to the client:
      res.send(JSON.stringify(reply));
    } catch {
      error("Whaddaya call a dog who can't play fetch? YOU, you dumbass.");
    }
  }
};

const handleTronald = async (req, res) => {
  let reply = await request('https://api.tronalddump.io/random/quote', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  res.send(JSON.stringify(reply));
};

const handleGeek = async (req, res) => {
  let reply = await request(
    'https://geek-jokes.sameerkumar.website/api?format=json',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
  console.log(reply);
  res.send(JSON.stringify(reply));
};

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('dev'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .set('view engine', 'ejs')

  // endpoints

  .post('/dad-joke', handleDadJoke)
  .post('/tronald-joke', handleTronald)
  .post('/geek-joke', handleGeek)

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
