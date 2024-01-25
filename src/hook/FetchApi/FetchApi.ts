import { IData } from '@/constants/interfaces/interfaces';
import { useEffect, useState } from 'react';


const useFetch = (url: string) => {
    const [data, setData] = useState<IData | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error as Error);
                console.error(error)
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, error, loading };
};

export default useFetch;
