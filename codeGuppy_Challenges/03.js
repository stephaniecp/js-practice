function printMultiplicationTableWith7() {
    for (let i=1; i <=10; i++) {
        let multiplierRow = 
            "7 * " + 
            i + 
            " = " + 
            7 * i;
        console.log(multiplierRow);
    }
}

printMultiplicationTableWith7();



//Just demonstrating putting variables and calculations straight into the `` style strings
function JG_printMultiplicationTableWith7() {
    for (let i=1; i <=10; i++) {
        console.log(`7 * ${i} = ${7 * i}`);
    }
}
