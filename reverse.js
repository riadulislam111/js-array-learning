// const numbers = [34,304,5456,5456,45];
// const reversed = numbers.reverse();
// // console.log(numbers)


// const friends = ['abul', 'dabul', 'kabul', 'talul'];
// const afterReverse = [];

// for(const friend of friends){
//     console.log(friend);
//     afterReverse.unshift(friend);
//     console.log(afterReverse);
// }


const digits = [1,2,3,34,4,90,5,6,35,7,8];

// for(let i = 0; i < digits.length; i++){
//     console.log(i, digits[i])
// }



const reversedDigits = [];
// reverse for loop to get array elements
for(let i = digits.length -1; i >= 0; i--){
    console.log(i, digits[i]);
    reversedDigits.push(digits[i]);
}

console.log('this is reversed array:', reversedDigits)