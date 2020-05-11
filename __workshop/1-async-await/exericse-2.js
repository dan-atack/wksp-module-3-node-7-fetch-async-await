// Exercise 2
// ----------
// 2.1: DoublesLater:

const doubleAfter2Seconds = num => {
    return new Promise((resolve, reject) =>{
        if (typeof num === 'number') {
            setTimeout(() => {
                resolve(num*2);
            }, 2000)
        } else {
            reject(`${num} is not a number, Dave.`)
        }
    })
}
doubleAfter2Seconds(2);

function addPromise(num){
    return new Promise(resolve => {
        doubleAfter2Seconds(10)
            .then((a) => {
                doubleAfter2Seconds(20)
                    .then((b) => {
                        doubleAfter2Seconds(30).then((c) => {
                            resolve(num + a + b + c);
                        })
                })
        })
    });
}

const doubleUp = async num => {
    let first = await doubleAfter2Seconds(num);
    let second = await doubleAfter2Seconds(first);
    let third = await doubleAfter2Seconds(second);
    console.log(first + second + third + num);
};

doubleUp(10);