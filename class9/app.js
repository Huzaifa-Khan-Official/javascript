// function abc(){
//     alert("Hello world")
// }
// for(var i=1; i<=10; i++){
//     abc()
// }

function sum(a = 0, b = 0) {
    n1 = +prompt("Enter first number: ")
    n2 = +prompt("Enter second number: ")
    if (n1 == "" && n2 == "") {
        return a + b
    } else {
        return n1 + n2        
    }
}

alert(sum())
