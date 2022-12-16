const cardArray = [
    {
        name: 'Cheeseburger',
        img: './images/cheeseburger.png'
    },
    {
        name: 'Fries',
        img: './images/fries.png'
    },
    {
        name: 'Hot Dog',
        img: './images/hotdog.png'
    },
    {
        name: 'Ice Cream',
        img: './images/ice-cream.png'
    },
    {
        name: 'Milkshake',
        img: './images/milkshake.png'
    },
    {
        name: 'Pizza',
        img: './images/pizza.png'
    },
    {
        name: 'Cheeseburger',
        img: './images/cheeseburger.png'
    },
    {
        name: 'Fries',
        img: './images/fries.png'
    },
    {
        name: 'Hot Dog',
        img: './images/hotdog.png'
    },
    {
        name: 'Ice Cream',
        img: './images/ice-cream.png'
    },
    {
        name: 'Milkshake',
        img: './images/milkshake.png'
    },
    {
        name: 'Pizza',
        img: './images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
let matchesDisplay = document.querySelector('#matchesDisplay')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    cardArray.forEach( (obj, i) => {
        const card = document.createElement('img')
        card.setAttribute('src', './images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    })
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')

    if(cardsChosenIds[0] === cardsChosenIds[1]){
        cards[cardsChosenIds[0]].setAttribute('src', './images/blank.png')
        cards[cardsChosenIds[1]].setAttribute('src', './images/blank.png')
    }
    else if(cardsChosen[0] === cardsChosen[1]){
        cards[cardsChosenIds[0]].setAttribute('src', './images/white.png')
        cards[cardsChosenIds[1]].setAttribute('src', './images/white.png')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[cardsChosenIds[0]].setAttribute('src', './images/blank.png')
        cards[cardsChosenIds[1]].setAttribute('src', './images/blank.png')
    }
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length === cardArray.length/2){
        matchesDisplay.innerHTML = `Congratulations!! You found all ${cardsWon.length} matches.`
    } else {
        matchesDisplay.innerHTML = cardsWon.length
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}



