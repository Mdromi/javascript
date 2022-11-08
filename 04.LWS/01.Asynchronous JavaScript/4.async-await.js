/*=======================
    node 4.async-await.js
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


const addToCalender = (mettingDetails) => {
        const calender = `${mettingDetails.name} has been scheduled on ${mettingDetails.location} at ${mettingDetails.time}`;

        return Promise.resolve(calender);
}

async function myMetting() {
    try{
        const mettingDetails = await metting;
        const calender = await addToCalender(mettingDetails);
        console.log(calender);
    } catch {
        console.log(`Something wrong happpend`);
    }
} 

myMetting();

console.log(`Hello World`);