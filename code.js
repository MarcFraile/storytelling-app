const CATEGORY_DATA = {
    "beach": {
        "character": [
            "img/categories/beach/character-children-playing.jpg",
            "img/categories/beach/character-kid-playing-ball.jpg",
            "img/categories/beach/character-teen-sunbathing.jpg"
        ],
        "object": [
            "img/categories/beach/object-beach-ball.jpg",
            "img/categories/beach/object-flipflops.jpg",
            "img/categories/beach/object-pearl.jpg"
        ],
        "place": [
            "img/categories/beach/place-beach-planks.jpg",
            "img/categories/beach/place-beach-umbrella.jpg"
        ]
    },
    "fantasy": {
        "character": [
            "img/categories/fantasy/character-dark-knight.jpg",
            "img/categories/fantasy/character-dwarf.jpg",
            "img/categories/fantasy/character-elf.jpg",
            "img/categories/fantasy/character-fire-princess.jpg",
            "img/categories/fantasy/character-goblin.jpg",
            "img/categories/fantasy/character-wizard.jpg"
        ],
        "object": [
            "img/categories/fantasy/object-armor.jpg",
            "img/categories/fantasy/object-chest.jpg",
            "img/categories/fantasy/object-sword-and-shield.jpg"
        ],
        "place": [
            "img/categories/fantasy/place-castle-canyon.jpg",
            "img/categories/fantasy/place-castle-lake.jpg",
            "img/categories/fantasy/place-dragon-hoard.jpg"
        ]
    },
    "farm": {
        "character": [
            "img/categories/farm/character-feeding.jpg",
            "img/categories/farm/character-foraging.jpg",
            "img/categories/farm/character-tilling.jpg",
            "img/categories/farm/character-truck.jpg",
            "img/categories/farm/character-watering.jpg"
        ],
        "object": [
            "img/categories/farm/object-spade-fork.jpg",
            "img/categories/farm/object-tractor.jpg",
            "img/categories/farm/object-truck.jpg",
            "img/categories/farm/object-watering-can.jpg"
        ],
        "place": [
            "img/categories/farm/place-farm.jpg",
            "img/categories/farm/place-field.jpg"
        ]
    },
    "halloween": {
        "character": [
            "img/categories/halloween/character-ghosts.jpg",
            "img/categories/halloween/character-mummy.jpg",
            "img/categories/halloween/character-reaper.jpg",
            "img/categories/halloween/character-werewolf.jpg",
            "img/categories/halloween/character-zombie.jpg"
        ],
        "object": [
            "img/categories/halloween/object-cauldron.jpg",
            "img/categories/halloween/object-crystal-ball.jpg",
            "img/categories/halloween/object-eye-jar.jpg",
            "img/categories/halloween/object-grave.jpg",
            "img/categories/halloween/object-hand-jar.jpg",
            "img/categories/halloween/object-magic-book.jpg",
            "img/categories/halloween/object-skull.jpg"
        ],
        "place": [
            "img/categories/halloween/place-graveyard.jpg",
            "img/categories/halloween/place-spooky-house.jpg"
        ]
    },
    "medicine": {
        "character": [
            "img/categories/medicine/character-doctor-female.jpg",
            "img/categories/medicine/character-doctor-male.jpg",
            "img/categories/medicine/character-medic-female.jpg",
            "img/categories/medicine/character-medic-male.jpg"
        ],
        "object": [
            "img/categories/medicine/object-ambulance.jpg",
            "img/categories/medicine/object-bandaid.jpg",
            "img/categories/medicine/object-injection.jpg",
            "img/categories/medicine/object-phonendoscope.jpg",
            "img/categories/medicine/object-pills.jpg",
            "img/categories/medicine/object-thermometer.jpg"
        ],
        "place": [
            "img/categories/medicine/place-hospital-inside.jpg",
            "img/categories/medicine/place-hospital-outside.jpg"
        ]
    },
    "monsters": {
        "character": [
            "img/categories/monsters/character-chicken-boy.jpg",
            "img/categories/monsters/character-mushroom-head.jpg",
            "img/categories/monsters/character-pyramid-head.jpg",
            "img/categories/monsters/character-skull-kid.jpg",
            "img/categories/monsters/character-tea-yeti.jpg",
            "img/categories/monsters/character-tomato.jpg"
        ],
        "object": [
            "img/categories/monsters/object-tea-foamer.jpg",
            "img/categories/monsters/object-teacup.jpg",
            "img/categories/monsters/object-teapot.jpg"
        ],
        "place": [
            "img/categories/monsters/place-mushroom-house.jpg",
            "img/categories/monsters/place-tree-house.jpg"
        ]
    },
    "nature": {
        "character": [
            "img/categories/nature/character-scout-boy.jpg",
            "img/categories/nature/character-scout-girl.jpg",
            "img/categories/nature/character-scout-trooper.jpg"
        ],
        "object": [
            "img/categories/nature/object-axe.jpg",
            "img/categories/nature/object-hearth.jpg",
            "img/categories/nature/object-hiking-shoes.jpg",
            "img/categories/nature/object-tent.jpg"
        ],
        "place": [
            "img/categories/nature/place-desert.jpg",
            "img/categories/nature/place-jungle.jpg",
            "img/categories/nature/place-savannah.jpg"
        ]
    },
    "space": {
        "character": [
            "img/categories/space/character-alien-saucer.jpg",
            "img/categories/space/character-astronaut-flag.jpg",
            "img/categories/space/character-astronaut-spacewalk.jpg",
            "img/categories/space/character-robot-brain.jpg"
        ],
        "object": [
            "img/categories/space/object-rover.jpg",
            "img/categories/space/object-satellite.jpg",
            "img/categories/space/object-ufo.jpg"
        ],
        "place": [
            "img/categories/space/place-cockpit.jpg",
            "img/categories/space/place-planets.jpg",
            "img/categories/space/place-space-station.jpg"
        ]
    }
};

