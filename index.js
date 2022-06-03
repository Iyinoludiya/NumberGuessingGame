let score = 0
let isAlive = false
let numbers = []

function startGame() {
  isAlive = true
  getRandomNumber()
  numbers = [num1, num2]
}

function getRandomNumber() {
  let guess = prompt("Enter a random number: ")
  //for (let i = 0; i < numbers.length; i++){
    let randomNumber = 7 //Math.floor(Math.random() * 5) + 1
    console.log (`Computer generated random number = ${randomNumber}`)
    if (randomNumber == guess) {
      score += 1
      console.log (`You're right! Your score is now ${score}`)
    } else {
      console.log("Game Over!")
      isAlive = false
    }
//  }
}
  

getRandomNumber()

function nextRound() {
  if (isAlive == true) {
    console.log(`Enter another number: `)
    let newNumber = getRandomNumber()
    score += newNumber
    getRandomNumber()
  }
}

//create a function to set and generate a range of random numbers js will loop through. 
//prompt player to predict the generated number
//if guess = random number, award player one point and move to next stage, increasing range by 1. 
//if guess != random number, game over. 