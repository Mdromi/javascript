const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return; // if input is empty then return from here
    preValue = qrValue;
    
    generateBtn.innerText = "Generating QR Code...";

    // getting a qr code of user entered value using the qrserver
    // api and passing the api returned img src to qrimg
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

    qrImg.addEventListener("load", () => { // once QR code image loadd
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    })
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});