function example() {
    let qweer = 0;

    return function(number){
        qweer += number;
        return qweer;
    }
}

const foo = example();

const result1 = foo(4);
console.log(result1);