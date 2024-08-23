function removeAds() {
    //  Get all the span elements on the page

    let spans = document.getElementsByTagName('span');

    for (let i =0; 1< spans.length; i++){
        // check if they contain the text 'promoted'
        if(spans[i].innerHTML === "promoted"){
            // Get the div that wraps around the entire ad
            let card = spans[i].closest(".feed-shared-update-v2");

            // if the class changed and we can't find it width closest(), get the 6th par

            if(card === null){
                let j = 0;
                card = spans[i];
                while (j < 6 ) {
                    card = card.parentNode;
                    j++
                }
            }

            // Make the add disappear!
            card.setAttribute('style', "display: none !important;");
        }
    }
}

// Ensures ads will be removed as the user scrolls
setInterval(()=>{
    removeAds()
},100)