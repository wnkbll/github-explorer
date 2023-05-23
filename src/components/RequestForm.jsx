import React from "react";

function RequestForm({ username, setUsername, getRepos }) {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="flex justify-center items-center w-80 h-96 bg-github-side border-2 border-solid border-github-border rounded-lg">
				<div className="w-64 h-64">
					<label htmlFor="username" className="block w-64 text-white mb-2">
						Enter username
					</label>
					<input
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						id="username"
						type="text"
						className="w-64 text-white bg-github-side border-2 border-solid border-github-border rounded-lg outline-none px-2 mb-2 focus:border-gray-500"
						placeholder="wnkbll"
					/>
					<button
						onClick={getRepos}
						className="w-64 text-white border-2 border-solid border-github-border rounded-lg hover:border-gray-500"
					>
						Search
					</button>
				</div>
			</div>
		</div>
	);
}

export default RequestForm;
