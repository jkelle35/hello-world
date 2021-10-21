//A higher order funciton is a function that return a function or takes a function as arguments.

//return a funciton

function greaterThan(a) {
    return function(b) {
        return b > a;
    }
}

const greaterThan10 = greaterThan(10);

//greaterThan10 = function(b) {return b > 10}

console.log(greaterThan10(5));

const nums = [3, 10, 7, 25, -5, 8];

nums.sort(comp);

function comp(a, b) {
    return b-a;
}

console.log(nums);