let x = [1,2,3, 5];

const over4 = num => {
    return num < 4;
};

console.log(x.every(num => num < 4));