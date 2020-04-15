document.querySelector('#title').innerHTML = "Hotel California"
document.querySelector('#slogan').innerHTML = "Such a Lovely Place"



// Grant's tomb question generator

const theQuestion = {

    stem: "Who is buried in Grant's Tomb?",
    option1: "Bill Cosby",
    option2: "Cleopatra",
    option3: "Grant",
    option4: "David Bowie",
    correct: '3',
    display: () => {
        document.querySelector('#stem').textContent = theQuestion.stem
        document.querySelector('#answer1').textContent = theQuestion.option1
        document.querySelector('#answer2').textContent = theQuestion.option2
        document.querySelector('#answer3').textContent = theQuestion.option3
        document.querySelector('#answer4').textContent = theQuestion.option4


    },
    check: (buttonAnswer) => {
        if (buttonAnswer === theQuestion.correct){
            document.querySelector('.feedback').textContent = "You are Correct!!"
        } else {
            document.querySelector('.feedback').textContent = "Oops, Try Again :( "
        }
    }

}


document.querySelector('#answer1').addEventListener('click', () => theQuestion.check('1'))
document.querySelector('#answer2').addEventListener('click', () => theQuestion.check('2'))
document.querySelector('#answer3').addEventListener('click', () => theQuestion.check('3'))
document.querySelector('#answer4').addEventListener('click', () => theQuestion.check('4'))


theQuestion.display()
