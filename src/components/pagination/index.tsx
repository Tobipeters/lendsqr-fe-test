import React from "react";
import { NextIcon, PrevIcon } from "../../assets/svg";

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (arg: number) => void;
}

export const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const createPageNumbers = () => {
    const pages = [];

    // Add the three pages before the current page if available
    const startPage = Math.max(1, currentPage - 2);
    for (let i = startPage; i <= currentPage; i++) {
      pages.push(i);
    }

    // Ellipsis between the current block and the last two pages
    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    // Show the last two pages
    for (let i = totalPages - 1; i <= totalPages; i++) {
      if (i > currentPage) {
        pages.push(i);
      }
    }

    return pages;
  };

  const pageNumbers = createPageNumbers();

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className={`${currentPage === 1 ? "disabled" : ""} arrow`}
      >
        <PrevIcon />
      </button>

      {pageNumbers.map((page, index) => (
        <button
          key={index}
          onClick={() => page !== "..." && onPageChange(page as number)}
          className={page === currentPage ? "active" : ""}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        className={`${currentPage === totalPages ? "disabled" : ""} arrow`}
      >
        <NextIcon />
      </button>
    </div>
  );
};
