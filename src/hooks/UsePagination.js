import { useMemo } from "react";

export const usePagination = ({ currentPage, totalPages, maxVisiblePages }) => {
  return useMemo(() => {
    if (totalPages <= 1) return [];

    //n de páginas visibles si hay
    const half = Math.floor(maxVisiblePages / 2);

    //conteo
    let start = Math.max(1, currentPage - half);

    //conteo
    //para evitar que se salga del rango
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    //si el conteo de páginas visibles es menor que el máximo
    if (end - start + 1 < maxVisiblePages) {
      //ajustomos
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    //retornamos un array con los números de página
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [currentPage, totalPages, maxVisiblePages]);
};

//ver si funciona para reutilizar
