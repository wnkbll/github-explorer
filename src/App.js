import React, { useState } from "react";
import RequestForm from "./components/RequestForm";
import { useFetch } from "./hooks/useFetch";
import Requests from "./api/requests";

function App() {
	const [username, setUsername] = useState("");
	const [repos, setRepos] = useState([]);

	const [fetchingRepos, isLoading, error] = useFetch(async (username) => {
		const response = await Requests.getRepos(username);

		return response;
	});

	function getRepos() {
		setRepos([...repos, fetchingRepos(username)]);
	}

	return (
		<RequestForm username={username} setUsername={setUsername} getRepos={getRepos} />
	);
}

export default App;
