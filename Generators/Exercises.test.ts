import { describe } from 'node:test';
import { getPositives, getUniques, capitalizeText } from "./Exercises";


describe('getPositives', () => {
  it('return positive numbers in an array', () => {
    const input: number[] = [-1, 0, 1, 2, -3];
    const expected: number[] = [0, 1, 2];
    expect(getPositives(input)).toEqual(expected);
  });
  it('should handle negative arrays', () => {
    const input: number[] = [-1, -2, -3, -4];
    const expected: number[] = [];
    expect(getPositives(input)).toEqual(expected);
  });
});


describe('getUniques', () => {
  it('return not repeated elements in two arrays', () => {
    const input1: number[] = [1, 2, 3, 4];
    const input2: number[] = [3, 4, 5, 6];
    const expected: number[] = [1, 2, 5, 6];
    expect(getUniques(input1, input2)).toEqual(expected);
  });
  it('should return empty arrays when all elements are repeated', () => {
    const input1: number[] = [1, 2, 3, 4];
    const input2: number[] = [4, 3, 2, 1];
    const expected: number[] = [];
    expect(getUniques(input1, input2)).toEqual(expected);
  });
});

describe('capitalizeText', () => {
  it('capitalize first letter of each word in a text', () => {
    const input: string = "this is an example";
    const expected: string = "This Is An Example";
    expect(capitalizeText(input)).toBe(expected);
  });
  it('should handle empty text', () => {
    const input: string = "";
    const expected: string = "";
    expect(capitalizeText(input)).toBe(expected);
  });
  it('should handle one word text', () => {
    const input: string = "hello";
    const expected: string = "Hello";
    expect(capitalizeText(input)).toBe(expected);
  });
});
