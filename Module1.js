/* 
Write a simple function (less than 160 characters) that returns a boolean indicating whether or not 
a string is a palindrome.
*/
const isPalindrome = str => {
  const str1 = str.replace(/\s/g, '').toLowerCase();
  return str1 == str1.split('').reverse().join('');
}

console.log(isPalindrome('121'));
console.log(isPalindrome('anilina'));
console.log(isPalindrome('otro contenido'));
console.log(isPalindrome('Anita lava la tina'));


/*
Implement a function named factorial that has one parameter: an integer, . It must return the value
of (i.e., factorial).
*/

const factorial = num => {
  if (num == 0 || num == 1) {
    return 1;
  }
  
  return num * factorial(num - 1);
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(46));


/*
Write a getSecondLargest function, It has one parameter: an array, nums, of n numbers. 
The function must find and return the second largest number in nums.
*/

const getSecondLargest = nums => {
  let max = Number.MIN_SAFE_INTEGER;
  let secondMax = Number.MIN_SAFE_INTEGER;
  
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      secondMax = max;
      max = nums[i];
    } else if (nums[i] > secondMax && nums[i] != max) {
      secondMax = nums[i];
    }
  }
    
  if (secondMax == Number.MIN_SAFE_INTEGER) {
    return null;
  }

  return secondMax;
}

console.log(getSecondLargest([1,5,3,8,2,8]));
console.log(getSecondLargest([1,5,3,8,2]));
console.log(getSecondLargest([4,3,2,1]));
console.log(getSecondLargest([0,-1,-4,-3]));
