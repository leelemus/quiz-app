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

const questionArray = [
    {
        questionImage : 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fdarkroom-cdn.s3.amazonaws.com%2F2017%2F07%2FAFP-Getty_TOPSHOT-CYCLING-FRA-TDF2017-FANS.jpg&f=1',
        questionTitle : 'What type of bike is used to compete at the Tour de France?',
        questionAnswers: ['Track','Fatbike','Tricycle','Road'],
        questionCorrectAnswer : 'Road'
    },
    {
        questionImage : 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2015%2F07%2Ftour-de-france-crash.jpg%3Fquality%3D85&f=1',
        questionTitle : 'What type of bike do you race in a velodrome with?',
        questionAnswers: ['Gravel','Triathlon','Track','Cyclocross'],
        questionCorrectAnswer : 'Track'
    }
];

let questionIndex = 0;
let score = 0;

let testScore = true;

function quizStarter() {
    $('#quiz').on('click',`#js-quizStarter-button`, event => {
        questionIndex = 0;
        score = 0;
        renderHeader();
        renderQuestion();
    });
}

function nextQuestion () {
    $('#quiz').on('click', `#js-nextQuestion`, event => {
        questionIndex++;
        if (questionIndex < 2) {
            renderHeader();
            renderQuestion();
        } else {
            displayResults();
        }
    });
}

function renderHeader() {
    let questionCounter = questionIndex + 1;
    $('#scoreboard').html(
    `<section>
        <ul>
            <li>Question: ${questionCounter}/${questionArray.length}</li>
            <li>Score: ${score}</li>
        </ul>
    </section>`);
}

function renderQuestion() {

    const question2Render = questionArray[questionIndex];

    $('#quiz').html(`<img src="${question2Render.questionImage}" alt="placeholder image" />
    <h3>${question2Render.questionTitle}</h3>
                <form id="answerList">
                    <input type="radio" value="${question2Render.questionAnswers[0]}" name="answerList">${question2Render.questionAnswers[0]}<br>
                    <input type="radio" value="${question2Render.questionAnswers[1]}" name="answerList">${question2Render.questionAnswers[1]}<br>
                    <input type="radio" value="${question2Render.questionAnswers[2]}" name="answerList">${question2Render.questionAnswers[2]} <br>
                    <input type="radio" value="${question2Render.questionAnswers[3]}" name="answerList">${question2Render.questionAnswers[3]} <br>
                    <input type="button" id="js-chosen-answer" value="SUBMIT ANSWER"/>
                </form>`);
}

function displayAnswer() {
    $('#quiz').on('click', `#js-chosen-answer`,event => {
        let analyseAnswer = questionArray[questionIndex];
        event.preventDefault();
        const value = $("form input[type='radio']:checked").val();
        if (value === analyseAnswer.questionCorrectAnswer) { 
            score++; 
            renderHeader();
        }

        $('#quiz').html(`<img src="https://www.tenbestvpns.com/wp-content/uploads/2017/06/Watch-Tour-de-France-live-stream.jpg" alt="placeholder image" />
            <h2>RIGHT! WRONG! <a href="./answer.html">This link</a>.</h2>
            <p>Explanation on why the answer is the answer. </p>
            <p>choice: ${value}</p>
            <p>answer: ${analyseAnswer.questionCorrectAnswer}</p>
            <button id="js-nextQuestion">
                GO TO NEXT QUESTION
            </button>`); 
    });
}


function displayResults() {
    $('#quiz').html(`<img src="https://www.tenbestvpns.com/wp-content/uploads/2017/06/Watch-Tour-de-France-live-stream.jpg" alt="placeholder image" />
    <h2>FINAL SCORE: ${score}/${questionArray.length}</h2>
    <p>Pep talk or congratulations text. Let's restart the quiz!</p>
        <button id="js-quizStarter-button">
            RESTART
        </button>`); 
}


function quizApp() {
    quizStarter();
    displayAnswer();
    nextQuestion();
}

$(quizApp);