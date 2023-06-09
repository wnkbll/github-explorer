import React from "react";

function Error({ setError, setIsLoaded }) {
	function goHome() {
		setError(false);
		setIsLoaded(false);
	}
 
	return (
		<main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
			<div className="text-center">
				<p className="text-base font-semibold text-white">404</p>
				<h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
					Page not found
				</h1>
				<p className="mt-6 text-base leading-7 text-white">
					Sorry, we couldn’t find the page you’re looking for or user has no repos.
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<button
						onClick={goHome}
						className="text-white bg-github-side border-2 border-solid border-github-border rounded-lg hover:border-gray-500 hover:bg-gray-900 px-3.5 py-2.5 font-semibold"
					>
						Go back home
					</button>
				</div>
			</div>
		</main>
	);
}

export default Error;
