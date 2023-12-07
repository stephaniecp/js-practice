# December 2023 (JavaScript) Coding Challenges details

## 01 - Calculate the Mean and Mode 

Create a statsFinder() function that takes in a list of numbers and returns a list containing the mean and mode, in that order. As a reminder, the mean is the average of the values and the mode is the most occurring value. If there are multiple modes, return the mode that occurs first. Make sure that you write your functions and find these answers from scratch – don’t use imported tools!
For example, statsFinder([500, 400, 400, 375, 300, 350, 325, 300]) should return [368.75, 400].

## 02 - Maximize Stock Trading Profit 

Given the daily values of a stock, create a function called maxProfitDays() that, given a list of integers, will return the index value of the two elements that represent the day on which one should have bought a share and the day on which one should have sold a share based on the max profit.
A list of integers will represent the stock price at the beginning or “opening bell” of each day for a week. You are required to buy and sell only once. You also must buy a stock before selling it.
For example, given the list [17, 11, 60, 25, 150, 75, 31, 120], you can assume that index 0 represents day 0 and index 7 represents day 7. In this case, purchasing on day 1 and selling on day 4 would yield the most profit. If we were to call maxProfitDays([17, 11, 60, 25, 150, 75, 31, 120]), the function would return [1, 4].

## 03 - Prime Number Finder 

Create a primeFinder() function that takes in a number, n, and returns all the prime numbers from 1 to n (inclusive). As a reminder, a prime number is a number that is only divisible by 1 and itself.
For example, primeFinder(11) should return [2, 3, 5, 7, 11].
Variations of this challenge have been reported to have been asked at interviews with Facebook. If you’ve covered the material in Pass the Technical Interview with JavaScript or an equivalent, you should be able to solve this challenge. If you have trouble, try refreshing your knowledge there first.


## 04 -Balanced Binary Search Tree 

Given a sorted array of numbers a, write a function balancedBst(a) to create a balanced binary search tree. A balanced Binary Search Tree has no more than one level of depth difference between the right and left sides of the tree.
Each value in the array a should correspond to a node value. The return value of balancedBst() will be the root node of the balanced tree. An empty array passed to balancedBst() should return null.
For example, given an array a = [1,2,3,4,5,6,7,8], you want to create a balanced tree that may resemble the following:
       5
     /   \
    3     7
   / \   / \
  2   4 6   8
 /
1
The above figure represents a balanced tree because there is at most 1 level of difference between the depths of each side of the tree.
For this challenge you are given the class TreeNode with the members:
* value: the node value
* left: the left child node; defaults to null
* right: the right child node; defaults to null
The print() function is also implemented in the class TreeNode, so at any time you can print the root node to see a basic representation of the tree.

## 05 - Semi-Prime Numbers (semiPrimeCount.js)

Create a semiPrimeCount() function that takes in an integer, n, and returns the count of semi-prime numbers from 1 to n, non-inclusive. A semi-prime number is a number that is the product of two prime numbers. Note that the numbers don’t have to be distinct, meaning that 4 is a semi-prime number since it is 2 * 2.
For example, semiPrimeCount() called on 10 should return 3 since there are 3 semi-prime numbers from 1-10 (4, 6, 9). Remember, it’s non-inclusive!
Variations of this challenge were reported to have been asked at interviews with Google. If you’ve covered the material in Pass the Technical Interview with JavaScript or an equivalent, you should be able to solve this challenge. If you have trouble, try refreshing your knowledge with there first.

## 06 - Flatten an Array 

