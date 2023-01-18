let numArr = [1, 2, 2, 1];

function Palindrome(head) {
  return head == head.reverse();
}

Palindrome(numArr);