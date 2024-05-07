const findMinimum = arr => {

  // Your code here
  return arr.reduce((acc, CV) => {
    acc < CV ? acc = acc : acc = CV;
    return acc;
  }, arr[0]);

};

const runningSum = arr => {

  // Your code here
};

const evenNumOfChars = arr => {

  // Your code here
};

const smallerThanCurr = arr => {

  // Your code here

};

const twoSum = (arr, target) => {

  // Your code here
};

const secondLargest = arr => {

  // Your code here
};

const shuffle = (arr) => {

  // Your code here
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
