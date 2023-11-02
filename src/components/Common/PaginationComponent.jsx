import React from "react";

const PaginationComponent = ({ count, page, onChange }) => {
  //

  return (
    <div className="pagination">
      <Pagination
        variant="outlined"
        color="primary"
        count={count}
        page={page}
        onChange={onChange}
      />
    </div>
  );
};

export default PaginationComponent;
