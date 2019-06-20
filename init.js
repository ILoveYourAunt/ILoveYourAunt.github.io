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

// Neue Referenz auf DB
var addDB = firebase.database().ref()

// Bei jeglicher Änderung wird ein snap geamcht ---> "grid-1" wird neu geladen und die DOM werden eingefügt.
addDB.on("value", snap => {
    var kill = document.getElementById('grid-1')

    // Der Wert von "grid-1" wir auf 0 gesetzt
    kill.innerHTML = ""

    var db = snap.val()

    // "grid-1" wird erfasst
    var grid = document.getElementById('grid-1')

    // Diese For-Loops bauen den Pfad zu den Schülerdaten auf.
    for (users in db) {
        for (player in db[users]) {
            for (register in db[users][player]) {
                var details = db[users][player][register]
                
                if (register == 'nickname') {

                    // "grid-1-item" wird erstellt + Klasse
                    var newBox = document.createElement('div')
                    newBox.className = 'grid-box-1'

                    // Definiert Parent- und Child-Elemente
                    grid.append(newBox)
                }

                if (register == 'nickname') {

                    var nickname = details

                    // Erstell "p DOM" mit der Klasse "who" und weist es dem "grid-1-item" zu
                    var newName = document.createElement('p')
                    newName.className = 'who'
                    newBox.appendChild(newName)
                    newName.innerHTML = details
                }

                if (register == 'score') {
                    var score = details
                    var newTask = document.createElement('p')
                    newTask.className = 'what'
                    newBox.appendChild(newTask)
                    newTask.innerHTML = score
                }
                
                
            }
        }
        
        
    }
})