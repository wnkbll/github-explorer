import React from "react";

function Repos({ repos }) {
	return (
		<div className="h-screen w-screen bg-github-main">
			{repos.map((repo) => {
				return (
					<div key={repo.id} className="text-white">
						{repo.name}
					</div>
				);
			})}
		</div>
	);
}

export default Repos;
