'use strict';

const questionArray = [
    {
        questionImage : './images/tour-de-france.jpg',
        questionTitle : 'What type of bike is used to compete at the Tour de France?',
        questionAnswers: ['Track','Fatbike','Cyclocross','Road'],
        questionCorrectAnswer : 'Road',
        questionExplanation : 'While some stages require a specialized bike, such as a time-trial stage needing a namesake bike, the road bike is the type of bike that is required to compete with in the Tour de France.'
    },
    {
        questionImage : './images/velodrome.jpg',
        questionTitle : 'What type of bike do you race in a velodrome with?',
        questionAnswers: ['Gravel','Triathlon','Track','Cyclocross'],
        questionCorrectAnswer : 'Track',
        questionExplanation : 'While you can ride any of these types of bike on a velodrome, the track bike is specifically made to take advatage of the high bank turns and smooth surface of a velodrome.'
    },
    {
        questionImage : './images/bmx.jpg',
        questionTitle : 'What type of bike is used to race in a motocross-like track with?',
        questionAnswers: ['Triathlon','BMX','Fixed-gear','Track'],
        questionCorrectAnswer : 'BMX',
        questionExplanation : 'Invented in South California, the very first BMX bikes were originally modified bicycles inspired by motocross racing. Over time the design was refined to what you see now.'
    },
    {
        questionImage : './images/triathlon.jpg',
        questionTitle : 'What type of bike is used to compete at Ironman?',
        questionAnswers: ['BMX','Touring','Fixed-gear','Triathlon'],
        questionCorrectAnswer : 'Triathlon',
        questionExplanation : 'For the 100+ mile bike segment of the race, Ironman athletes are spending as much as 80% of their energy pushing against the wind. A triathlon bike is designed to be as aerodynamic as possible, helping increase energy efficiency.'
    },
    {
        questionImage : './images/cyclocross.jpg',
        questionTitle : 'What type of bike do you run up hills and jump over barriers with?',
        questionAnswers: ['Road','BMX','Cyclocross','Touring'],
        questionCorrectAnswer : 'Cyclocross',
        questionExplanation : 'Cyclocross combines road, mountain, and criterium racing. Cyclross bikes are designed to for pavement, trails, steep hills and obstacles requiring a quick dismount, carrying the bike while navigating the obstruction, and remounting.'
    },
    {
        questionImage : './images/fatbike.jpg',
        questionTitle : 'What type of bike do you use to ride in the snow and ice?',
        questionAnswers: ['Road','Fatbike','Touring','Triathlon'],
        questionCorrectAnswer : 'Fatbike',
        questionExplanation : 'Built for wide tires that run very low air pressuree, Fatbikes were initially invented for use in snow and sand. But over time, it has been used for other diverse terrain types including pavement and traditional mountain biking trails.'
    },
    {
        questionImage : './images/fixed-gear.jpg',
        questionTitle : 'What type of bike does not allow you to coast?',
        questionAnswers: ['Fixed-gear','BMX','Triathlon','Gravel'],
        questionCorrectAnswer : 'Fixed-gear',
        questionExplanation : 'A fixed-gear bike, better known as fixie, has no freewheel. Used for track racing, the "fixie" has become popular for cyclists looking for a simplicity.'
    },
    {
        questionImage : './images/e-bike.jpg',
        questionTitle : 'What type of bike incorporates a battery to assist you pedaling?',
        questionAnswers: ['Touring','Fatbike','Downhill','E-bike'],
        questionCorrectAnswer : 'E-bike',
        questionExplanation : 'An electric bicycle, also known as an e-bike, is a bicycle with an integrated electric motor is used for assisted propulsion. There are many kinds of e-bikes for different applications, from pedal assist mountain bikes to long-distance cargo bikes.'
    },
    {
        questionImage : './images/gravel.jpg',
        questionTitle : 'What type of bike is made for rough/loose roads and races like the Dirty Kanza?',
        questionAnswers: ['E-bike','BMX','Gravel','Touring'],
        questionCorrectAnswer : 'Gravel',
        questionExplanation : 'A gravel bike is a modified road bike that accepts wider tires. The wider tires allow the bike to be comfortably handled in various terrain, such as gravel, dirt, and pavement.'
    },
    {
        questionImage : './images/touring.jpg',
        questionTitle : 'What type of bike do you use for self-contained long distance trips?',
        questionAnswers: ['Downhill','Touring','Fixed-gear','Gravel'],
        questionCorrectAnswer : 'Touring',
        questionExplanation : 'A touring bicycle is designed for bicycle touring. Bicycle touring are self-contained cycling trips for pleasure, adventure, and autonomy. Touring can range from a single day to years.'
    }
];

const rankingMessages = [
    {
        messageImage: './images/low-score.jpg',
        message : 'You know that a bicycle has two wheels and it can take you anywhere you can pedal it. Nice! Everyone starts somewhere! Try again to see if you can improve your score.'
    },
    {
        messageImage: './images/medium-score.jpg',
        message : 'While you are no slouch, you still have a bit more left to learn. Try remembering what you got wrong and try again to improve your score.'
    },
    {
        messageImage: './images/medium-high.jpg',
        message : 'Wow. You are so close to getting them all right! Take the quiz again and try for a perfect score!'
    },
    {
        messageImage: './images/high-score.jpg',
        message : 'There is no denying it, you are a connoisseur of bikes. Chapeau!'
    }
    
]

