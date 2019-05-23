'use strict';

/*
Quiz App 
 
Load the intitial screen - start quiz
    - Render the start page with
        - title (or design of title/quiz)
        - text explaining the the quiz
        - button that once you click loads up the quiz:

        The quiz section
            - Load the following information:
                - 1 image
                 - 1 question
                 - 4 Answer choices
                 - 1 Correct answer
            - The user can select one of the 4 choices
            - The user answer selection is compared to the correct answer and is displayed a results page
                 - You should include same image or a quick video of the bike.
                    - super nice to have - a separate image/video for correct and incorrect answers
                 - If the answers match, then dislplay a message stating that the answer was correct. A quick explanation of the answer would be great as well. Increment the score and total questions by one. 
                 - If the answer do not match, then display a message stating the the answer was incorrect and that the correct answer is "correct answer". Also a quick explanation why the answer is correct should be added. Increment only total questions by one. 
                - A button that you click to take you to the next question, effectively looping this process until you reach the last question. 
            - Once you reach the last question
                - Display the results page
                    - a final hero image
                    - the total score (questions correct / total questions)
                    - total questions (10)
                    - nice to have
                        - if score under 4 - display message about you still have some road left until you become a bike nerd
                        - if between 5 and 8 - say that you are a defenitely a bike fan, you're just not quite the nerd
                        - if 9 and 10 - you are bike nerd. you are KOM
                    - a button that restarts the quiz app, taking you to the start page.

            SOME INITIAL FUNCTIONS THAT YOU NEED TO CREATE:
                - Initial render function that creates/call other functions
                    - it should listen to the button on the start page 
                - Function that renders the question section
                    - it should listen to the answer submission button
                - Function that renders the result of answer
                    - it should listen to the next question button
                    - it should process/match the answer and display the right version
                        - correct
                        - incorrect
            
            Some initial data types/variables you need:
                - Seems like you'll need to create a question object:
                    - Question = {
                        question number: number;
                        Image : string of where image or video is located
                        Question: string consiting of question
                        Answer1 : string consisting of answer 1
                        Answer2 : string consisting of answer 2
                        Answer3 : string consisting of answer 3
                        Answer4 : string consisting of answer 4
                        Correct Answer : is equal to the AnswerX
                        Correct Answer message: string consisting of why answer is the answer.
                        Incorrect Answer message: string consisting of why answer is the answer.
                    }
                - And create an array of these objects, so you can acces them via index
                - You'll also need two counters:
                    - Score (questions correct / total questions)
                    - Total Questions
                        - This counter you can also use as a way to access each object------------------------------------------------------------
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------

function loadQuestion () {
    listens to the start and next question button - receives question counter and score number 
        - if counter is 0 and score are 0, then load first question
        - access the array of objects and find question object with matching question counter value key property and screen print
            - question number (in header)
            - image in image container
            - the question
            - the 4 answers
        also print a submit button to submit chosen answers

        when user clicks on button to submit answer, send the chosen answer value to the displayAnswer function, along with the question object itself
}

function displayAnswer () {
    listens to the submit answer button in the question screen and receives a chosenAnswer value

    takes the chosen answer and compares to the correct answer value in the question object
        - if match, then display a "correct!" message with an answer explanation. Increment score and question counter by one
        - if no match, then display "incorrect!" message with an answer explanation. Increment question counter by one

    if the question counter value is greater than 10 - then load the displayResults function
    else call up the loadQuestion button (send updated counter value and score)
}

function displayResults {
    runs when called up by the displayAnswer function (question counter is greater than 10)
    it displays the following things:
        - total amount of questions (question counter ==== 10)
        - total score / question counter
        -  A results message that is based on score:
            - 1 - 4
            - 5 - 7
            - 8 - 10
        - a button that once clicked will call the loadQuestion function with a question counter and score value of zero

}

*/

