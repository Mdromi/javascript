/*=======================
    node 2.asynchronous-task.js
=========================*/
const takeorder = (customer, callback) => {
    console.log(`take order for ${customer}`);
    callback(customer);
};

const processOrder = (customer, callback) => {
    console.log(`processing order for ${customer}`);

    setTimeout(() => {
        console.log(`Cooking completed`);
        console.log(`order processed for ${customer}`);
        callback(customer);
    }, 3000);

};

const completeOrder = (customer) => {
    console.log(`completed order for ${customer}`);
};

takeorder("customer 1", (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer);
    })
});

console.log(`Hello`);