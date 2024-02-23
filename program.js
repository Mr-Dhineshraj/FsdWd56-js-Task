// Do the below programs in anonymous function & IIFE
// Print odd numbers in an array*
// Convert all the strings to title caps in a string array*
// Sum of all numbers in an array*
// Return all the prime numbers in an array
// Return all the palindromes in an array*
// Return median of two sorted arrays of the same size.
// Remove duplicates from an array
// Rotate an array by k times

//=================================//
//Print odd numbers in an array
//1.anonymous function
var num = [1, 2, 3, 4, 5, 6, 7];
var odd = [];

var a = function (num) {
  for (var i = 0; i < num.length; i = i + 1) {
    if (num[i] % 2 !== 0) {
      odd.push(num[i]);
    }
  }
  return odd;
};
console.log(a(num));

//2.IIFE

var odd1 = [];
(function (num1) {
  for (var i = 0; i < num1.length; i = i + 1) {
    if (num[i] % 2 !== 0) {
      odd1.push(num1[i]);
    }
  }
  console.log(odd1);
})([1, 2, 3, 4, 5, 6, 7]);

/************************************************************************** */
//2.Convert all the strings to title caps in a string array
//anonymous
var str=function(arr){

    var res=arr.toString();
    var si=res.toLowerCase().split(" ");
    
    for(var i=0;i<si.length;i++){
        si[i]=si[i].charAt(0).toUpperCase()+si[i].slice(1);     
    }
    return si.join(" ");
}
console.log(str(["tHiS iS tHe jAvAscript"]));


//IIFE
(function(arr1){
var res1=arr1.toString();
var si1=res1.toLowerCase().split(" ");
for(var i=0;i<si1.length;i++){
    si1[i]=si1[i].charAt(0).toUpperCase()+si1[i].slice(1);

}
console.log(si1.join(" "));
})(["tHiS iS tHe jAvAscript"]);


/************************************************************************** */
// 3.Sum of all numbers in an array
//anonymous function
var n = [1, 2, 3, 4, 5];
var sum = 0;

var sumValue = function (n) {
  for (var i = 0; i < n.length; i++) {
    sum = sum + n[i];
  }
  return sum;
};

console.log(sumValue(n));

//IIFE
var sum = 0;
(function (n) {
  for (var i = 0; i < n.length; i++) {
    sum = sum + n[i];
  }
  console.log(sum);
})(n);


/***********************************************************************************/
//4.Return all the prime numbers in an array
//annonymous
var primeNumber = [];

var prime = function(s) {
  for (var i = 0; i < s.length; i++) {
    var count = 0;
    for (var j = 2; j <= s[i] / 2; j++) {
      if (s[i] % j === 0) {
        count++;
      }
    }
    if (count === 0 && s[i] > 1) {
      primeNumber.push(s[i]);
    }
  }
  return primeNumber;
};

console.log(prime([1, 2, 3, 4, 5, 6, 7, 8]));


//IIFE
var primeNumber1=[];
(function (s1) {
 
  for(var i=0;i<=s1.length;i++){
    var count1=0;
    for(var j=2;j<=s1[i]/2;j++){
      if(s1[i]%j===0){
        count1 ++;
      }
    }
    if(count1===0 && s1[i]>1){
      primeNumber1.push(s1[i]);
    }
    }
    console.log(primeNumber1);
    
  })([11,12,13,14,15,16,17,18]);
  

/***************************************************************************/

//5.Return all the palindromes in an array
//anonymous
var palindrome = function (p) {
  var result = [];
  for (var i = 0; i < p.length; i++) {
    var d = p[i].split("").reverse().join("");
    if (d === p[i]){
  result.push(p[i]);
    }
}

  return result;
};
console.log(palindrome(["mom", "dad"]));

//arrow


//IIFE
(function(p2){
    var result2=[];
for(var i=0;i<p2.length;i++){
    var d2=p2[i].split("").reverse().join("");
    if(d2===p2[i]){
        result2.push(p2[i]);
    }
}
console.log(result2);
})(["NooN","WoW"]);
/********************************************************************** */
//6.Return median of two sorted arrays of the same size.
//anonymous
const arr1=[1,2,5];
const arr2=[2,6,5,7];

