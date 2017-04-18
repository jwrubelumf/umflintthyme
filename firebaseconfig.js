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

   var name = "";
   console.log(name);
   const greeting =document.getElementById('greeting');


	//Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			console.log(firebaseUser);
			var user = firebase.auth().currentUser;
			
			name = user.email;
			console.log('Welcome: ' + name);
			greeting.innerText = 'Welcome ' + name;

		} else {
			console.log('not logged in');
			window.location = "index.html";


		}
	});
	
	//////////
	const btnLogout = document.getElementById('btnLogout');
	btnLogout.addEventListener('click', e =>{
		firebase.auth().signOut();
	})
	const dbRefEmployees = firebase.database().ref().child('Employees');
	const preObject = document.getElementById('EmpDisplay');
	console.log('Created Employee Reference');
	
	dbRefEmployees.on('value', snap => {
		preObject.innerText = JSON.stringify(snap.val(), null, 3)
	});

}());
