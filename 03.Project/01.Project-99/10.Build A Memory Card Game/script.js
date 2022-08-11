const cards = document.querySelectorAll(".card");
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;

// console.log(cards)

function flipCard({target: clickedCard}){
    // console.log(e.target);
    // let clickedCard = e.target; // getting user clicked card
    if(cardOne !== clickedCard && !disableDeck){
        clickedCard.classList.add("flip");
        if(!cardOne){
            // return the cardOne value to clickedcard
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;

        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2){ // if two cards img matched
    // console.log(img1, img2); 
    if(img1 === img2) { // if two cards img matched
        matched++; // increment matched value by 1
        // if matched value is 8 that means user has matched all the cards (8 * 2 = 16 cards) 
        if(matched == 8) {
            setTimeout(() => {
                return shuffleCard();
            }, 1000); // calling shuffleCard function after 1 sec
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    // if two card not matched 
    setTimeout(() => {
        // adding shake class to both card after 400ms
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        // removing both shanke & flip classes from the both card after 1200ms
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = ""; // setting both value to blank
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    // creating array of 16 items and each items is repeated twice
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1); // sorting arrray item randomly 

    // removing flip class from all cards and passing random image to each cards
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `images/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}
shuffleCard();

cards.forEach(card => { // adding click to all cards
    // console.log(card);
    card.addEventListener("click", flipCard);
});