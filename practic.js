// // const items = ['apple', 'banana', 'guyava',];
// // console.log(items)
// // console.log(items.length)
// // console.log(items[0]);
// // console.log(items[2]);
// // // console.log(items[1]);
// // items[1] = 'gopu';
// // console.log(items)

// // items.push('gopal');
// // console.log(items)

// // const removeValue = items.pop();

// // console.log(items)
// // console.log(removeValue)

// // items.unshift('first');
// // console.log(items)

// // const remove = items.shift();
// // console.log(items);
// // console.log(remove)

// // console.log(items.includes('apple'))

// // console.log(items.indexOf('apple'))

// // for(let i = 0; i < items.length; i++){
// //     console.log(items[i])
// // }

// // let i = 0;
// // while(i < items.length){
// //     console.log(items[i]);
// //     i++;
// // }

// const players = ['rofik', 'sofik', 'rakib', 'sony', 'abul', 'sing'];

// // const combine = items.concat(players);
// // console.log(combine)

// // const portion = players.slice(1, 2);
// // console.log(portion)

// // const singleSentence = players.join(', ');
// // console.log(singleSentence)

// // const hames = [3,34,45,54,45,3];
// // const lams = 4;

// // console.log(Array.isArray(hames));
// // console.log(Array.isArray(lams))


// // const reversed = players.reverse();
// // console.log(reversed)

// // const sorted = players.sort();
// // console.log(sorted)



// const numbers = [10, 2, 30, 5, 3,5, 1,34,45,45,45,45];
// // const sortedNumbers = numbers.sort((a, b) => a - b);
// // console.log(sortedNumbers)


// // for(let i = 0; i < numbers.length; i++){
// //     if(numbers[i] > 10){
// //         console.log(numbers[i])
// //     }
// // }

// // let total = 0;
// // for (let i = 0 ; i < numbers.length; i++){
// //     total += numbers[i];
// // }
// // console.log(total)

// // const unique = [];

// // for(let i = 0; i < numbers.length; i++){
// //     if(!unique.includes(numbers[i])){
// //         unique.push(numbers[i]);
// //     }
// // }

// // console.log(unique)

// // const unique = [];

// // for(let i = 0; i < numbers.length; i++) {
// //     if(!unique.includes(numbers[i])){
// //         unique.push(numbers[i])
// //     }
// // }
// // console.log(unique);



// const mixedArray = [2,3,4, 'mango', 34, 'orange', 'malta', 90];

// const stringArray = [];
// const numbersArray = [];

// for(let i = 0; i < mixedArray.length; i++){
//     if((typeof mixedArray[i]) === "number"){
//         numbersArray.push(mixedArray[i])
        
//     }
//     else{
//         stringArray.push(mixedArray[i])
//     }
// }
// console.log('This is number array:', numbersArray);
// console.log('This is string array:', stringArray)



// const numbers = [3, 4, 6, 7,8,12, 34, 56];

// let largestValue =  numbers[0];
// let smallestValue =  numbers[0];

// for(let i = 0; i < numbers.length; i++) {
    
//     if(numbers[i] > largestValue){
//     largestValue = numbers[i]
//     }
    
//     if(numbers[i] < smallestValue){
//         smallestValue = numbers[i];
//     }

// }

// console.log('large:', largestValue);
// console.log('small:',smallestValue)


// const nestedArray = [1, [2, 3], [4, [5, 6]]];

// const flatArray = [];

// function flatten(array) {
//     for (let i = 0; i < array.length; i++){
//         if(Array.isArray(array[i])){
//             flatten(array[i]);
//         }
//         else{
//             flatArray.push(array[i]);
//         }
//     }
// }

// flatten(nestedArray);
// console.log(flatArray);


// const numbers = [1, 2, 3, 4, 5];

// let firstItem = numbers[0]
// numbers.shift();
// numbers.push(firstItem)
// console.log(numbers)
// console.log(firstItem)

// let choice;

// do {
//   choice = prompt(
//     "1. View Profile\n2. Settings\n3. Exit\nEnter your choice:"
//   );

//   console.log("You selected:", choice);

// } while (choice !== "3");

// console.log("Program exited.");