var median=function(arr1,arr2){
   let arr=[...arr1,...arr2];
   arr.sort((a,b)=>a-b);
   let n=arr.length;

   if(n%2===0){
    return ((arr[n/2]+arr[n/2-1])/2);
   }else{
    return arr[Math.floor(n/2)];
   }
} 
console.log(median(arr1,arr2));


//IIFE
(function(arr1,arr2){
  let ar=[...arr1,...arr2];
  ar.sort((a,b)=>a-b);
  let len=ar.length;
  let round=Math.floor(len/2);
  console.log( len%2===0 ? ((ar[round]+ar[round-1])/2) : ar[round]);
})(arr1,arr2);

/********************************************************************************************************************* */
//7. Remove duplicates from an array


var duplicates = [];

var findDuplicates=function(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicates.push(arr[i]);
        
      }
    }
  }
  return duplicates;
}
console.log(findDuplicates([1, 2, 3, 4, 4, 5, 6, 5, 8, 6]));
/************************************************************************************* */
//IIFE
var duplicates1=[];
(function(arr1){
  for(i=0;i<arr1.length;i++){
    for(j=i+1;j<arr1.length;j++){
      if(arr1[i]===arr1[j]){

        duplicates1.push(arr1[i]);
      }
    }
  }
console.log(duplicates1);
})([2,2,4,5,5,6,7,7,8,9,9]);



/************************************************************************ */
//8.Rotate an array by k times
//IIFE
(function (rot,k){

  for(var i=0;i<k;i++){
    rot.push(rot[i])
  }
  for(var i=0;i<k;i++){
    rot.shift(rot[i])
  }
  console.log(rot)
})([1,2,3,4,5],3);

//anonymous
var rotate=function(r,k1){
  for(var i=0;i<k1;i++){
    r.push(r[i]);
  }
  for(var i=0;i<k1;i++){
    r.shift(r[i]);
  }
  return r;
}
console.log(rotate([1,2,3,4,5],3));
/************************************************************************** */
//Do the below programs in arrow functions.
//Print odd numbers in an array
//Convert all the strings to title caps in a string array
//Sum of all numbers in an array
//Return all the prime numbers in an array
//Return all the palindromes in an array
/****************************************************** */
//Print odd numbers in an array
//Arrow function
var num=[1,3,5,2,3,6,7,8]
var odd2 = [];
var b = (num) => {
  for (var i = 0; i < num.length; i = i + 1) {
    if (num[i] % 2 !== 0) {
      odd2.push(num[i]);
    }
  }
  return odd2;
};
console.log(b(num));
/************************************************************************** */
//Convert all the strings to title caps in a string array
//Arrow function
var str1=(arr2)=>{

  var res2=arr2.toString();
  var si2=res2.toLowerCase().split(" ");
  
  for(var i=0;i<si2.length;i++){
      si2[i]=si2[i].charAt(0).toUpperCase()+si2[i].slice(1);     
  }
  return si2.join(" ");
}
console.log(str1(["hI hEllO wOrlD"]));
/************************************************************************** */
//Sum of all numbers in an array
//Arrow Function
var n1=[2,3,4,7,5]
var sum = 0;
var c = (n1) => {
  for (var i = 0; i < n1.length; i++) {
    sum = sum + n1[i];
  }
  return sum;
};

console.log(c(n1));
/************************************************************************** */
//Return all the prime numbers in an array
var primeNumber2 = [];

var prime2 = (s2)=> {
  for (var i = 0; i < s2.length; i++) {
    var count = 0;
    for (var j = 2; j <= s2[i] / 2; j++) {
      if (s2[i] % j === 0) {
        count++;
      }
    }
    if (count === 0 && s2[i] > 1) {
      primeNumber2.push(s2[i]);
    }
  }
  return primeNumber2;
};

console.log(prime2([21, 22, 23, 24,25, 26, 27, 28,29,30]));



/************************************************************************** */
//Return all the palindromes in an array
var arrowPalidrome=(p1)=>{

  var result1=[];
  for(var i=0;i<p1.length;i++){
      var d1=p1[i].split("").reverse().join("");
      if(d1===p1[i]){
      result1.push(p1[i]);
  }
}
  return result1;
}
console.log(arrowPalidrome(["malayalam", "mam"]));
/************************************************************************** */