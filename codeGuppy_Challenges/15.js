// Fibonacci number: a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

function findFibonacci(n)
{
    if (n == 0)
        return 0;
        
    if (n == 1)
        return 1;
        
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}

var n = findFibonacci(10);
println(n);