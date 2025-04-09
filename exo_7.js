function reverseWords(sentence) {
    let words = sentence.split(' ');
    let reversed = '';

    for (let i = words.length - 1; i >= 0; i--) {
        reversed += words[i];
        if (i !== 0) {
            reversed += ' ';
        }
    }

    return reversed;
}

let sentence = "I love programming";
console.log(reverseWords(sentence)); 
