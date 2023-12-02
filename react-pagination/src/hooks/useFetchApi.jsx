import { useEffect, useState } from "react";
import paginate from "../utils/paginate";

function useFetchApi() {
  const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
  const [responseData, setResponseData] = useState([] || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url);
        const response = await data.json();
        setResponseData(paginate(response));
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
