import axios from "axios";

class Requests {
    static async getRepos(username) {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);

        return response.data;
    }
}

export default Requests;
