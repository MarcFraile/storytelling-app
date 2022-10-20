const NUM_CARDS = 6;
const IMAGE_URLS = [
    "img/castle-on-lake.jpg",
    "img/city.jpg",
    "img/cute-cat.jpg",
    "img/cute-dog.jpg",
    "img/dinosaurs-and-volcano.jpg",
    "img/lion.jpg",
    "img/mountaintops.jpg",
    "img/pitbull.jpg",
    "img/rooster.jpg",
    "img/scared-cat.jpg",
    "img/spaceship-cockpit.jpg",
    "img/tropical-beach.jpg",
];

const Interpolate = (a, b, t) => a + (b - a) * t;
const UniformInt = (min, max) => Math.floor(Interpolate(min, max + 1, Math.random()));
const Shuffle = (values) => {
    for (let i = values.length - 1; i > 0; i--) {
        const j = UniformInt(0, i); // i inclusive.
        [values[i], values[j]] = [values[j], values[i]];
    }
}
const GetImage = (url) => {
    const img = new Image();
    img.src = url;
    return img;
};

const IMAGES = IMAGE_URLS.map(GetImage);

window.onload = () => {
    const cards = [];
    for (let i = 0; i < NUM_CARDS; i += 1) {
        const id = `card-${i}`;

        const cardDiv = document.getElementById(id);
        const faceUpDiv = cardDiv.querySelector(".face-up");

        const card = {
            id: id,
            flipped: false,
            cardDiv: cardDiv,
            faceUpDiv: faceUpDiv,
        };

        cardDiv.addEventListener("click", () => FlipCard(card));

        cards.push(card);
    }

    const FlipCard = (card) => {
        if (card.flipped == false) {
            console.log(`Flipping ${card.id}`);
            card.flipped = true;
            card.cardDiv.classList.add("is-flipped");
        }
    };

    const shuffleButton = document.getElementById("shuffle");
    console.log(shuffleButton);
    shuffleButton.addEventListener("click", () => ShuffleCards());

    const ShuffleCards = () => {
        console.log("Shuffling");
        const shuffledImages = [ ...IMAGES ];
        Shuffle(shuffledImages);

        for (let i = 0; i < NUM_CARDS; i += 1) {
            const card = cards[i];
            const img = shuffledImages[i];

            img.width = card.faceUpDiv.clientWidth;
            img.height = card.faceUpDiv.clientHeight;

            card.flipped = false;
            card.img = img;
            card.cardDiv.classList.remove("is-flipped");
            setTimeout(() => {
                card.faceUpDiv.innerHTML = "";
                card.faceUpDiv.appendChild(card.img);
            }, 500);
        }
    };

    ShuffleCards();
};
