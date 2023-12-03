// Maximize Stock Trading Profit
// Challenge URL: https://www.codecademy.com/code-challenges/code-challenge-maximize-stock-trading-profit-javascript

// Given the daily values of a stock, create a function called maxProfitDays() that, given a list of integers, will return the index value of the two elements that represent the day on which one should have bought a share and the day on which one should have sold a share based on the max profit.

// A list of integers will represent the stock price at the beginning or “opening bell” of each day for a week. You are required to buy and sell only once. You also must buy a stock before selling it.

// For example, given the list [17, 11, 60, 25, 150, 75, 31, 120], you can assume that index 0 represents day 0 and index 7 represents day 7. In this case, purchasing on day 1 and selling on day 4 would yield the most profit. If we were to call maxProfitDays([17, 11, 60, 25, 150, 75, 31, 120]), the function would return [1, 4].

//RUNNING INSTRUCTIONS
// Open terminal, navigate to: ...js-practice/Codecademy/codeChallenges
// node maxProfitDays.js
// Back up to parent with cd ../

function maxProfitDays(stockPrices) {

    console.log("TESTING - Function start")

    let slicedStockPrices = stockPrices.slice(1);

    let individualDayValue = 0;
    let highestPrice = Math.max(...stockPrices); // Expansion operator (...) turns an array into a list of parameter - Max.apply(stockPrices) would also work

    let highestPriceExcludingIndex0 = Math.max(...slicedStockPrices);
        console.log("TESTING - Highest value of stockPrices (excluding index 0) is: " + highestPriceExcludingIndex0)
    let lowestPrice = Math.min(...stockPrices);
        console.log("TESTING - Lowest value of stockPrices is: " + lowestPrice)

    console.log("TESTING - For maximum profit, someone should have purchased at " + lowestPrice + " and sold at " + highestPrice)
        
    for (i = 1; i < stockPrices.length; i++){
        let indexOfHighestPrice = 0;
        let indexOfLowestPrice = 0;
        if (i === lowestPrice){
            indexOfLowestPrice = i
            console.log("TESTING - Found index for lowest price at: " + indexOfLowestPrice)
        } else if (i === highestPrice){
            indexOfHighestPrice = i
            console.log("TESTING - Found index for highest price at: " + indexOfHighestPrice)
        }

        // individualDayValue = i;
        // console.log("Value of individualDayValue is: " + individualDayValue)
    }




}

maxProfitDays([170,11,60,25,150,75,31,120])

// // Leave this so we can test your code:
// module.exports = maxProfitDays;