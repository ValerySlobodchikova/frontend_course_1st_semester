function callCounter() {
    let currentC = 1;
    return function () {
        return currentC++;
    };
}

let counter = callCounter();

console.log();
console.log("1:", counter());
console.log("1:", counter());
console.log("1:", counter());

function sum(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    };
}

console.log();
console.log("2:", sum(1)(2)(3));
console.log("2:", sum(55)(22)(1));
console.log("2:", sum(4)(3)(2));

function generateRandomNumber() {
    return function () {

        let array = [];
        let num;

        function rand(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        if (array.length == 100) {
            return;
        }

        while (true) {
            num = rand(1, 100);
            if (!array.includes(num)) {
                array.push(num);
                return num;
            }
        }
    }
};

console.log();

let randomNumber = generateRandomNumber();

for (let i = 1; i <= 100; i++) {
    console.log("3:", randomNumber());
}

// фикс - замена var i  на let i
const arr = [10, 12, 15, 21];

for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}

