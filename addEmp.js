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
  const dbRefEmp = firebase.database().ref().child('Employees');
  const empNum = document.getElementById('empNum');
  const empFName = document.getElementById('empFName');
	const empLName = document.getElementById('empLName');
	const empssn = document.getElementById('empssn');

  const btnSubmit = document.getElementById('btnSubmit');

  btnSubmit.addEventListener('click', e => {
	const num = empNum.value;
	const fname = empFName.value;
	const lname = empLName.value;
	const ssn = empssn.value;

	dbRefEmp.child("emp_" + num).set({
		firstName: fname,
		lastName: lname,
		ssn: ssn
	},
		function(error) {
			if (error){
				alert("Data could not be saved." + error);
			} else{
				alert("Data saved successfully.");
				document.getElementById('empNum').value = "";
				document.getElementById('empFName').value = "";
				document.getElementById('empLName').value = "";
				document.getElementById('empssn').value = "";
			  }
		}
	);

  });

  //Sign out Button
	btnLogout.addEventListener('click', e =>{
		firebase.auth().signOut();
	})

	//Listen to see if login status changes
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			console.log(firebaseUser);

		} else {
			console.log('not logged in');
			window.location = "home.html";

		}
	})


}());
