class UI {
	constructor() {
		this.profile = document.querySelector('#profile');
	}
	// Show user profile
	showProfile(user) {
		this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn 
            btn-primary btn-block">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>`;
	}

	//Show Repos
	showRepos(repos) {
		let output = '';

		repos.forEach(function(repo) {
			output += `
        <div class=" card card-body mb-2">
          <div class="row">
            <div class=col-md-6"">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class=col-md-6"">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-primary">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
        `;
		});

		// Output repos
		document.querySelector('#repos').innerHTML = output;
	}

	// Show alert message
	showAlert(msg, classes) {
		this.clearAlert();
		// Get parent container
		const parent = document.querySelector('.searchContainer');
		// Create new element
		const alert = document.createElement('div');
		alert.className = classes;
		alert.appendChild(document.createTextNode(msg.toUpperCase()));
		// Insert alert
		parent.insertBefore(alert, document.querySelector('.search'));
		// Timeout after some time
		setTimeout(() => {
			this.clearAlert();
		}, 3000);
	}
	clearAlert() {
		// Get alert
		const alert = document.querySelector('.alert');
		// Check for alert
		if (alert) {
			// Remove alert
			alert.remove();
		}
	}
	// Clear profile section
	clearProfile() {
		this.profile.innerHTML = '';
	}
}
