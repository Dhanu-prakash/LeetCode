//Using hash map :3

function groupAnagrams(words){
let map = {};

    for(let i=0;i<words.length;i++){
        let anagrams = words[i].split("").sort().join("");

        if(!map[anagrams]){//Checks if anagram is exist in key or not
        map[anagrams] = [];
       }
    map[anagrams].push(words[i]);// if this in the if loop then it will insert that key only to the array 
    }

    let result = [];
    for(let key in map){
        result.push(map[key]);
    }
    return result;
}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));