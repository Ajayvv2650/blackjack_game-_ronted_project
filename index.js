let cards=[]
let sum=0
let hbj=false
let isalive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
let player={
    name:"per",
    chips:145 ,
    
}
let playerEl=document.getElementById("player-el")
playerEl.textContent= player.name + ": $" + player.chips
function getRandomcard(){
    let randomNumber=Math.floor(Math.random()*13)+1
    if(randomNumber>10){
        return 10
    } else if(randomNumber===11){
        return 11
    } else{
        return randomNumber
    }
    
}

function startgame()
{
    isalive=true
    let fc=getRandomcard()
    let sc=getRandomcard()
    sum=fc+sc
    cards=[fc,sc]
    rendergame()
}
function rendergame()
{

    cardEl.textContent="cards:"
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="sum: " +sum
if(sum<21){
    message="do you want to continue"
}else if(sum===21){
     message="u win"
     hbj=true
}else if(sum>21){
    message="out of the game"
    isalive= false
}

messageEl.textContent=message
}
function newcard(){
    if (isalive === true && hbj===false){
   console.log("drawing new card") 
   let card=getRandomcard()
   sum=sum+card
   cards.push(card)
   console.log(cards)
   rendergame()
    }
}
