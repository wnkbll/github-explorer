import React, { useState } from "react";
import Requests from "../api/requests";
import { useFetch } from "../hooks/useFetch";

function RequestForm() {
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
		<div className="grid grid-cols-3 grid-rows-3 h-screen w-screen place-items-center">
			<div className="col-start-2 col-end-3 row-start-2 row-end-3">
				<div className="h-64 w-64">
					<label htmlFor="username" className="w-64 block mb-2">
						Enter username
					</label>
					<input
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						id="username"
						type="text"
						className="w-64 border-2 border-solid border-gray-500 rounded-md outline-none px-2 mb-2"
						placeholder="wnkbll"
					/>
					<button
						onClick={getRepos}
						className="w-64 border-2 border-solid border-gray-500 rounded-md hover:bg-gray-100"
					>
						Make request
					</button>
				</div>
			</div>
		</div>
	);
}

export default RequestForm;
