function askQuestions() {

	// Comment possibility
	/* Comment possibility */

	var firstName = prompt('WHat is your first name?');

	var lastName = prompt('What is your lastname');

	var fullName = firstName + ' ' + lastName;
	$('h2').text('Hello ' + fullName);

	if (firstName == 'General' && lastName != 'Assembly') {
		alert('Let the force be with you');
	} else {
		alert(' bye bye')
	}

	var userAge = prompt('How old are you?');
	userAge = parseInt(userAge);

	if (isNaN(userAge)) {
		alert('Try again! Refresh your browser');
	}


	if (userAge >= 18) {
		console.log('Come on in!');
	} else if (userAge >= 13) {
		console.log('Come back in a few years!');
	} else { 
		console.log('Go away child!');
    }
}

// When the page loads
$(document).on('ready', function(){

	$('img').on('click', askQuestions);


	// Hide all the sections

	$('h3').next().hide();

	//When the user clicks an h3

        $('h3').on('click', function() {

			//Find the enxt element and hide it

            $(this).next().slideToggle(); 

   });

});
