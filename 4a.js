//Recursive factorial with expression function

let answer = function Recursivefactorial(n){
    //base case
    if(n === 0 || n === 1){
        return 1;
    //recursive case
    }else{
        return n * Recursivefactorial(n-1);
    }
}
let n = 4;
console.log("The factorial of " + n + " is " + answer(n));

//Iterative factorial with declaration function
function Iterativefactorial(n){
  let answer = 1;
  if (n === 0 || n === 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
}
let m = 4;
console.log("The factorial of " + m + " is " + Iterativefactorial(m));