import React from "react";
import styles from "./Pagination.module.css";
import Button from "../Button/Button";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
}) => {
  if (totalPages <= 1) return null;

  //conteo de páginas visibles si hay
  const getPageNumbers = () => {
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pages = getPageNumbers();

  return (
    <div className={styles.pagination} aria-label="nav">
      <Button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        aria-label="primera pagina"
      >
        «
      </Button>

      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="pagina anterior"
      >
        ‹
      </Button>

      {pages[0] > 1 && <span className={styles.ellipsis}>...</span>}

      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? styles.active : ""}
          aria-label={`Página ${page}`}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </Button>
      ))}

      {pages[pages.length - 1] < totalPages && (
        <span className={styles.ellipsis}>...</span>
      )}

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Pagina siguiente"
      >
        ›
      </Button>

      <Button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        aria-label="ultima "
      >
        »
      </Button>
    </div>
  );
};

export default Pagination;
