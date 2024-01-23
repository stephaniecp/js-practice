

// function count10to1(){
//     for(let i = 1; i<11; i++){
//         console.log(i)
//     }
// }

// function count10to1(){
//     for(let i = 10; i>0; i--){
//         console.log(i)
//     }
// }

function count10to1andStoreInArray(){
    let countdownArray = []
    for(let i = 10; i>0; i--){
        countdownArray.push(i)
    }
    console.log(countdownArray)
}

// count10to1();

count10to1andStoreInArray();