let questionIndex = 0;
let score = 0;

function quizStarter() {

    $('#quiz').on('click',`#js-quizStarter-button`, event => {
        questionIndex = 0;
        score = 0;
        renderHeader();
        renderQuestion();
    });
}

function renderHeader() {
    
    let questionCounter = questionIndex + 1;

    $('#scoreboard').html(
        `<h2>Bike Type Quiz</h2>
        <section>
            <ul class="questionScoreBoard">
                <li class="questionScore"><p>Question:</p> <p id="questionScoreCounter">${questionCounter}/${questionArray.length}</p></li>
                <li class="questionScore">
                    <p>Score:</p>
                    <p id="questionScoreCounter">${score}</p>
                </li>
            </ul>
        </section>`
    );
}

function renderQuestion() {

    const question2Render = questionArray[questionIndex];
    const questionAnswers2Render = renderQuestionAnswers();

    $('#quiz').html(
        `<img src="${question2Render.questionImage}" alt="${question2Render.questionTitle}" />
        ${questionAnswers2Render}`
    );

}

function renderQuestionAnswers() {

    const questionAnswers2Render = questionArray[questionIndex];
    let renderquestionAnswers = 
        `<form class="answerList">
        <legend>${questionAnswers2Render.questionTitle}</legend>
            <div class="answerGroupContainer">`;

    for (let i =0; i < questionAnswers2Render.questionAnswers.length; i++) {
        renderquestionAnswers += 
            `<div class="answerGroup">
                <input type="radio" value="${questionAnswers2Render.questionAnswers[i]}" name="answerList" id="${questionAnswers2Render.questionAnswers[i]}" required>
                <label for="${questionAnswers2Render.questionAnswers[i]}">
                    ${questionAnswers2Render.questionAnswers[i]}
                </label>
            </div>`;
    }
        renderquestionAnswers += 
            `</div>
            <input type="submit" class="actionButton" id="js-chosen-answer" value="SUBMIT ANSWER"/>
        </form>`;

    return renderquestionAnswers;
}

function displayAnswer() {

    $('#quiz').on('submit', `#js-chosen-answer`, event => {

        event.preventDefault();
        let analyseAnswer = questionArray[questionIndex];
        const choiceValue = $("form input[type='radio']:checked").val();
        let correct = false;
        
        if (choiceValue === analyseAnswer.questionCorrectAnswer) { 
            score++; 
            correct = true;
            renderHeader();
            renderExplanation(correct);
        }

        renderExplanation(correct);
    });
}

function renderExplanation(correct) {

    const question2Render = questionArray[questionIndex];
    const nextButton = renderNextQuestionButton ();

    if(correct === true){
        $('#quiz').html(
            `<img src="${question2Render.questionImage}" alt="${question2Render.questionImage}" />
            <h2>CORRECT!</h2>
            <p>${question2Render.questionExplanation}</p>
            <p>Great job!</p>
            ${nextButton}`
        ); 
    } else {
        $('#quiz').html(
            `<img src="${question2Render.questionImage}" alt="${question2Render.questionImage}" />
            <h2>INCORRECT</h2>
            <p>${question2Render.questionExplanation}</p>
            <p>No worries. You'll get it right next time!</p>
            ${nextButton}`
        );  
    }
}

function nextQuestion () {

    $('#quiz').on('click', `#js-nextQuestion`, event => {

        questionIndex++;

        if (questionIndex < questionArray.length) {
            renderHeader();
            renderQuestion();
        } else {
            displayResults();
        }
    });
}

function renderNextQuestionButton () {

    let buttonString = "";

    if (questionIndex < questionArray.length - 1) {
       buttonString = `<button id="js-nextQuestion" class="actionButton">NEXT QUESTION</button>`;
    } else {
        buttonString = `<button id="js-nextQuestion" class="actionButton">SEE FINAL SCORE</button>`;
    }

    return buttonString;    
}




function displayResults() {

    let rankingResult = renderResultMessage();
    let rankingResultImage = rankingResult['messageImage'];
    let rankingResultText = rankingResult['message'];
    
    $('#quiz').html(
        `<img src="${rankingResultImage}" alt="placeholder image" />
        <h2>FINAL SCORE: ${score}/${questionArray.length}</h2>
        <p>${rankingResultText}</p>
        <button id="js-quizStarter-button" class="actionButton">
            RESTART
        </button>`
    ); 
}

function renderResultMessage() {

    let rankingResult;

    if (score < (questionArray.length * .5)){
        rankingResult = rankingMessages[0];
    } else if (score > (questionArray.length * .7) && score < (questionArray.length * .9)) {
        rankingResult = rankingMessages[2];
    }
    else if (score === questionArray.length) {
        rankingResult = rankingMessages[3];
    } else {
        rankingResult = rankingMessages[1];
    }

    return rankingResult;
}

function quizApp() {
    quizStarter();
    displayAnswer();
    nextQuestion();
}

$(quizApp);