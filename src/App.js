import React, { useState } from "react";
import Error from "./components/Error";
import RequestForm from "./components/RequestForm";
import Repos from "./components/Repos";
import Service from "./api/service";
import { useFetch } from "./hooks/useFetch";

function App() {
	const [username, setUsername] = useState("");
	const [repos, setRepos] = useState([]);

	const [fetchingRepos, isLoaded, error, setError, setIsLoaded] = useFetch(async (username) => {
		const service = new Service();
		const response = await service.getReposByUsername(username);
		setRepos(response.data);
	});

	return (
		error || (repos.length === 0 && isLoaded)
			?	<Error setError={setError} setIsLoaded={setIsLoaded} />
			:	isLoaded
					?	<Repos repos={repos} />
					:	<RequestForm username={username} setUsername={setUsername} getRepos={() => fetchingRepos(username)} />
	);
}

export default App;
