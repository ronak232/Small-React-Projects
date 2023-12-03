import React, { useEffect, useState } from "react";
import useFetchApi from "../hooks/useFetchApi";
import FollowersList from "./FollowersList";
function FetchData() {
  const { responseData, loading } = useFetchApi();
  const [currentPage, setCurrentPage] = useState(0);
  const [fetchFollowersData, setFetchFollowersData] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFetchFollowersData(responseData[currentPage]);
  }, [loading, currentPage]); // re-render the loading to set the data when loading true -> false

  const handleCurrentpage = (index) => {
    setCurrentPage(index);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => {
      let nextPageIndex = prevPage + 1; // increase index by 1 for the next page
      if (nextPageIndex > responseData.length - 1) {
        // check if the length is less than last index value of array
        // will set it to start of the index value
        nextPageIndex = 0;
      }
      return nextPageIndex;
    });
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => {
      let prevPageIndex = prevPage - 1; // decrease index by 1 for the next page
      if (prevPageIndex < 0) {
        // check if the length is less than first index value of array
        // will set to the last index value of array
        prevPageIndex = responseData.length - 1;
      }
      return prevPageIndex;
    });
  };

  return (
    <>
      {/* //For Example fetching the data from api with 100 or more data.
       //make an array of arrays to set/show limit of data like 5, 10 or 15 per page
       //spilt the whole data into array of array restricting per page data to show
    */}
      <h1>Fetching Paginate</h1>
      <div className="user-list">
        <div className="container">
          {fetchFollowersData.map((items) => {
            return <FollowersList key={items.id} {...items} />;
          })}
        </div>

        {!loading && (
          <div className="pagination-btn">
            <button className="prev-page" onClick={prevPage}>
              Prev
            </button>
            {responseData.map((_, index) => {
              return (
                <button key={index} onClick={() => handleCurrentpage(index)}>
                  {index + 1}
                </button>
              );
            })}
            <button className="next-page" onClick={nextPage}>
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default FetchData;
