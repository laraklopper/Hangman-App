const words = [//array of words
    "yellow",
    "navy",
    "blue",
    "sun",
    "brown",
    "jiujitsu",
    "rugby",
    "cricket",
    "soccer",
    "netball",
    "hockey",
    "golf",
    "lion",
    "zebra",
    "penguin",
    "giraffe",
    "leopard",
    "alarm",
    "bark",
    "bite",
    "dog",
    "cat",
    "mouse",
]


//Random word function
export function randomWord() {//Export the random word function to display a random word
    return words[Math.floor(Math.random() * words.length)]
}