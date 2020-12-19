function findLongestWord(str) {
  var strSplit = str.split(' ');
  var length = 0;
  var longestWord;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > length){
	length = strSplit[i].length;
	longestWord = strSplit[i];
	
     }
  }
  return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));