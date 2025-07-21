
function cookDosa(callback){
    console.log("Order received for Dosa. Cooking...")
    setTimeout(()=>{
        console.log("Dosa is ready");
          callback();
    },3000)
}

function placeOrder(){
    cookDosa(()=>{
         console.log("Waiter : Serving Dosa to Customer.")
    })
}
// placeOrder();


function placeOrderWithFunctionAsParamter(cookingFunction,foodItem){
    cookingFunction(()=>{
        console.log("Waiter : Serving "+foodItem+" to Customer.")
    })
}

placeOrderWithFunctionAsParamter(cookDosa,"Dosa");