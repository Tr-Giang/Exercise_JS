Array.prototype.some2 = function (callback) {
    if (typeof callback === 'function') {
        let output = [];
        for (const id in this) {
            if (this.hasOwnProperty(id)) {
                output.push(callback(this[id], id, this));
            }
        }
        for (const value of output) {
            if (value === false) return false;
            else return true;
        }
    }
};


let arr = [1, 2, 3, 4, 5, 6, 6, 7, 9];

let result = arr.some((value, id, arr) => {
    console.log(value, id, arr);
    return value < 0;
});

console.log(result);


let result2 = arr.some2((value, id, arr) => {
    console.log(value, id, arr);
    return value > 0;
});

console.log(result2);
