function amountTocoins(amount, coins){
    let a = amount;
   var arr=[];
        for(let n=0; n<coins.length; n++){
            let t = parseInt(amount/coins[n], 10);
            if(t>0){
                while(t>0){
                  arr.push(coins[n]);
                  t--;
                  amount=amount-coins[n];
                }
                
            }
        }
        
        
        
    return arr;
    
    
}

console.log(amountTocoins(46, [25, 10, 5, 2, 1])); 