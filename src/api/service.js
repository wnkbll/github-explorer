import { Octokit } from "octokit";

class Service {
    constructor() {
        this.octokit = new Octokit({
            auth: "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",
        });

        this.getReposByUsername = this.getReposByUsername.bind(this);
    }

    async getReposByUsername(username) {
        return (
            await this.octokit.request("GET /users/{username}/repos", {
                username: username,
                headers: {
                    "X-GitHub-Api-Version": "2022-11-28",
                },
            })
        );
    }
}

export default Service;
