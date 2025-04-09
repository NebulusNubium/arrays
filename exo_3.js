let fruits = ["apple", "banane", "cherry"]
let i = 2
while ( i < 0, i--) {
    fruits.unshift(fruits[2])
    fruits.pop()
    console.log(fruits)
}