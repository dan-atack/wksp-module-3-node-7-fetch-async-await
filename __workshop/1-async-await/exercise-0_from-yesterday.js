// Example
// ------------
// Write a function testNum that takes a number as an argument and returns
// a Promise that tests if the value is less than or greater than the value 10.

const compareToTen = (num) => {
    myPromise = new Promise((resolve, reject) => {
        if(num > 10) {
            resolve(num + " is greater than 10, success!")
        } else {
            reject(num + " is less than 10, error!")
        }
    })
    return myPromise;
}

const myFunc = async (num) => {
    try {
        let outcome = await compareToTen(num);
        console.log(outcome);
    }
    catch(err) {
        console.log(err);
    }
};

myFunc(15);
myFunc(8);

    
// Exercise 0.1
// ------------
// Write two functions that use Promises that you can chain!
// The first function, makeAllCaps(), will take in an array of words and capitalize them,
// and then the second function, sortWords(), will sort the words in alphabetical order.
// If the array contains anything but strings, it should throw an error.

const makeAllCaps = (ray) => {
    let x = new Promise((resolve, reject) => {

        if (ray.every(word => (typeof word === 'string'))) {
                resolve(ray.map(word => word.toUpperCase()));
            } else {
                reject('Error: Not all items in the array are strings!')
            }
    });
    return x;
}

const sortWords = (ray) => {
    let y = new Promise((resolve, reject) => {

        if (ray.every(word => typeof word === 'string')) {
                resolve(ray.sort());
        } else {
            reject('Error: Something went wrong with sorting words.') 
        }
    })
    return y;
}

const textTransform = async (ray) => {
    try {
        let capitalized = await makeAllCaps(ray);
        capitalized = await sortWords(capitalized);
        console.log(capitalized);

    }
    catch(err) {
        console.log(err);
    }
}

textTransform(['cucumber', 'tomatos', 'avocado']);
textTransform(['cucumber', 44, true]);
