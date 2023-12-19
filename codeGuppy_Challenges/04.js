function printTableOfNumbersBetween1And10(){

    for(var i = 1; i <= 10; i++) // Outer loop: iterates from 1 to 10
    {
        printTable(i); // Call the function printTable with the current value of i
        console.log(""); // Prints an empty line to separate tables
    }
    
    
    function printTable(n) // Function to print the multiplication table for a given number n
    {
        for(var i = 1; i <= 10; i++) // Inner loop: iterates from 1 to 10

        {
            var row = n + " * " + i + " = " + n * i; // Create a string representing the current multiplication row
            console.log(row); // Print the row
        }
    }
}

printTableOfNumbersBetween1And10();