document.querySelector('#title').innerHTML = "Fortune Teller"
document.querySelector('#slogan').innerHTML = "Switch Statements"

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  //the minimum is inclusive and the maximum is inclusive
} 

let month = getRandomIntInclusive(1,12)
let fate = getRandomIntInclusive(1,6)
let day = getRandomIntInclusive(1,30)
console.log(getFortune(fate))
console.log(month)

function getMonthName(month) {
    let name 
    switch (month) {
        case 1:
            name = "January"
            break
        case 2: 
            name = "February"
            break
        case 3: 
            name = "March"
            break
        case 4:
            name = "April"
            break
        case 5: 
            name = "May"
            break
        case 6: 
            name = "June"
            break
        case 7:
            name = "July"
            break
        case 8: 
            name = "August"
            break
        case 9: 
            name = "September"
            break
        case 10: 
            name = "October"
            break
        case 11:
            name = "November"
            break
        case 12: 
            name = "December"
            break
        default: 
            name = "Not a month"
            break
    }
return name
}

function getFortune(fate) {
    let message 
    switch (fate) {
        case 1: 
            message = 'have a unexpected reunion with someone you haven\'t thought about in years.'
            break
        case 2: 
            message = 'will have good luck with your finances in the upcoming month.'
            break
        case 3: 
            message = 'feel a lot of rage. Remember, anger is like a hot coal, it burns only the holder. Let it go.'
            break
        case 4: 
            message = 'have many negative thoughts after some plans fall through. Remember, attitude and outlook quickly become the reality we live in, choose wisely.'
            break 
        case 5: 
            message = 'mourn for a past love, a past time, a past memory. Don\'t forget that nostalgia is a trick the heart plays on the mind.'
            break
        case 6: 
            message = 'find yourself in a far and mysterious land surrounded by chance encounters and lots of warmth and laughter.'
            break
        default: 
            message = 'Error!Error! Read all about it!'
    }
    return message
}
const fortune = getFortune(fate)
const monthName = getMonthName(month)
console.log(monthName)
const fortuneRevealed = `On ${monthName} ${day}, you will ${fortune}`

document.querySelector('#fortune').innerText = fortuneRevealed
