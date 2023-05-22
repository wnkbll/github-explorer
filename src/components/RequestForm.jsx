import React from "react";

function RequestForm({ username, setUsername, getRepos }) {
	return (
		<div className="flex justify-center items-center w-screen h-screen bg-github-main">
			<div className="flex justify-center items-center w-80 h-96 bg-slate-100 border-2 border-solid border-github-border rounded-lg">
				<div className="w-64 h-64">
					<label htmlFor="username" className="block w-64 mb-2">
						Enter username
					</label>
					<input
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						id="username"
						type="text"
						className="w-64 bg-slate-100 border-2 border-solid border-github-main rounded-lg outline-none px-2 mb-2"
						placeholder="wnkbll"
					/>
					<button
						onClick={getRepos}
						className="w-64 border-2 border-solid border-github-main rounded-lg hover:bg-gray-300"
					>
						Search
					</button>
				</div>
			</div>
		</div>
	);
}

export default RequestForm;
