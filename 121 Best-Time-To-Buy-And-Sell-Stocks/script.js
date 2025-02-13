function stonks(prices){
    let currentmin = prices[0];
    let currentmax = 0;
    for(let i=0;i<prices.length;i++){
        currentmin = Math.min(prices[i],currentmin);
        currentmax = Math.max(currentmax,prices[i]-currentmin);
    }
        return currentmax;
    
};
console.log(stonks([7,1,5,3,9,4]));