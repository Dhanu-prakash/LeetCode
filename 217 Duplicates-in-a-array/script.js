function duplicates (nums){
	let seen = new Set();
	for(num of nums){ //Iteration every of "every num" in the array
		if(seen.has(num)){
			return true;
		}
		else{
			seen.add(num);// Adds num(array) to the seen if it doesn't not have the value already
		}
	
	}
	return false;// it returns false if nothing happened in the loop ;3 even after iteration 
}
console.log(duplicates([1,4,5,2,1]))