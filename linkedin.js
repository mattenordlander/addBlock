function removeAds() {
    let spans = document.getElementsByTagName('span');

    for (let i = 0; i < spans.length; i++) {
        if (spans[i].innerHTML.toLowerCase().includes("marknadsfört")) {
            let card = spans[i].closest(".feed-shared-update-v2");

            if (card === null) {
                let j = 0;
                card = spans[i];
                while (j < 6) {
                    card = card.parentNode;
                    j++;
                }
            }

            if (card) {
                card.style.display = "none";
            }
        }
    }
}

setInterval(() => {
    removeAds();
}, 100);