Write a function, flattenArray(), that takes in a 2-dimensional array, flattens it into a 1-dimensional array, and returns it. You can assume that you will only be given one or two-dimensional arrays
For example, flattenArray([1, 2, [3, 4, 5], 6, [7, 8], 9]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

## 07 - Sum of Prime Factors 

Create a sumOfPrimeFactors() function that takes in an integer n and returns the sum of all of its prime factors. As a reminder, a prime number is a number whose only factors are one and itself. Therefore, a prime factor is a factor of a given number that itself is a prime number.
For example, sumOfPrimeFactors(91) should return 20 since its prime factors are 13 and 7.


## 08 - Unique Characters in a String 

Write a uniqueCharacters() function that determines if any given string has all unique characters (i.e. no character in the string is duplicated). If the string has all unique characters, the function should return true. If the string does not have all unique characters, return false.
For example, uniqueCharacters("apple") should return false.


## 09 - Comparative Weights 

Suppose you had n basketballs, all of them seemingly identical. You are given a balance scale and told that one of the n balls is slightly heavier than the others. What’s the fewest number of times you have to use the scale to find the outlier? You can assume that the scale is very large and able to fit all n balls on each side. Write a scaleOfTruthN() function that takes in the number of basketballs and determines the minimum number of weighs that you’ll need to find the outlier`.
For example, if you have 3 balls, you can compare 2 of them to see if they are of equal weight. If they are, then you know the ball that you didn’t weigh is the outlier. On the other hand, if they aren’t of equal weight, then the heavier ball is the outlier. Therefore, scaleOfTruthN(3) should return 1.


## 10 - FizzBuzz 

Write a fizzbuzz() function that takes in a number, n, and returns an array of the numbers from 1 to n. For multiples of three, use "Fizz" instead of the number, and for the multiples of five, use "Buzz". For numbers that are multiples of both three and five, use "FizzBuzz" (capitalization matters).
For example, fizzbuzz(16) should return [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16].


## 11 - Find the Missing Numbers 

You have a bag containing tiles with numbers [1, 2, 3, …, n] written on them. Each number appears exactly once, so there are n tiles and n numbers. Now, without looking, k number tiles are randomly picked out of the bag and discarded. Create a missingNos() function that takes in a list and k, and returns the missing numbers in ascending order (from smallest to greatest).
For example, missingNos([1, 2, 4, 5, 6, 7, 8, 10], 2) should return [3, 9].


## 12 - Find the Xth Number in Order 

Write a function, getX, that given an int x and a integer array num, returns the Xth number if the list was in sorted order. In other words, the Xth smallest number.
Function Name: getX
Input: An integer, x, and an unsorted list of integers nums that aren’t necessarily distinct
Output: The integer corresponding to the Xth number in the sorted list
Example:
getX(2, [5, 10, -3, -3, 7, 9]) => -3

The second number in order is -3.
getX(4, [5, 10, -3 , -3, 7, 9]) => 7

The fourth number in order is 7.
Note that this assumes the first number is position 1, not 0.


## 13 - Top Score Sorter 

Write a scoreSorter() function that will take a list of unsorted scores along with the highest possible score. It should return a sorted list of all of the scores, in descending order from high to low. You are expected to create and implement your own sorting algorithm for this challenge.
For example, scoreSorter([1, 2, 3, 9999, 13], 10000) should return [9999, 13, 3, 2, 1].


## 14 - Fibonacci Finder 

Create a fibFinder() function that finds the nth number in the Fibonacci sequence. As a reminder, the Fibonacci sequence is a mathematical sequence that begins with 0 and 1, with each following term being the sum of the two previous terms.
For example, the first two terms of the sequence are represented by fibFinder(0) and fibFinder(1), which return 0 and 1, respectively. fibFinder(6) should return 8.


## 15 - Swap Elements in a Linked List 

Given the head of a linked list and two values within the list, create a swapNodes() function that swaps the nodes with the given values. Your function should return the same list with the nodes swapped.
For example, if your original linked list was named demoList and contained 1 -> 2 -> 3 -> 4 -> 5 -> 6, swapNodes(demoList, 2, 5) should return the list containing 1 -> 5 -> 3 -> 4 -> 2 -> 6.
For this problem, you’ll be using our custom-built Node class. The constructor for the node class is as follows:
constructor(data){
  this.data = data;
  this.next = null;
}

The head of a linked list is a Node with some data whose next value points to the next Node in the linked list.


## 16 - Stairmaster 

Write a function, stairmaster(n), that will compute the number of ways to climb a flight of n steps, taking 1, 2, or 3 steps at a time.
Take the example of climbing n = 4 steps. There are seven different ways one can climb four stairs using 1, 2, or 3 steps at a time: [1,1,1,1] [2,1,1] [1,2,1] [1,1,2] [2,2] [1,3] [3,1].
Make sure to find all permutations, not combinations, as the order matters. Climbing one step then two steps is different from climbing two steps then one step.


## 17 - The Knapsack Problem 

Imagine that you are a thief breaking into a house. There are so many valuables to steal, but you’re just one person who can only carry so much. Each item has a weight and value, and your goal is to maximize the total value of items while remaining within the weight limit of your knapsack. Create a knapsack() function that takes in:
* the total amount of weight you can carry
* an array of the weights of all of the items
* an array of the values of all of the items
and returns the maximum value that you will be able to carry.
For example, let’s say your knapsack can carry 10 units of weight. The item weights are [3, 6, 8] and their values are [50, 60, 100]. Your knapsack function should return 110 since you can carry the first and second items, whose values total 110. If you tried to carry the third item, which has the value of 100, you wouldn’t be able to fit anything else in the knapsack.


## 18 - Max Product Finder 

Create a maxProductFinderK() function that takes in a list of numbers and an integer k, and returns the largest product that can be attained from any k integers in the list. You may presume that the length of the list of integers is greater than or equal to k.
For example, maxProductFinderK([-8, 6, -7, 3, 2, 1, -9], 2) should return 72 and maxProductFinderK([-8, 6, -7, 3, 2, 1, -9], 3) should return 432.

## 19 - Reverse Words 

Write a wordReverser() function that will take a given string and reverse the order of the words. You may assume that the string is a sentence that contains only letters and spaces, with all words separated by one space.
For example, wordReverser("Codecademy rules") should return "rules Codecademy" and wordReverser("May the Fourth be with you") should return "you with be Fourth the May".

## 20 - Reverse a Singly-Linked List

Given the head of a linked list, write a function named reverseLinkedList(linkedList) that reverses that linked list. Your function should return the head of a new linked list where the values are in reverse order of the original linked list.
For example, if your original linked list was 4 -> 8 -> 15 -> None, your function should return the head of the linked list 15 -> 8 -> 4 -> None.
For this problem, you’ll be using our custom-built Node class. The constructor for the node class is as follows:
constructor(data){
  this.data = data;
  this.next = null;
}

The head of a linked list is a Node with some data whose next value points to the next Node in the linked list.

## 21 - Product of Everything Else

Create a productOfTheOthers() function that takes in an array of integers and replaces each number in the array with the product of all the numbers in the array except the number at that index itself.
For example, productOfTheOthers([1, 2, 3, 4, 5]) should return [120, 60, 40, 30, 24] and productOfTheOthers([5, 5, 5]) should return [25, 25, 25].


## 22 - Egg Dropper 

Imagine that you have 2 eggs and are standing at the bottom of a very large skyscraper. Let’s say that skyscraper has n floors.
There is a certain floor, f, where if you drop an egg from that height (or a height above that floor), the egg will break. If you drop an egg below floor f, the egg won’t break.
To find this floor f, you decide to start dropping your eggs from different floors. If you drop an egg from a floor, and that egg breaks, you can no longer use that egg.
To find floor f, one strategy you could use would be to start dropping your egg from the bottom of the skyscraper, and keep going up a floor one at a time until the egg breaks. But that sounds like a lot of work dropping all of those eggs! You want to know what the minimum number of drops it would take to find floor f.
Complete the function eggDrop(n) that returns the minimum number of egg drops it would take to discover what floor of your tower is floor f, given that the tower has n total floors. Remember, don’t return floor f — return the number of egg drops it would take to find floor f.
For example eggDrop(2) should return 2. If the tower has 2 stories, then we need to commit to dropping an egg twice. We could drop an egg from the first floor. If the egg breaks, we got lucky, and now know that f = 1. But if the egg doesn’t break, then we need to drop an egg from floor 2 to see if that egg breaks. If it does, then we know f = 2. If it doesn’t break, then we know f is greater than the height of the tower.
Things get trickier as n increases. For example, if n is 100, then the minimum number of drops it will take to find f is 14.


## 23 - Capturing Rainwater 

Create a capturingRainwater() function that takes in an array of heights, and returns the amount of rainwater that could be contained in that array.
For example, the array [4, 2, 1, 3, 0, 1, 2] can be represented in the following [histogram](https://static-assets.codecademy.com/curriculum/code-challenges/Image%202.svg):
As you can see, there are 6 units of water that can be contained, so capturingRainwater([4, 2, 1, 3, 0, 1, 2]) will return 6.


## 24 - Change Please 

You’re building an ATM and are tasked with determining how many different ways you can “break” a given amount of money into different bills.
Given an input amount of money inputMoney and a list of values coins representing the possible denominations of coins the ATM can give back, complete the function changeOptions(inputMoney, coins) so that it returns the number of different ways the ATM could give you change.
For example, changeOptions(5, [1, 2, 5, 10, 100]) should return 4. This is because there are 4 unique ways that the ATM can give change for 5:
*  1 + 1 + 1 + 1 + 1
*  1 + 1 + 1 + 2
*  1 + 2 + 2
*  5
You can assume inputMoney is positive and you can assume coins has at least one value.

# Running instructions
1. Open terminal, navigate to: ...js-practice/Codecademy/codeChallenges
2. node statsFinder.js
3. Back up to parent with cd ../