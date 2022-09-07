let string = "rotator";
const isPalindrome = (str) => {
  let condition = "";

  for (let i = str.length - 1; i >= 0; i--) {
    condition += str[i];
  }

  if (condition === str) {
    console.log(condition + ": is Palindrome word");
  } else {
    console.log(condition + ": isn't Palindrome word");
  }
};

isPalindrome(string);
