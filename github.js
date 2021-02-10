class GitHub{
    constructor(){
        this.client_id = '5e4b71bfe1d7a4c8d576';
        this.client_secret = '1a1ac714529750786076b95d97b554dd00ddf487';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        console.log(repos);
        return {profile, repos}
        
    }

}