import { useEffect, useState } from 'react'


export function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchData() {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return data;
}