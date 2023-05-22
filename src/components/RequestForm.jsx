import React from "react";

function RequestForm({username, setUsername, getRepos}) {
	return (
		<div className="grid grid-cols-3 grid-rows-3 h-screen w-screen bg-github-main place-items-center">
			<div className="col-start-2 col-end-3 row-start-2 row-end-3 grid grid-cols-1 grid-rows-3 w-80 h-96 bg-slate-100 border-2 border-solid border-github-border rounded-md place-items-center">
				<div className="row-start-2 row-end-3 h-64 w-64">
					<label htmlFor="username" className="w-64 block mb-2">
						Enter username
					</label>
					<input
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						id="username"
						type="text"
						className="w-64 bg-slate-100 border-2 border-solid border-github-main rounded-md outline-none px-2 mb-2"
						placeholder="wnkbll"
					/>
					<button
						onClick={getRepos}
						className="w-64 border-2 border-solid border-github-main rounded-md hover:bg-gray-300"
					>
						Search
					</button>
				</div>
			</div>
		</div>
	);
}

export default RequestForm;
