//Promise
        /*     const cart = ['shoes','pants','kurtas'];
            function createOrder(){

            }
            createOrder(cart,function(){
                proceedToPayment(orderId);
            });
            const promise = createOrder(cart); */

    const GITHUG_API = "https://api.github.com/users/akshaymarch7"
    const user = fetch(GITHUG_API);
    console.log(user);
    user.then(function(data){
        console.log(data);
    })