const findMinimum = arr => {

  // Your code here
  return arr.reduce((acc, CV) => {
    acc < CV ? acc = acc : acc = CV;
    return acc;
  }, arr[0]);

};
/*
Time Complexity: O(n).
Space Complexity: O(1).
*/
const runningSum = arr => {

  // Your code here
  let sumArray = [];
  //let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j <= i; j++) {
      sum += arr[j];
    }
    sumArray.push(sum);
    //sum = 0;
  }
  return sumArray;
};

/*
Time Complexity: O(n2).
Space Complexity: O(n).
*/

const evenNumOfChars = arr => {

  // Your code here
  let evenNumberOfChar = 0;

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (char.length % 2 === 0) {
      evenNumberOfChar++;
    };
  }
  return evenNumberOfChar;
};
//-----Local Test Area----------------------
console.log(evenNumOfChars(["ab", "abcb"]));//2
/*
Time Complexity: O(n).
Space Complexity: O(1).
*/

const smallerThanCurr = arr => {

  // Your code here
  let resArray = [];

  for (let i = 0; i < arr.length; i++){

    let smallerThanCurrCounter = 0;
    let currentEle = arr[i];//i = 0, 8.

    for (let j = 0; j < arr.length; j++){
      if (arr[j] < currentEle) {//iter1: j = 0, 8; iter2: j= 1, 1
        smallerThanCurrCounter++;
      };
    }

    resArray.push(smallerThanCurrCounter);
  }

  return resArray;
};
//---------Local Test Area------------
console.log(smallerThanCurr([8, 1, 2, 2, 3]));//[4, 0, 1, 1, 3].
/*
Time Complexity: O(n2).
Space Complexity: O(n).
*/
const twoSum = (arr, target) => {

  // Your code here
  for (let i = 0; i < arr.length; i++){

    let firstEle = arr[i];//4

    for (let j = i + 1; j < arr.length; j++){

      if (firstEle + arr[j] === target) {//Iter1: 4 + 2 = 6 != 10 False => false.
        return true;                    //Iter2: 4 + 3 = 7 != 10 False => false.
                                        //Iter3: 4 + 6 = 10 = 10 True => true.
      };

    };

  };
  return false;
};
//---------Local Test Area------------
console.log(twoSum([4, 2, 3, 6, 9], 10));//true.
/*
Time Complexity: O(n2).
Space Complexity: O(1).
*/
const secondLargest = arr => {

  // Your code here
  let largest = arr[0];
  let secondLargest;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (!secondLargest || arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
};

//---------Local Test Area------------
console.log(secondLargest([4, 2, 3, 6, 8]));//6.
/*
Time Complexity: O(n).
Space Complexity: O(1).
*/
const shuffle = (arr) => {

  // Your code here
  let shuffledArray = arr.slice(); // time complexity: O(n); space complexity: O(n)
  let min;
  let max = arr.length - 1;

  for (let i = 0; i < shuffledArray.length - 1; i++) {
    min = i;
    const randomIdx = Math.floor(Math.random() * (max - min + 1) + min);

    let save = shuffledArray[i];
    shuffledArray[i] = shuffledArray[randomIdx];
    shuffledArray[randomIdx] = save;
  }

  return shuffledArray;
};
//---------Local Test Area------------
console.log(shuffle([4, 2, 3, 6, 9]));//.
/*
Time Complexity: O().
Space Complexity: O().
*/

module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
