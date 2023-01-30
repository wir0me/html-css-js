const highAndLow = numbers => {
    
  let arr = numbers.split(" ")
  let sorted = arr.reverse()
  
  return `${sorted[0]}, ${sorted[-1]}`
};

console.log(highAndLow("1 2 3 4 5"));