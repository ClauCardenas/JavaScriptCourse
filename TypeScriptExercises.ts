class Operations {

  /*
  1. Remove the spaces found in a string without using inbuilt function
  */

  removeSpaces = (str: string) => {
    let result: string = '';

    for(let i: number = 0; i < str.length; i++) {
      if(str[i] !== ' ') {
        result += str[i];
      }
    }
    return result;
  }


  /* 
  2. Return the number of vowels in a string.
  */

  vowelsCounter = (str: string) => {
    let count: number = 0;
    for(let i: number = 0; i < str.length; i++) {
      if( str[i].toLowerCase() == 'a' ||
          str[i].toLowerCase() == 'e' ||
          str[i].toLowerCase() == 'i' ||
          str[i].toLowerCase() == 'o' ||
          str[i].toLowerCase() == 'u') {
        count++;
      }
    }
    return count;
  }


  /*
  3. Create a function that filters out negative numbers. Return all negatives inside an array
  */

  negativeFilter = (nums: number[]) => {
    let result: number[] = [];
    
    for(let i: number = 0; i < nums.length; i++) {
      if(nums[i] < 0) {
        result.push(nums[i]);
      }
    }
    return result;
  }
}

let op = new Operations();

console.log(op.removeSpaces('   hello world   '));
console.log(op.removeSpaces('C l a u d i a'));

console.log(op.vowelsCounter('hello world'));
console.log(op.vowelsCounter('Aqui hay muchas vocales'));
console.log(op.vowelsCounter('bcdfg'));

console.log(op.negativeFilter([-1,0,4,6,-3,5]));
console.log(op.negativeFilter([-10,-4,-5]));
console.log(op.negativeFilter([1,2,3,4]));
