function cookDosa(){
    return new Promise((resolve)=>{
        console.log("Order received for Dosa. Cooking...")
        setTimeout(()=>{
                console.log("Dosa is ready");
                resolve();
            },3000)
    })
    
}

function placeOrder(){
    cookDosa().then(()=>{
        console.log("Waiter: Serving Dosa to customer.");
    })
}

placeOrder(); 