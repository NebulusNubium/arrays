function wordReverse(fruits) {
    let reversed = '';
    for (let i = fruits.length - 1; i >= 0; i--) {
        reversed += fruits[i];
        if (i !== 0) {
            reversed += ', ';
        }
    }
    return reversed;
}

let fruits = ["apple", "banane", "cherry"];
console.log(wordReverse(fruits)); 