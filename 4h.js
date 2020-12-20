function findSecondMaxMin(arr) {
  let res =[];
  var max = Math.max.apply(Math, arr);
  var min = Math.min.apply(Math, arr);
  
  for (var i=arr.length; i--;) {
    if (arr.length>2 && arr[i] == max) {
      arr.splice(i, 1);
      break;
    }
  }
  for (var i=arr.length; i--;) {
    if (arr.length>2 && arr[i] == min) {
      arr.splice(i, 1);
      break;
    }
  }
  
  max = Math.max.apply(Math, arr);
  min = Math.min.apply(Math, arr);
  res.push(max);
  res.push(min);
  return res;
}
console.log(findSecondMaxMin([2,45,21,11,4,7,3,9,6,33]));