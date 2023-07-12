const cardArray1=[
    {
        name:'fries',
        img:'images/level_1/fries.png'
    },
    {
        name:'burger',
        img:'images/level_1/burger.png'
    },
    {
        name:'hotdog',
        img:'images/level_1/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/level_1/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/level_1/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/level_1/pizza.png'
    },
    {
        name:'fries',
        img:'images/level_1/fries.png'
    },
    {
        name:'burger',
        img:'images/level_1/burger.png'
    },
    {
        name:'hotdog',
        img:'images/level_1/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/level_1/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/level_1/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/level_1/pizza.png'
    }
]
const cardArray2=[
    {
        name:'apple',
        img:'images/level_1/apple.png'
    },
    {
        name:'banana',
        img:'images/level_1/banana.png'
    },
    {
        name:'blueberry',
        img:'images/level_1/blueberry.png'
    },
    {
        name:'guava',
        img:'images/level_1/guava.png'
    },
    {
        name:'kiwi',
        img:'images/level_1/kiwi.png'
    },
    {
        name:'orange',
        img:'images/level_1/orange.png'
    },
    {
        name:'pinapple',
        img:'images/level_1/pinapple.png'
    },
    {
        name:'strawberry',
        img:'images/level_1/strawberry.png'
    },
    {
        name:'apple',
        img:'images/level_1/apple.png'
    },
    {
        name:'banana',
        img:'images/level_1/banana.png'
    },
    {
        name:'blueberry',
        img:'images/level_1/blueberry.png'
    },
    {
        name:'guava',
        img:'images/level_1/guava.png'
    },
    {
        name:'kiwi',
        img:'images/level_1/kiwi.png'
    },
    {
        name:'orange',
        img:'images/level_1/orange.png'
    },
    {
        name:'pinapple',
        img:'images/level_1/pinapple.png'
    },
    {
        name:'strawberry',
        img:'images/level_1/strawberry.png'
    },
]

for(let i=1;i<3;i++){}
cardArray1.sort(()=>0.5-Math.random())// the shortcut way to sort an array randomly
cardArray2.sort(()=>0.5-Math.random())

const gridDisplay=document.querySelector("#grid")
let cardsChosen=[]
let cardsChosenIds=[]
const cardsWon=[]
let levelDisplay=document.querySelector("#level")
levelDisplay.innerHTML=1

function createBoard(){
    for(let i=0;i<cardArray1.length;i++){
        const card= document.createElement('img')
        card.setAttribute('src','images/blank.jpg')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
        
    }
}
createBoard()

function checkMatch(){
    const cards=document.querySelectorAll('#grid img')
    const resultDisplay=document.querySelector("#result")
    const optionOneId=cardsChosenIds[0]
    const optionTwoId=cardsChosenIds[1]
    if(optionOneId==optionTwoId){
        //alert("You have clicked the same image!")
        cards[optionOneId].setAttribute('src','images/blank.jpg')
        cards[optionTwoId].setAttribute('src','images/blank.jpg')
    }
    else if(cardsChosen[0]===cardsChosen[1]){
        //alert("You have found a match!")
        // cards[optionOneId].setAttribute('src','images/white.png')
        // cards[optionTwoId].setAttribute('src','images/white.png')
        cards[optionOneId].style.visibility="hidden";
        cards[optionTwoId].style.visibility="hidden";
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src','images/blank.jpg')
        cards[optionTwoId].setAttribute('src','images/blank.jpg')
        //alert('Sorry try again!')
    }
    resultDisplay.textContent=cardsWon.length
    cardsChosen=[]
    cardsChosenIds=[]

    if(cardsWon.length==cardArray1.length/2){
        resultDisplay.innerHTML="Congratulations!You upgraded a level!"
        levelDisplay.innerHTML++
    }
}

function flipCard() {
    let cardId=this.getAttribute('data-id')
    cardsChosen.push(cardArray1[cardId].name)
    cardsChosenIds.push(cardId)
    console.log("clicked",cardId);
    this.setAttribute('src',cardArray1[cardId].img)
    if(cardsChosen.length===2){
        setTimeout(checkMatch,500)
    }
}