const selectTag = document.querySelectorAll("select"),
fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
exchangeIcon = document.querySelector(".exchange"),
translateBtn = document.querySelector("button"),
icons = document.querySelectorAll(".row i")

selectTag.forEach( (tag, id) => {
    for(const country_code in countries){
        // console.log(countries[country_code])
        // selectin English by defult as FROM language and Bangla as To language
        let selected;
        if(id == 0 && country_code == "en-GB"){
            selected = "selected";
        } else if(id == 1 && country_code == "bn-IN"){
            selected = "selected";
        }
        let option = `<option value="${(country_code)}" ${selected}>${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option); // adding options tag inside select tag
    }   
});

exchangeIcon.addEventListener("click", () => {
    // exchanging textarea and selected tag value 
    let temptext = fromText.value,
    tempLang = selectTag[0].value;
    fromText.value = toText.value;
    selectTag[0].value = selectTag[1].value;
    toText.value = temptext;
    selectTag[1].value = tempLang;
})

translateBtn.addEventListener("click", () => {
    let text = fromText.value,
    translateFrom = selectTag[0].value, // getting fromSelect tag value
    translateTo = selectTag[1].value; // getting toselect tag valu
    // console.log(text, translateFrom, translateTo)

    if(!text) return;
    toText.setAttribute("placeholder", "Translating...");

    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    // featching api response and returning it with parsing into js obj
    // and in another then method receving that obj
    fetch(apiUrl).then(res => res.json()).then(data => {
        // console.log(data);
        toText.value =  data.responseData.translatedText;
        toText.setAttribute("placeholder", "Translation...");
    })
});

icons.forEach(icon => {
    icon.addEventListener("click", ({target}) => {
        if(target.classList.contains("fa-copy")){
            // if clicked icon has from id, copy the fromTextarea value else copy the to textarea value
            if(target.id == "from"){
                // console.log("From copy icon clicked")
                navigator.clipboard.writeText(fromText.value);
            } else {
                // console.log("To copy icon clicked")
                navigator.clipboard.writeText(toText.value);
            }
        } else {
            // console.log("Speech icon clicked")
            // if clicked icon has from id, copy the fromTextarea value else speak the to textarea value
            let utterance;
            if(target.id == "from"){
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang = selectTag[0].value; // setting utterance language to fromSelect tag value
            } else {
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = selectTag[1].value; // setting utterance language to fromSelect tag value
            }
            speechSynthesis.speak(utterance); // speak the passed utterance
        }
    })
})