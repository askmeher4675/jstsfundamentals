//Scope -> visibility and accessibnility of the particular variable

//var-> Function Scope

function example(){
    var messsage = "Hello"; //accessible only inside this function
    console.log(messsage);
}
example(); // function placed at  anywhere will run whetehr on top or below 

// console.log(messsage); //ReferenceError: messsage is not defined
// // not going to work as var is function scope

if(true){
    var m = "Inside block";
    console.log(m);
}

console.log(m); //OutPut - Inside block // works as m is not defined isnide a block



