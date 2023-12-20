function printTableOfNumbersBetween1And10(){

    for(var i = 1; i <= 10; i++) // Outer loop: iterates from 1 to 10
    {
        printTable(i); // Call the function printTable with the current value of i / "Function hoisting" = when defining a function after it is called
        console.log(""); // Prints an empty line to separate tables visually
    }

    
    function printTable(n) // Function to print the multiplication table for a given number n
    {
        for(var i = 1; i <= 10; i++) // Inner loop iterates from 1 to 10, representing the multiplicands (value taht i takes in the context of multiplication) for the given number n.
        //  Each iteration of the inner loop generates a row in the multiplication table where n is multiplied by the current value of i.
        {
            var row = n + " * " + i + " = " + n * i; // Create a string representing the current multiplication row. 
            //It includes the multiplicand (n), multiplier (i), and the result of the multiplication (n * i).
            console.log(row); // Print the current multiplication row
        }
    }
}

printTableOfNumbersBetween1And10();