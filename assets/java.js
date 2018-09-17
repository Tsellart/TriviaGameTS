$(document).ready(function() {
    var rightAnswers = 0;
    var incorrectAnswers = 0;
    var questionOne = {
        question : 'What is Mike Stoklasas favorite TV show?',
        answerList : ['A. Star Trek','B. Danny Phantom','C. Ghost Goons','D. Ghost Reporters'],
        answer : 'A. Star Trek',

    };
    var questionTwo = {
        question : 'Rich Evans is constantly losing his...?',
        answerList : ['A. Cool','B. Hair','C. Diabetes Medicine','D. Star Wars Fan Script'],
        answer : 'C. Diabetes Medicine',

    };
    var questionThree = {
        question : 'Jay Bauman considers himself a..?',
        answerList : ['A. God','B. Writer','C. Bicycle Rider','D. Film Buff'],
        answer : 'D. Film Buff',

    };
    var questionFour = {
        question : 'What is RedLetterMedias review show called?',
        answerList : ['A. Bag and a Half','B. Its in the bag','C. Big Bag Boyz','D. Half in the Bag'],
        answer : 'D. Half in the Bag',

    };
    var questionfive = {
        question : 'What format videos are featured in Best of the Worst',
        answerList : ['A. DvDs','B. VHS','C. Laserdisc','D. Betamax'],
        answer : 'B. VHS',

    };
    var questionSix = {
        question : 'What is the ultimate Scam Movie?',
        answerList : ['A. Jack and Jill','B. Liar, Liar','C. Downsizing','D. Ghost'],
        answer : 'A. Jack and Jill',

    };
    var questionList = [questionOne,questionTwo,questionThree,questionFour,questionfive,questionSix];
    
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
            Timer.time--;
            console.log(Timer);
            if (Timer >= 0) {
                $('#timer').html('<h1>' + Timer + ' seconds left! </h1>')
            }
            else {
                count++;
                answerWrong();
                Timer.reset();
                if (count < questionList.length) {
                    summonQuestion(count);

                } else {
                    $("#aChoice").hide();
                    yourScore();
                }
            }
        }
    };
    

    function summonQuestion(questionChoice) {
        Timer.reset();
        $('.Q').html('<h2>' + questionList[questionChoice].question + '</h2>')
        $('.answerA').text(questionList[questionList].answerList[0]).show();
        $('.answerB').text(questionList[questionList].answerList[1]).show();
        $('.answerC').text(questionList[questionList].answerList[2]).show();
        $('.answerD').text(questionList[questionList].answerList[3]).show();
    }
    function setup() {
        count=0
        $('.question').append('<button id="startButton">Start</button>');
        $('.startButton').on('click', function(){
            $(this).hide();
            Timer.start();
            summonQuestion(count);
    

            $('.aChoice').on('click', function() {
                count++;
                $('.Q').text('');
                $('.answerA').text('');
                $('.answerB').text('');
                $('.answerC').text('');
                $('.answerD').text('');
                summonQuestion();
            }
        });
    }
    function correctAnswer(){
        rightAnswers++;
        alert("RIGHT");

    }
    function incorrectAnswer(){
        incorrectAnswers++;
        alert("WRONG");
    }
    function showScore () {
        $('.Q').append("<h3>" + rightAnswers + " right</h3>");
        $('.Q').append("<h3>" + incorrectAnswers + " wrong</h3>");
        Timer.stop();
        $('.timer').empty();

    }
    $('.aChoice').on('click', function(){
        if(this.id == 'answerA') {
            var answer = 'A';
        }else if (this.id == 'answerB'){
            answer = 'B';
        }else if (this.id == 'answerC'){
            answer = 'C';
        }else if (this.id == 'answerD'){
            answer = 'D';
        }
        if ((answer == 'A') && (questionList[count] == true)) {
            correctAnswer();
        }else if (answer == 'A'){
            incorrectAnswer();
        }
        if ((answer == 'B') && (questionList[count] == true)) {
            correctAnswer();
        }else if (answer == 'B'){
            incorrectAnswer();
        }
        if ((answer == 'C') && (questionList[count] == true)) {
            correctAnswer();
        }else if (answer == 'C'){
            incorrectAnswer();
        }
        if ((answer == 'D') && (questionList[count] == true)) {
            correctAnswer();
        }else if (answer == 'D'){
            incorrectAnswer();
        }

        $('.Q').text('');
        $('.answerA').text('');
        $('.answerB').text('');
        $('.answerC').text('');
        $('.answerD').text(''); 
        count++;
        if (count < questionList.length){
            summonQuestion(count);
        }else {
            $('.aChoice').hide();
            showScore();
        }
    })
    
})

