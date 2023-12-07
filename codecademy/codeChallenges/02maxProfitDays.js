// Verified - should review JG version
function maxProfitDays(stockPrices) {

    console.log("TESTING - Function start")

    let slicedStockPrices = stockPrices.slice(1);

    let highestPrice = Math.max(...stockPrices); // Expansion operator (...) turns an array into a list of parameter - Max.apply(stockPrices) would also work

    let highestPriceExcludingIndex0 = Math.max(...slicedStockPrices);
        console.log("TESTING - Highest value of stockPrices (excluding index 0) is: " + highestPriceExcludingIndex0)
    let lowestPrice = Math.min(...stockPrices);
        console.log("TESTING - Lowest value of stockPrices is: " + lowestPrice)

    console.log("TESTING - For maximum profit, someone should have purchased at " + lowestPrice + " and sold at " + highestPrice)
        
    for (i = 1; i < stockPrices.length; i++){
        let indexOfHighestPrice = 0;
        let indexOfLowestPrice = 0;
        if (stockPrices[i] === lowestPrice) {
            indexOfLowestPrice = i
            console.log("TESTING - Found index for lowest price at: " + indexOfLowestPrice)
        } if (stockPrices[i] === highestPrice){
            indexOfHighestPrice = i
            console.log("TESTING - Found index for highest price at: " + indexOfHighestPrice)
        }
        return [indexOfLowestPrice, indexOfHighestPrice];
    }
}

maxProfitDays([17,11,60,25,150,75,31,120])