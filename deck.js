const _suits = ["♠", "♣", "♥", "♦"]
const _values = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
let deck = []
let randomCard = Math.floor(Math.random() * 52)
let newDeck = []

function createDeck() {
    for(let i = 0; i < _suits.length; i++) {
        for(let j = 0; j < _values.length; j++) {
                deck.push(_suits[i] + _values[j])
            }
        } return deck
    }
    createDeck()

    function shuffleDeck() {
        const shuffledDeck = [...deck]
        shuffledDeck.sort((Math.random() * shuffledDeck)
        return shuffledDeck
    }
    console.log(shuffleDeck())
    shuffleDeck()
    // function shuffleDeck() {
    //     oldDeck = [...deck]
    //     for(let i = 0; i > oldDeck.length; i++) {
    //         const shuffle = oldDeck[i]
    //         oldDeck[i] = oldDeck[randomCard]
    //         oldDeck[randomCard] =shuffle
    //     }
    //     return oldDeck
    // }
    // shuffleDeck()
    // console.log(shuffleDeck())



    // const shuffleArray = () => {
    //     oldDeck = [...deck]
    //     while(oldDeck.length > 0) {
    //         newDeck.push(oldDeck[0])
    //         oldDeck.splice(0,1)
    //     }
    //     return newDeck
    // }
    // shuffleArray()
    // console.log(shuffleArray())




