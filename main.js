/*
  @param ${number} int
  Calculates the square of each digit in the passed number.
*/

const sqDigits = (int) => {
  if(isNaN(int)) return console.log('You need to pass a number.')

  let arr = int.toString().split('')
  let index = 0
  let result = "0"

  for(const element of arr) {
    result += Math.pow(element, 2)
  }

  return console.log(parseInt(result.slice(1)))
}

// Example of usage: sqDigits(23)
// Returns: 49
