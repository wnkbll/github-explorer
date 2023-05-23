import React from "react";

function Error() {
	return (
		<main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
			<div class="text-center">
				<p class="text-base font-semibold text-white">404</p>
				<h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
					Page not found
				</h1>
				<p class="mt-6 text-base leading-7 text-white">
					Sorry, we couldn’t find the page you’re looking for.
				</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a
						href="#"
						class="rounded-md bg-github-side border-2 border-solid border-github-border px-3.5 py-2.5 text-sm font-semibold text-white hover:border-gray-500"
					>
						Go back home
					</a>
				</div>
			</div>
		</main>
	);
}

export default Error;
