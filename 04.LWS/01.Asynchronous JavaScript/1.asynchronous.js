/*=======================
    node 1.asynchronous.js
=========================*/
const processOrder = (customer) => {
    console.log(`Processing order for coustomer 1`);

    setTimeout(() => {
        console.log(`Cooking completed`);
    }, 3000);

    console.log(`order processed for coustomer 1`)
};

console.log(`take order for coustomer 1`);
processOrder();
console.log(`completed order for coustomer 1`);