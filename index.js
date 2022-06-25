//1.Print factorial of a number using recursion.
//  function facto(num,fact){
//     if(num>0){
//         fact *= num;
//         return facto(num-1,fact);
//     }
//     return fact;
//  }
//  console.log(facto(5,1))

//2.Given a number n, print numbers from 1 to n using recursion.
// function x(a,n){
//     if(a<n){
//         console.log(a);
//         return x(a+1,n);
//     }
//     return a;
// }
// console.log(x(1,20));

//3.Given a number n,print numbers from n to 1 using recursion.
// function x(n1,n2) {
// if(n1<=n2){
//     console.log(n2);
//     return x(n1,n2-1);
// }
// }
// x(1,20);

//4.Print ‘n’ numbers of Fibonacci series using recursion.
// function fibo(a, b, counter) {
//   if (counter <= 12) {
//     let c = a + b;
//     console.log(a);
//     return fibo(b, c, counter + 1);
//   }
// }
// fibo(0, 1, 1);

//6.Write a Javascript program to count the number of digits a given number has using recursion.
// function numberD(number1,count){
//     if(number1>0){
//         number1 = parseInt(number1/10);
//         count++;
//         return numberD(number1,count);
//     }
//     return count
// }
// console.log(numberD(5456765,0))

//9.Given a number n, print all the odd numbers from 1 to n using recursion.
// function num(a, b) {
//   if (a <= b) {
//       console.log(a);
//       return num(a + 2, b);
//   }
// }
// num(1, 10);

//10.Given a number n, print all the even numbers from n to 1 using recursion.
// function number(n, num2) {
//   if (n <= num2) {
//     console.log(num2);
//     return number(n, num2 - 2);
//   }
//   return num2;
// }
// number(1, 10);

//11.Write a javascript program to check whether the given string is palindrome or not using recursion.

//12.Given a number n, find 2^n using recursion.
function num(a, n) {
  if(n==0){
    return 1;
  }
  else{
    return (a* num(a,n-1));
  }
}
console.log(num(2, 4));
