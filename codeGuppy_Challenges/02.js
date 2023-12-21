function printOddNumberbelow100() {
    for (let i=0; i<100; i++){
        let isEvenNumber = (i % 2 === 0) // = because assignment
        if (isEvenNumber === false) { // === because of comparisson
            console.log(i)
        }
    }
}

printOddNumberbelow100();



//JG - Just demonstrating using the comparison on line 3 directly in the if statements condition
function JG_printOddNumberbelow100() {
    for (let i=0; i<100; i++){
        if (i % 2 !== 0) { // === because of comparisson
            console.log(i)
        }
    }
}