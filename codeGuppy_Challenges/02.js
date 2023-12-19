function printOddNumberbelow100() {
    for (let i=0; i<100; i++){
        let isEvenNumber = (i % 2 === 0) // = because assugnment
        if (isEvenNumber === false) { // === because of comparisson
            console.log(i)
        }
    }
}

printOddNumberbelow100();