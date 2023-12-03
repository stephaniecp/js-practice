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

    //Consider each day as a sell day and compute the buy day that would have yielded the highest return. Compare all results.

    profitPossibilities = stockPrices.map((sellPrice, sellIndex) => {
        let maxProfit = 0;
        let maxProfitBuyIndex = -1;
        for (let i = 0; i < sellIndex; i++) {
            buyPrice = stockPrices[i];
            possibleProfit = sellPrice - buyPrice;
            if (possibleProfit > maxProfit) {
                maxProfit = possibleProfit;
                maxProfitBuyIndex = i;
            }
        }
        return {
            sellIndex: sellIndex,
            buyIndex: maxProfitBuyIndex,
            profit: maxProfit
        }
    })

    console.log(profitPossibilities)

    maxProfitValues = profitPossibilities.reduce((prevValue, sellDayProfitData) => {
        if (prevValue === null) return sellDayProfitData
        return (prevValue.profit > sellDayProfitData.profit) ? prevValue : sellDayProfitData
    })

    return [maxProfitValues.buyIndex, maxProfitValues.sellIndex]
}

// // Leave this so we can test your code:
// module.exports = maxProfitDays;

function callMaxProfitDays(valueArray) {
    console.log(`>> For values: ${valueArray}`)
    result = maxProfitDays(valueArray)
    console.log(`<< got results: ${result}`)
}

callMaxProfitDays([17, 11, 60, 25, 150, 75, 31, 120])