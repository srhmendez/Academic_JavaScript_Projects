//Header text
document.querySelector('header > h1').innerHTML = "Inspector Closeau"
document.querySelector('header > h2').innerText = "Call me beep me, if you're trynna reach me"

//Main body text for h1 & h2
document.querySelector('#detective').innerHTML = "Inspector Closeau"

//window & document properties
let windowSizes = `Window offset is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall`
let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} pixels from the top 
of the display.`
let myWindow = document.querySelector('#myWindow').innerText = windowSizes + '\n' + offset

let documentSizes = `The Document title is called ${document.title}`
let docTime = ` and was last updated at ${document.lastModified}`
let myDocument = document.querySelector('#myDocument').innerText = documentSizes + docTime 

    
