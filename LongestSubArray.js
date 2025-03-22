function longestSub(str){
 let hash = {};
 let left = 0, longsubarr = 0;

 for(let right = 0;right<str.length;right++){

     if(hash[str[right]] !== undefined){ //seen
     left = Math.max(left,hash[str[right]]+1);
     }

     else{
         hash[str[right]] = right;//stores value and index as key
         longsubarr = Math.max(longsubarr,right-left+1);
     }


 }
 return longsubarr;
}

console.log(longestSub('abcabcbb'));
