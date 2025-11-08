function maxColBal(arr) {
  let max = 0;
  let result = [];
  arr.forEach((element) => {
    if (element.score > max) {
      max = element.score;
      result = [];
      result.push(element.name);
    } else if (element.score == max) {
      result.push(element.name);
    }
  });
  console.log(result)
  return result;
}


module.exports = maxColBal;
