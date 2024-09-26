function hasTargetSum(array, target) {
  let answer = false
  array.forEach(num => {
    let i = array.indexOf(num) + 1
    while (i < array.length && !answer) {
      if (num + array[i] === target){
        console.log("found it!", array[i])
        answer = true
      }
      i +=1
      console.log("try next i=", i)
    }
    if (answer){
        return true
    }
    console.log("none for num =", num)
  })
  console.log(answer)
  return answer
}

// function hasTargetSum(array, target) {
//   array.forEach(num => {
//     let i = array.indexOf(num) + 1
//     while (i < array.length) {
//       if (num + array[i] === target){
//         console.log("found it!", array[i])
//         return true
//       }

//       i +=1
//       console.log("try next i=", i)
//     }
//     console.log("none for num =", num)
//   })
//   console.log("none")
//   return false
// }

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
