const example = [1,2,3,4,5,6,7,8,9,10]

let newArray = example.filter(function(number) {
    return number % 2 === 0 
});

console.log(newArray);