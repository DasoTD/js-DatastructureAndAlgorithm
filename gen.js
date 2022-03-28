function add(num1, num2){
    return num1 + num2;
}

console.log(add(4,6));

// function dd(n) {
//   return  n * (n + 1) / 2
  
// }
// dd(3);

// function sumRange(n) {
//   if(n ===1) return 1;
//   return n + sumRange(n-1);
// }

// sumRange(3);

// function addUp(num){
//   let total= 0;
//   for(let i = 1; i<= num; i ++){
//     total +=i;

//   }
//       return total ;
// }
// addUp(3);


// function factorial(num){
//   let total =1;
//   for(let i = num; i >1; i --){
//     total *=i;
//   }
//   return total;
// }


// function factorial(num){
//   if(num === 1) return 1;
//   return num * factorial(num - 1);
// }
// factorial(6)

// function collectOddvalue(arr){
//   let newArr = [];
//   if(arr.length === 0){
//     return newArr;
//   }
//   if(arr[0] % 2 !== 0){
//     newArr.push(arr[0]);
//   }
//     newArr = newArr.concat(collectOddvalue(arr.slice(1)));
//     return newArr;
//   }

// collectOddvalue([2,3,4,5,6,7,8,9]);

// function factorial(num){
//    let total = 1;
//    for(let i = num; i>1; i++){
//        total *=i;
//    }
//    return total;
// }

// factorial(4);


// function productOfArray(arr){
//     let result = 1;
//     for(key in arr){
//         result = result * key;
//     }
//     return result;
// }

// productOfArray([1,2,2,3,4,6]);

function pseudocode(arr, value) {
    return arr.indexOf(value);
  }
  
  pseudocode([1,2,3,4,5], 4);

  function addup(n){
    let total = 0;
    for(let i =1; i<= n; i++){
        total += i;
    }
    return total;
}
console.log(addup(6))

function add(n){
    return n * (n + 1) / 2;
}

console.log(add(6))