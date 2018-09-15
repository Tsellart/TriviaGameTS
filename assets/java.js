$(document).ready(function() {
    var rightAnswers = 0;
    var incorrectAnswers = 0;
    var questionOne = {
        question = 'What is Mike Stoklasas favorite TV show?',
        answerList = ['A. Star Trek','B. Danny Phantom','C. Ghost Goons','D. Ghost Reporters'],
        answer = 'A. Star Trek',

    };
    var questionTwo = {
        question = 'Rich Evans is constantly losing his...?',
        answerList = ['A. Cool','B. Hair','C. Diabetes Medicine','D. Star Wars Fan Script'],
        answer = 'C. Diabetes Medicine',

    };
    var questionThree = {
        question = 'Jay Bauman considers himself a..?',
        answerList = ['A. God','B. Writer','C. Bicycle Rider','D. Film Buff'],
        answer = 'D. Film Buff',

    };
    var questionFour = {
        question = 'What is RedLetterMedias review show called?',
        answerList = ['A. Bag and a Half','B. Its in the bag','C. Big Bag Boyz','D. Half in the Bag'],
        answer = 'D. Half in the Bag',

    };
    var questionfive = {
        question = 'What format videos are featured in Best of the Worst',
        answerList = ['A. DvDs','B. VHS','C. Laserdisc','D. Betamax'],
        answer = 'B. VHS',

    };
    var questionSix = {
        question = 'What is the ultimate Scam Movie?',
        answerList = ['A. Jack and Jill','B. Liar, Liar','C. Downsizing','D. Ghost'],
        answer = 'A. Jack and Jill',

    };
    var questionList = [questionOne,questionTwo,questionThree,questionFour,questionfive,questionSix];

    function summonQuestion(questionChoice) {
        countdownTimer.reset();
        $('#Q').html('<h2>' + questionList[questionChoice].question + '</h2>')
        $('#answerA').text(questionList[questionSelection].answerList[0]).show();
        $('#answerB').text(questionList[questionSelection].answerList[1]).show();
        $('#answerC').text(questionList[questionSelection].answerList[2]).show();
        $('#answerD').text(questionList[questionSelection].answerList[3]).show();
    }
    var count = 0;
    var Timer = {
        time : 30,
        reset:function() {
            this.time = 30;
            $('#timer').html('<h1>' + this.time);
        },
        start: function () {
            counter = setInterval(Timer.count, 1000);
        },
        stop: function() {
            clearInterval(counter);
        },
        count: function() {
            countdownTimer.time--;
            console.log(countdownTimer);
            if (countdownTimer >= 0) {
                $('#timer').html('<h1>' + countdownTimer + ' seconds left! </h1>')
            }
            else {
                count++;
                answerWrong();
                countdownTimer.reset();
                if (count < questionList.length) {
                    summonQuestion(count);

                } else {
                    $("#aChoice").hide();
                    yourScore();
                }
            }
        }
    };
})
