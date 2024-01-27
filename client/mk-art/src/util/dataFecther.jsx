import { useState, useEffect } from "react";
import axios from '../axiosUrl';

export default function useDataFecther (path) {

    const [data, setData] = useState(null);
    const [error, setError] = useState (null);
    const [loading, setLoading] = useState (null);

    useEffect( () => {
        
       const fetchProfil = async () => {

            try {
                setLoading(true);
                const data = await axios.get(path);
                setData(data.data);
            } catch (err) {
                setError(err);
                setLoading(false);
            } finally {
                setLoading(false);
            }
       }; fetchProfil();


    }, [path]); 

    return {data, error, loading};
}