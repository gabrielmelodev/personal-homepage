var axios = require('axios');
class GitHubUserService {

    getByUsername(username) {
        return axios.get('https://api.github.com/users/gabriehmelo');
    }



    getReposByUsername(username) {
        return axios.get('https://api.github.com/users/gabrielhmelo/repos');
    }
}

export default new GitHubUserService();