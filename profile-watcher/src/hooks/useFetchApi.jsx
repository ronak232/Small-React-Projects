import { useState, useEffect } from "react";

function UseFetchApi() {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/c7fdf1ad-77e3-48c1-95aa-39d4b472c8b4"
        );
        const data = await response.json();
        setResponse(data);
        setLoading(false);
      } catch {
        alert("Error fetching");
      }
    };
    fetchApi();
  }, []);
  return { response, loading };
}

export default UseFetchApi;
