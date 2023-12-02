import React, { useEffect, useState } from "react";
import useFetchApi from "../hooks/useFetchApi";
import FollowersList from "./FollowersList";
function FetchData() {
  const { responseData, loading } = useFetchApi();
  const [currentPage, setCurrentPage] = useState(3);
  const [fetchFollowersData, setFetchFollowersData] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFetchFollowersData(responseData[currentPage]);
  }, [loading,currentPage]); // re-render the loading to set the data when loading true -> false
  
  const handleCurrentpage = (index) => {
    setCurrentPage(index);
  };

  return (
    <>
      {/* //For Example fetching the data from api with 100 or more data.
       //make an array of arrays to set/show limit of data like 5, 10 or 15 per page
       //spilt the whole data into array of array restricting per page data to show
    */}
      <h1>Fetching Paginate</h1>
      <div>
        <div className="container">
          {fetchFollowersData.map((items) => {
            return <FollowersList key={items.id} {...items} />;
          })}
        </div>
        {!loading && (
          <div className="pagination-btn-container">
            {responseData.map((_, index) => {
              return (
                <button
                  
                  key={index}
                  onClick={() => handleCurrentpage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default FetchData;
