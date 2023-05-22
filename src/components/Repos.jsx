import React from "react";

function Repos({ repos }) {
	return (
		<div className="flex items-center flex-col gap-5">
			{repos.map((repo) => {
				return (
					<div key={repo.id} className="w-96 h-56 bg-white">
						{repo.name}
					</div>
				);
			})}
		</div>
	);
}

export default Repos;
