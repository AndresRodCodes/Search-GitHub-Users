// Init GitHub
const github = new GitHub();
//Init UI
const ui = new UI();

// Search input
const searchUser = document.querySelector('#search-user');
// Add Event Listenter
searchUser.addEventListener('keyup', (e) => {
	// Get text
	const userText = e.target.value;
	// Validate search
	if (userText !== '') {
		// Make http call
		github.getUser(userText).then((data) => {
			if (data.profile.message === 'Not Found') {
				// Show Alert
			} else {
				// Show Profile
				ui.showProfile(data.profile);
			}
		});
	} else {
		// Clear profile
		ui.clearProfile();
	}
});
