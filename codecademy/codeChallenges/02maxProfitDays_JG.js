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

    //Consider each day as a sell day and find the previous buy day that would have yielded the highest return. Compare all results.
    profitPossibilities = stockPrices.map((sellPrice, sellDayIndex) => {
        let maxProfitDollars = -9999; //Just a starting value that indicates a real value hasn't been set
        let maxProfitBuyDayIndex = -1; //Just a starting value that indicates a real value hasn't been set
        
        for (let i = 0; i < sellDayIndex; i++) { //Let's consider each of the preceding days as the lowest buy price
            buyPrice = stockPrices[i]; //Get the buyPrice for day i
            possibleProfitDollars = sellPrice - buyPrice; //Calculate the possible profit if we had purchased on day i
            if (possibleProfitDollars > maxProfitDollars) { //Is the profit greater than the previously calculated max profit?
                //If the profit for this day is better, record it
                maxProfitDollars = possibleProfitDollars;
                maxProfitBuyDayIndex = i;
            }
        }

        return { //Create an object that returns the data we need to know about this 
            sellDayIndex: sellDayIndex,
            buyDayIndex: maxProfitBuyDayIndex,
            profit: maxProfitDollars
        }
    })

    console.log(profitPossibilities)

    //Now that we have all of the best buy days for each sell days, lets find the data produces the most profit
    maxProfitValues = profitPossibilities.reduce((prevValue, sellDayProfitData) => {
        if (prevValue === null) return sellDayProfitData //prevValue will be null on the first call
        return (prevValue.profit > sellDayProfitData.profit) ? prevValue : sellDayProfitData //Always return the data object with the most profit
    })

    return [maxProfitValues.buyDayIndex, maxProfitValues.sellDayIndex]
}

// // Leave this so we can test your code:
// module.exports = maxProfitDays;

function callMaxProfitDays(valueArray) {
    console.log(`>> For values: ${valueArray}`)
    result = maxProfitDays(valueArray)
    console.log(`<< got results: ${result}`)
}

callMaxProfitDays([17, 11, 60, 25, 150, 75, 31, 120])
callMaxProfitDays([10, 10, 10, 10, 10, 10, 9, 10])