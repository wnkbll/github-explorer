import React from "react";

function Repos({ repos }) {
	return (
		<div className="flex flex-col items-center gap-3">
			{repos.map((repo) => {
				return (
					<div key={repo.id} className="w-1/2 h-56 text-white bg-github-side border-2 border-solid border-github-border rounded-lg mt-2 p-2 hover:border-gray-500">
						{repo.name}
						<img
							className="w-16 h-16 rounded-full"
							src={repo.owner.avatar_url}
							alt={repo.owner.login}
						/>
					</div>
				);
			})}
		</div>
	);
}

export default Repos;