let questionIndex = 0;
let score = 0;

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
        questionExplanation : 'The Ironman is won and lost on who can be the most efficient with their energy.  For the 100+ mile bike segment of the race, Ironman athletes are spending as much as 80% of their energy pushing against the wind. A triathlon bike is designed to be as aerodynamic as possible, helping increase energy efficiency.'
    },
    {
        questionImage : './images/cyclocross.jpg',
        questionTitle : 'What type of bike is made for races where you run up hills and jump over barriers?',
        questionAnswers: ['Road','BMX','Cyclocross','Touring'],
        questionCorrectAnswer : 'Cyclocross',
        questionExplanation : 'Cyclocross racing combines many aspects of road, mountain, and criterium racing. Cyclross bikes are designed to race on pavement, wooded trails, grass, steep hills and obstacles requiring the rider to quickly dismount, carry the bike while navigating the obstruction and remount.'
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
        questionTitle : 'What type of bike has only one gear and no freewheel, meaning not being able to coast?',
        questionAnswers: ['Fixed-gear','BMX','Triathlon','Gravel'],
        questionCorrectAnswer : 'Fixed-gear',
        questionExplanation : 'A fixed-gear bicycle, commonly known as a fixie, is a bicycle that has a drivetrain with no freewheel mechanism. The freewheel was developed early in the history of bicycle design but the fixed-gear bicycle remained the standard for track racing. Recently the "fixie" has become a popular for urban cyclists, offering the advantage of simplicity over a standard multi-geared bicycle.'
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
        questionExplanation : 'An electric bicycle, also known as an e-bike, is a bicycle with an integrated electric motor is used for assisted propulsion. There are many kinds of e-bikes for different applications, from pedal assist mountain bikes to long-distance cargo bikes.'
    },
    {
        questionImage : './images/touring.jpg',
        questionTitle : 'What type of bike do you use to travel to across the country, carrying everything you need with you?',
        questionAnswers: ['Downhill','Touring','Fixed-gear','Gravel'],
        questionCorrectAnswer : 'Touring',
        questionExplanation : 'A touring bicycle is a bicycle designed or modified to handle bicycle touring. Bicycle touring means self-contained cycling trips for pleasure, adventure, and autonomy rather than sport, commuting, or exercise. Touring can range from single-to multi-day trips, even years.'
    }
];

const rankingMessages = [
    {
        messageImage: './images/low-score.jpg',
        message : 'You know that a bicycle has two wheels and it can take you anywhere you can pedal it. Nice! If you want to improve your score, check out wikipedia or search for bike types. Hit RESTART when you are ready.'
    },
    {
        messageImage: './images/medium-score.jpg',
        message : 'While you are no slouch with figuring out bike types, you still have a bit more left to learn. Do some wikipedia and search for a bit, then come back and hit RESTART to take the quiz again.'
    },
    {
        messageImage: './images/medium-high.jpg',
        message : 'Wow. You are so close to getting them all right! Take the quiz again and try for a perfect score!'
    },
    {
        messageImage: './images/high-score.jpg',
        message : 'You are a connoisseur of road bikes. Chapeau!'
    }
    
]

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
            <li class="questionScore"><p>Score:</p> <p id="questionScoreCounter">${score}</p></li>
        </ul>
    </section>`);
}

function renderQuestion() {
    const question2Render = questionArray[questionIndex];
    const choices2Render = renderChoices();
    $('#quiz').html(`<img src="${question2Render.questionImage}" alt="${question2Render.questionTitle}" />
    <h3>${question2Render.questionTitle}</h3>
    ${choices2Render}`);

}

function renderChoices() {
    const question2Render = questionArray[questionIndex];
    let renderChoices = `<form id="answerList"><div class="answerGroupContainer">`;
    for (let i =0; i < question2Render.questionAnswers.length; i++) {
        renderChoices += `<div class="answerGroup"><input type="radio" value="${question2Render.questionAnswers[i]}" name="answerList" id="${question2Render.questionAnswers[i]}"><label for="${question2Render.questionAnswers[i]}">${question2Render.questionAnswers[i]}</label></div>`;
    }
    renderChoices += `</div><input type="button" class="actionButton" id="js-chosen-answer" value="SUBMIT ANSWER"/>
    </form>`;
    return renderChoices;
}




function displayAnswer() {
    $('#quiz').on('click', `#js-chosen-answer`, event => {

        event.preventDefault();

        let analyseAnswer = questionArray[questionIndex];
        const choiceValue = $("form input[type='radio']:checked").val();
        let correct = false;

        if (choiceValue === analyseAnswer.questionCorrectAnswer) { 
            score++; 
            correct = true;
            renderHeader();
            renderExplanation(correct, analyseAnswer);
        }

        renderExplanation(correct, analyseAnswer);
    });
}

function renderExplanation(correct, analyseAnswer) {
    const question2Render = questionArray[questionIndex];
    const nextButton = renderNextQuestionButton ();

    if(correct === true){
        $('#quiz').html(`<img src="${question2Render.questionImage}" alt="${question2Render.questionImage}" />
            <h2>CORRECT!</h2>
            <p>${analyseAnswer.questionExplanation}</p>
            <p>Great job!</p>
            ${nextButton}`); 
    } else {
        $('#quiz').html(`<img src="${question2Render.questionImage}" alt="${question2Render.questionImage}" />
            <h2>INCORRECT</h2>
            <p>${analyseAnswer.questionExplanation}</p>
            <p>No worries. You'll get it right next time!</p>
            ${nextButton}`);  
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
    
    $('#quiz').html(`<img src="${rankingResultImage}" alt="placeholder image" />
    <h2>FINAL SCORE: ${score}/${questionArray.length}</h2>
    <p>${rankingResultText}</p>
        <button id="js-quizStarter-button">
            RESTART
        </button>`); 
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