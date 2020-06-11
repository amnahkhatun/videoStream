// const arr = [2, 7, 11, 15];
// let index = [];
// var twoSum = function(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == target) {
//         index.push(i);
//         index.push(j);
//         break;
//       }
//     }
//   }
//   // console.log(index);
// };

// // twoSum(arr, 9);

// function twoSum2(arr, target) {
//   var i = 0;
//   var j = arr.length - 1;
//   while (i != j) {
//     if (arr[i] + arr[j] == target) {
//       // console.log(i, j);
//       break;
//     } else if (arr[i] + arr[j] > target) {
//       j--;
//     } else if (arr[i] + arr[j] < target) {
//       i++;
//     }
//   }
// }

// // twoSum2(arr, 9);

// //hashmap

// var twoSum3 = function(nums, target) {
//   if (nums.length === 0) return [];

//   const remainders = {};

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     // console.log(num, "num");
//     if (num in remainders) {
//       console.log([remainders[num], i]);
//     }
//     remainders[target - num] = i;
//   }
//   return [];
// };
// // twoSum3(arr, 9);

// // max sub array

// const arrMax = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let currentSum = arrMax[1];
// let largestSum = arrMax[1];

// const maxSubarray = arrMax => {
//   for (let i = 1; i < arrMax.length; i++) {
//     if (arrMax[i] + currentSum < arrMax[i]) {
//       currentSum = arrMax[i];
//     } else {
//       currentSum = currentSum + arrMax[i];
//     }
//     if (currentSum > largestSum) {
//       largestSum = currentSum;
//     }
//   }
//   console.log(largestSum);
// };

// // maxSubarray(arrMax);

// //moveZeroes
// // const nums = ;
// function moveZeroes(nums) {
//   var count = 0;
//   for (var i = 0; i <= nums.length - 1; ) {
//     if (count === nums.length) {
//       return nums;
//     } else if (nums[i] === 0) {
//       nums.splice(i, 1);
//       nums.push(0);
//     } else {
//       i++;
//     }
//     count++;
//   }
//   console.log(nums);
//   return nums;
// }
// var moveZeroes1 = function(nums) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == 0) {
//       count++;
//     } else {
//       swap(i, count, nums);
//     }
//   }
// };

// function swap(i, count, nums) {
//   let temp = 0;
//   temp = nums[i];
//   nums[i] = nums[i - count];
//   nums[i - count] = temp;
// }
// moveZeroes1([0, 1, 0, 3, 12]);

var containsDuplicate = function(nums) {
  let res = false;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        res = true;
        return res;
      }
    }
  }
  return res;
};
// let r = containsDuplicate([1, 2, 3, 9]);
// console.log(r);

// using set
var containsDuplicate1 = function(nums) {
  let res = false;
  var set1 = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set1.has(nums[i])) {
      res = true;
      return res;
    } else {
      set1.add(nums[i]);
    }
  }
  return res;
};
// let r = containsDuplicate1([1, 2, 3, 2]);
// console.log(r);

var rotate = function(nums, k) {
  let temp = nums[0];
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    j = i + k;
    if (j < nums.length) {
      te;
      arr[j] = arr[i];
    } else {
      j;
    }
  }
  return nums;
};

// let r = rotate([1, 2, 3, 4, 5, 6, 7], 3);
let r = rotate([-1, -100, 3, 99], 2);
console.log(r);
