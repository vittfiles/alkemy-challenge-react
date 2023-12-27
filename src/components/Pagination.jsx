import { useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
// 👆 classic theme, see below for other theme / css options

function Pagination({ totalPages, currentPage, updatePage }) {
  const [cp, setCp] = useState(currentPage);
  useEffect(() => {
    setCp(currentPage);
  }, []);
  const handleChange = (newPage) => {
    updatePage(newPage);
    setCp(newPage);
  };
  return (
    <ResponsivePagination
      current={cp}
      total={totalPages}
      onPageChange={handleChange}
    />
  );
}

export default Pagination;
