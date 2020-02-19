class Github {
  constructor() {
    this.client_id = 'e097b80cd324eba4968b';
    this.client_secret = 'd773b89f8dc366c4b01765bd805bd3bac22582cb';
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
