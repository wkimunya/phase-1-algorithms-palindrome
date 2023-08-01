function reverse(word){
// 'abc, => 'cba'
//const wordArray = word.split('');
//const reverseWordArray = wordArray.reverse();
//const reverseWord = reverseWordArray.join('');
//return reverseWord;
return word.split('').reverse('').join('');
}

function isPalindrome(word) {
const reverseWord = reverse(word)

return word === reverseWord

}

/* 
  Add your pseudocode here
  reverse the input string

  if the input is the same as the reversed input
      return true
  else,
      return false 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