const NUM_CATEGORIES = 3;
const COL_THEMES = [ "place", "character", "character", "object" ];

const CARD_ROWS = NUM_CATEGORIES;
const CARD_COLS = COL_THEMES.length;

const Interpolate = (a, b, t) => a + (b - a) * t;
const UniformInt = (min, max) => Math.floor(Interpolate(min, max + 1, Math.random()));
const Shuffled = (original) => {
    const copy = [ ...original ];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = UniformInt(0, i); // i inclusive.
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}
const GetImage = (url) => {
    const img = new Image();
    img.src = url;
    return img;
};

const CATEGORIES = {};
const CATEGORY_KEYS = [];

for (const key in CATEGORY_DATA) {
    const data = CATEGORY_DATA[key];
    const category = {};

    for (const type in data) {
        category[type] = data[type].map(GetImage);
    }

    CATEGORIES[key] = category;
    CATEGORY_KEYS.push(key);
}

window.onload = () => {
    const cards = [];
    for (let y = 0; y < CARD_ROWS; y += 1) {
        cards.push([]);
        for (let x = 0; x < CARD_COLS; x += 1) {
            const id = `card-r${y}-c${x}`;

            const cardDiv = document.getElementById(id);
            const faceUpDiv = cardDiv.querySelector(".face-up");

            const card = {
                id: id,
                flipped: false,
                cardDiv: cardDiv,
                faceUpDiv: faceUpDiv,
            };

            cardDiv.addEventListener("click", () => FlipCard(card));

            cards[y].push(card);
        }
    }

    const FlipCard = (card) => {
        if (card.flipped == false) {
            // console.log(`Flipping ${card.id}`);
            card.flipped = true;
            card.cardDiv.classList.add("is-flipped");
        }
    };

    const RevealAll = () => {
        console.log("Revealing all");
        for (let y = 0; y < CARD_ROWS; y += 1) {
            for (let x = 0; x < CARD_COLS; x += 1) {
                cards[y][x].cardDiv.click();
            }
        }
    };

    const ShuffleAndReveal = () => {
        ShuffleCards();
        setTimeout(() => RevealAll(), 750);
    };

    const revealAllButton = document.getElementById("reveal-all");
    revealAllButton.addEventListener("click", () => RevealAll());

    const shuffleButton = document.getElementById("shuffle");
    console.log(shuffleButton);
    shuffleButton.addEventListener("click", () => ShuffleCards());

    const shuffleRevealButton = document.getElementById("shuffle-reveal");
    shuffleRevealButton.addEventListener("click", () => ShuffleAndReveal());

    let next_categories = [];
    const GetCategory = () => {
        if (next_categories.length < 1) {
            next_categories = Shuffled(CATEGORY_KEYS);
        }
        return next_categories.pop();
    };

    const ShuffleCards = () => {
        console.log("==== Shuffling ====");

        const current_categories = [];

        for (let y = 0; y < CARD_ROWS; y += 1) {

            // Ensure we don't get repeated categories.
            let category = GetCategory();
            while (current_categories.includes(category)) {
                category = GetCategory();
            }
            current_categories.push(category);
            console.log(category);

            // We need to do a deep enough copy of CATEGORIES[category] so that we can shuffle and pop each theme list without affecting the base object.
            const data = {};
            for (const theme in CATEGORIES[category]) {
                data[theme] = Shuffled(CATEGORIES[category][theme]);
            }

            for (let x = 0; x < CARD_COLS; x += 1) {
                const theme = COL_THEMES[x];

                const card = cards[y][x];
                console.log(`Shuffling ${card.id}`);
                if (data.length < 1) throw Error(`Not enough images. category: ${category}; theme: ${theme}`);
                const img = data[theme].pop();
                console.log(`Image URL: ${img.src}`);

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
        }
    };

    ShuffleCards();

    const buttonContainer = document.getElementById("button-container");
    document.addEventListener("keyup", (event) => {
        switch(event.key) {
            case "Escape":
                buttonContainer.classList.toggle("hidden");
                break;
            case "1":
                RevealAll();
                break;
            case "2":
                ShuffleCards();
                break;
            case "3":
                ShuffleAndReveal();
                break;
        }
    });
    console.log("Key bindings:\n - [Esc] toggles UI display.\n - [1] Reveals all cards.\n - [2] Shuffles cards.\n - [3] Shuffles and then reveals.");
};
