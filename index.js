
//Print the numbers between the given range using recursion.
// function x(a,b){
//     if(a<b){
//         console.log(a);
//         return x(a+1,b);
//     }
//     return a;
// }
// console.log(x(11,20));

//Given a number n,print numbers from 1 to n using recursion.
// function x(n1,n2) {
// if(n1<=n2){
//     console.log(n1);
//     return x(n1+1,n2);
// }
// }
// x(11,20);

//Print all the numbers in descending order in the given range using recursion.
//  function x(a,b) {
//     if(a>=b){
// console.log(a);
// return x(a-1,b);
//     }
//  }
//  x(20,10);


 //Print factorial of a number using recursion.
 function facto(num,fact){
    if(num>0){
        fact *= num;
        return facto(num-1,fact);
    }
    return fact;
 }
 console.log(facto(5,1))

//Print all the even numbers in the given range using recursion.
// function 