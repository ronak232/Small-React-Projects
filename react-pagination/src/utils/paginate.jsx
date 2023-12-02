const paginate = (viewsItems) => {
  const itemsPerPage = 10; // number of items per page
  const totalPages = Math.ceil(viewsItems.length / itemsPerPage); // number of pages to display items per page

  const newItemsArray = Array.from({ length: totalPages }, (_, index) => {
    const start = index * itemsPerPage; //Calculates the starting index for each chunk based on the current index and the itemsPerPage
    return viewsItems.slice(start, start + itemsPerPage); // Slice the array to create a chunk/subarray
  });
  return newItemsArray;
};

export default paginate;
