import { useEffect, useState } from "react";

function useFetchApi(url) {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url);
        const response = await data.json();
        setResponseData(response.photos);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);
  return { responseData, loading };
}

export default useFetchApi;
