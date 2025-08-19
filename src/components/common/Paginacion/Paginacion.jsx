import React from "react";
import styles from "./Pagination.module.css";
import Button from "../Button/Button";
import { usePagination } from "../../../hooks/UsePagination";

const Pagination = ({ currentPage, totalPages, onPageChange, maxVisiblePages = 5 }) => {
  const pages = usePagination({ currentPage, totalPages, maxVisiblePages });

  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination} aria-label="nav">
      <Button onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        «
      </Button>

      <Button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        ‹
      </Button>

      {pages[0] > 1 && <span className={styles.ellipsis}>...</span>}

      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? styles.active : ""}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </Button>
      ))}

      {pages[pages.length - 1] < totalPages && <span className={styles.ellipsis}>...</span>}

      <Button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        ›
      </Button>

      <Button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
        »
      </Button>
    </div>
  );
};

export default Pagination;
