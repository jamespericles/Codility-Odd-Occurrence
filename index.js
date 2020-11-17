function solution(A) {
  let result = 0;
  for (let number of A) {
    // by using a XOR operator, we can loop over the array and identify which number doesn't have a match
    result ^= number;
  }
  return result;
}
