/*
Create a function that receives an array of numbers and returns an array containing only the positive
numbers.
*/

function* filterPositives (numbers: number[]) : Generator<number> {
  for(const number of numbers) {
    if(number >= 0) {
      yield number;
    }
  }
}


export const getPositives = (numbers: number[]) => {
  return [...filterPositives(numbers)];
}

const positives = getPositives([-3,6,1,-4,-2,0]);
console.log(positives);

/*Create a function that will receive two arrays of numbers as arguments and return an array 
composed of all the numbers that are either in the first array or second array but not in both
*/
function* filterUniques(numbers1: number[], numbers2: number[]): Generator<number> {
  for(const number of numbers1) {
    if(!numbers2.includes(number)) {
      yield number;
    }
  }
  for(const number of numbers2) {
    if(!numbers1.includes(number)) {
      yield number;
    }
  }
}


export const getUniques = (numbers1: number[], numbers2: number[]) => {
  return [...filterUniques(numbers1, numbers2)];
}

const uniqueNumbers = getUniques([1,2,3,4,5], [4,5,6,7]);
const uniqueNumbers2 = getUniques([2,8,5], [5,2,8]);
console.log(uniqueNumbers);
console.log(uniqueNumbers2);

/*Create a function that will capitalize the first letter of each word in a text*/
function* capitalizeWords(text: string): Generator<string> {
  const words = text.split(' ');
  
  for(const word of words) {
    yield word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}

export const capitalizeText = (text: string) => {
  return [...capitalizeWords(text)].join(' ');
}

const text = "hello world";
const capitalizedText = capitalizeText(text);
console.log(capitalizedText);

/*Write unit tests for all method. => en archivo Exercises.test.ts*/
