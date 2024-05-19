function uniqueValues(arr) {
  const uniqueSet = new Set(arr);
  const uniqueArray = [...uniqueSet];
  return uniqueArray;
}


const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = uniqueValues(numbers);
console.log(uniqueNumbers); 
