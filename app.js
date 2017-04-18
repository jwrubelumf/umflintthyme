(function() {

	// Innitalize Firebase
	const config = {
		apiKey: "AIzaSyCbLpxAIk1ZZrqQwTGOeTkCh_-JUlHZfpQ",
    authDomain: "thyme-resturant-manager.firebaseapp.com",
    databaseURL: "https://thyme-resturant-manager.firebaseio.com",
    projectId: "thyme-resturant-manager",
    storageBucket: "thyme-resturant-manager.appspot.com",
    messagingSenderId: "505008697762"
  };
  firebase.initializeApp(config);

  //Gather User Input
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnLogout = document.getElementById('btnLogout');

  btnLogin.addEventListener('click', e => {
	  //get email and password
		//TODO: CHESCK that input is valid
	  const email = txtEmail.value;
	  const pass = txtPassword.value;
	  const auth = firebase.auth();
		//Sign in
	  const promise = auth.signInWithEmailAndPassword(email, pass);
	  promise.catch(e => console.log(e.message));

  });

	btnLogout.addEventListener('click', e =>{
		firebase.auth().signOut();
	})

	// Create Employees reference
	const dbRefEmployees = firebase.database().ref().child('Employees');

	//Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			console.log(firebaseUser);
			btnLogout.classList.remove('hide');
			loginStatus.innerText = "Log In Successful";
			window.location = "home.html";
			//display employee data
			//firebase.database().ref('Employees').once('value').then(function(snap) {
  			//preObject.innerText = JSON.stringify(snap.val(), null, 3)
			//});

		} else {
			console.log('not logged in');
			btnLogout.classList.add('hide');
			//preObject.innerText = " "; //clears databaseoutput
			loginStatus.innerText = ""; // display logout message

		}
	})

	// =======Real Time Sync of Data ========
	const loginStatus = document.getElementById('loginStatus');
	const preObject = document.getElementById('EmpDisplay');

	//Syn obj changes
	//dbRefEmployees.on('value', snap => {
	//	preObject.innerText = JSON.stringify(snap.val(), null, 3)
	//});


}());
