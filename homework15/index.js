const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, index) {
    array.splice(index, 1); 
    return array; 
}

const index = 3; 
const newArray = removeElement(array.slice(), index); 
console.log(newArray); 