import React, { useState } from "react";
import RequestForm from "./components/RequestForm";
import Repos from "./components/Repos";
import { useFetch } from "./hooks/useFetch";
import Service from "./api/service";
import Error from "./components/Error";

function App() {
	const [username, setUsername] = useState("");
	const [repos, setRepos] = useState([]);

	const [fetchingRepos, isLoading, error] = useFetch(async (username) => {
		const service = new Service();
		const response = await service.getReposByUsername(username);
		setRepos(response.data);
	});

	function getRepos() {
		fetchingRepos(username);
	}

	return (
		error
			?	<Error />
			: 	!isLoading
					?	<RequestForm username={username} setUsername={setUsername} getRepos={getRepos} />
					:	<Repos repos={repos} />
	);
}

export default App;
