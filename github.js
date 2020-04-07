class GitHub {
	constructor() {
		this.client_id = '2835d082e4438c8e27d7';
		this.client_secret = '5a1cdf11a072f350cce26ea209a52822dad14df6';
	}

	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);
		const profile = await profileResponse.json();

		return {
			profile
		};
	}
}
