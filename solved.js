//write a function that logs all the numbers from 1-100 with the following exceptions:
// if the number is divisible by 3, log "Fizz" instead.
// if the number is divisible by 5, log "Buzz" instead.
// of the number is divisible by 3 and 5, log "FizzBuzz" instead.

/*output
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
...
*/

function fizzBuzz(endNum){
    //YOUR CODE HERE
    for(var i = 1; i<=endNum;i++){
        if(i%3===0 && i%5===0){
            console.log("FizzBuzz")
        } else if( i%5===0){
            console.log("Buzz")
        }else if( i%3===0){
            console.log("Fizz")
        } else {
            console.log(i)
        }
    }
}

// function fizzBuzz(endNum) {
//   for (var i = 1; i <= endNum; i++) {
//     var result = '';
//     if (i % 3 === 0) {
//       result+="Fizz"
//     }
//     if (i % 5 === 0) {
//      result+="Buzz"
//     }
//     if(result===""){
//         result = i
//     }
//     console.log(result)
//   }
// }

function fizzBuzz(endNum){
    Array(endNum).fill(null).forEach(function(e,i){console.log((i+1)%15===0?"FizzBuzz":(i+1)%5===0?"Buzz":(i+1)%3===0?"Fizz":i+1)})
}

fizzBuzz(50);

var joe = true;
// if(joe===true){
//     console.log("its true")
// } else {
//     console.log("its false;")
// }
joe===true? console.log("its true"):console.log("its false")
