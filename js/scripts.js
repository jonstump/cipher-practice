function capTwoLetters(str) {
  let output = str.charAt(0) + str.charAt(str.length - 1);
  output = output.toUpperCase();
  return output;
}
function reverseCapLetters(str) {
  let output = str.charAt(str.length - 1) + str.charAt(0);
  output = output.toUpperCase();
  return output;
}
function capAndReverse(str) {
  let output = capTwoLetters(str);
  output = reverseCapLetters(output);
  output = str + output;
  return output;
}
function middleChar(str) {
  let output = (str.length/2)
  output = str.charAt(output)
  output = output + str;
  return output;
}
function cipher(str) {
  let reversedCaps = reverseCapLetters(str);
  let output = middleChar(str) + reversedCaps;
  return output;
}

const sentence = prompt("Enter a sentence.")
console.log(sentence);
alert("Here are the two capitals: " + capTwoLetters(sentence));
alert("Here are the two capitals reveresed: " + reverseCapLetters(sentence));
alert(cipher(sentence));

$(document).ready(function() {
  $("#original").click(function() {
    alert("sentence");
  })
  $("#ciphered").click(function() {
    alert(`${cipher(sentence)}`);
  })
});