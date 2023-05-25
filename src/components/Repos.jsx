import React from "react";

function Repos({ repos }) {
	return (
		<div className="flex flex-col items-center">
			{repos.map((repo) => {
				return (
					<div
						key={repo.id}
						className="flex flex-row items-center w-1/2 h-24 text-white font-semibold bg-github-side border-2 border-solid border-github-border rounded-lg mt-2 p-2 cursor-pointer hover:border-gray-500 hover:bg-gray-900"
						onClick={() => window.open(repo.html_url)}
					>
						<img
							className="w-16 h-16 rounded-full"
							src={repo.owner.avatar_url}
							alt={repo.owner.login}
						/>
						{repo.name}
					</div>
				);
			})}
		</div>
	);
}

export default Repos;
