import { useState } from "react";

export function useFetch(callback) {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	async function fetching(...args) {
		try {
			setIsLoading(true);
			await callback(...args);
		} catch (e) {
			setError(e.message);
		}
	}

    return [fetching, isLoading, error];
}
