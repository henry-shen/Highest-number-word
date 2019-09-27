
exports.highestScoringWord = (word) => {
  arr = word.split(' ');
  let hs = 0;
  let hword;
  for (let i =0; i<arr.length; i++) {
    let sum = 0;
    for (let j =0; j<arr[i].length; j++) {
      sum = sum + arr[i].charCodeAt(j)-96;
      //console.log(sum);
    }
    if (sum > hs) {
      hs = sum;
      hword = arr[i];
    }
  }
  return hword;
}