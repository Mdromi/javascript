const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", e => {
    e.preventDefault(); // preventing form from submitting
    // console.log(fileInput.value)

    downloadBtn.innerText = "Downloading file...";
    fetchFile(fileInput.value);
});

function fetchFile(url){
    // fetching file & returing response as blob
    fetch(url).then(res => res.blob()).then(file => {
        // URL.createObjectURL creates a url of passed object
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl; // passing tempUrl as href value of <a> tag
        // passing file last name & extension as download value of <a> tag
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag); // adding <a> tag inside body
        console.log(tempUrl)
        aTag.click(); // clicking <a> tag so the file download
        aTag.remove(); // removeing <a> tag so the file download
        URL.revokeObjectURL(tempUrl); // removeing tempUrl from the document
        downloadBtn.innerText = "Downloaded file";
    }).catch(() => {
        // catch method will call if any error comes during downloading
        downloadBtn.innerText = "Downloaded file";
        alert("Failed to download file!");
    })
}