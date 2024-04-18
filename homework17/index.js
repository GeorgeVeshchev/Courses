function example(a){
    return function(b){
        return a*b
    }
}

const result1 = example(4)(3) 
const result2 = example(6)(5)

console.log(result1);
console.log(result2);
