function calculateAverage(array) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
            count++;
        }
    }

    if (count === 0) {
        return 0; 
    } else {
        return sum / count;
    }
}


const array = [1, "hello", true, {name: "Carl"}, [2, 3, 4]];
const average = calculateAverage(array);
console.log("Середнє арифметичне числових елементів:", average);