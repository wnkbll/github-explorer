import { useState } from "react";

export function useFetch(callback) {
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(false);

	async function fetching(...args) {
		try {
			await callback(...args);
			setIsLoaded(true);
		} catch (e) {
			setError(true);
		}
	}

    return [fetching, isLoaded, error, setError];
}
