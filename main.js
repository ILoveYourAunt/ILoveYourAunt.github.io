  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAFl_J3uEcMFmJdFfphnOQUo9YBDidsXC4",
    authDomain: "quiz-project-24fb2.firebaseapp.com",
    databaseURL: "https://quiz-project-24fb2.firebaseio.com",
    projectId: "quiz-project-24fb2",
    storageBucket: "quiz-project-24fb2.appspot.com",
    messagingSenderId: "1005026643830",
    appId: "1:1005026643830:web:833ac10d2586af40"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

window.onload = function () {
    var quiz = {
        title: 'SPORT',
        questions: [{
            text: "Wer ist der schnellste Man der Welt?",
            responses: [{
                    text: 'J. Gatlin'
                },
                {
                    text: 'Y. Blake'
                },
                {
                    text: 'U. Bolt',
                    correct: true
                },
            ]
        }, {
            text: "Welches Land hat den 2018 WM-Titel?",
            responses: [{
                    text: 'Portugal'
                },
                {
                    text: 'Frankreich',
                    correct: true
                },
            ]
        }, {
            text: "Michael Jordan war kein...",
            responses: [{
                    text: 'Footballer',
                    correct: true
                },
                {
                    text: 'Baseballer'
                },
                {
                    text: 'Basketballer'
                },
            ]
        }, {
            text: "Die letze Sommer Olympiade fand in...",
            responses: [{
                    text: 'Süd Korea'
                },
                {
                    text: 'Brazilien',
                    correct: true
                },
            ]
        }, {
            text: "Wie viele Minuten dauert ein Basketballspiel?",
            responses: [{
                text: '48',
                correct: true
            },
            {
                text: '36'
            },
        ]
        }]
    };

    new Vue({
        el: '#app',
        data: {
            quiz: quiz,
            questionIndex: 0,
            userResponses: Array(quiz.questions.length).fill(false),
            nickname: '',
        },
        methods: {
            weiter: function () {
                var nickname = document.getElementById('nickname')
                if (nickname == '') {
                    alert('Nickname angeben')
                } else {
                    document.getElementById('section-3').style.display = 'block'
                    document.getElementById('section-3').scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            },
            next: function () {
                this.questionIndex++;

            },
            prev: function () {
                this.questionIndex--;
            },
            writeUserData: function () {
                // window.open geht nicht
                firebase.database().ref('users/' + this.nickname).set({
                    nickname: this.nickname,
                    score: this.score
                });

                document.getElementById('weiter-3').innerHTML = 'Resultat gesendet'
            }
        },
        computed: {
            score: function () {
                return this.userResponses.filter(function (val) {
                    return val
                }).length;
            },

        }
    });

}