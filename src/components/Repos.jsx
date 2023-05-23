import React from "react";

function Repos({ repos }) {
	return (
		<div className="flex flex-col items-center gap-5">
			{repos.map((repo) => {
				return (
					<div key={repo.id} className="w-1/2 h-56 p-2 bg-white">
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
