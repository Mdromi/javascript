/*=======================
    node 3.promise.js
=========================*/
const hasMetting = false;

const metting = new Promise((resolve, reject) => {
    if(!hasMetting){
        const mettingDetails = {
            name: 'Technical Metting',
            location: 'Google Meet',
            time: '10:00 PM',
        };
        resolve(mettingDetails);
    } else {
        reject(new Error('Metting alredy scheduled!'));
    }
});

/* const addToCalender = (mettingDetails) => {
    return new Promise ((resolve, reject) => {
        const calender = `${mettingDetails.name} has been scheduled on ${mettingDetails.location} at ${mettingDetails.time}`;
        resolve(calender);
    })
} */

const addToCalender = (mettingDetails) => {
        const calender = `${mettingDetails.name} has been scheduled on ${mettingDetails.location} at ${mettingDetails.time}`;

        return Promise.resolve(calender);
}

metting
    .then(addToCalender)  
    .then((res) => {
        // console.log(JSON.stringify(res));
        // console.log(res)
    })
    .catch((err) => {
        console.log(err.message)
    })
// console.log(`Hello World`);

// EX 2
const promise1 = Promise.resolve(`Promise I resolved`);
const promise2 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolved`);
    }, 2000);
}); 

promise1.then((res) => console.log(res));
promise2.then((res) => console.log(res));

Promise.all([promise1, promise2]).then((res) => {
    console.log(res)
})

Promise.race([promise1, promise2]).then((res) => {
    console.log(res)
})
