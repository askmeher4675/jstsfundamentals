// in call back , Asysnc is needed
// A call back is just a functio passed into another fucntion to be called later

function orderCoffee(callback){
    setTimeout(() => {
        callback("Coffee is Ready !")
    }, 2000);
}


orderCoffee((coffee)=>{
    console.log(coffee);
});