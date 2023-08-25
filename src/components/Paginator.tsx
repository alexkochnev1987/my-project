import React from "react";

function Paginator({
  page,
  total,
  setPage,
}: {
  page: number;
  total: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex justify-center">
      <ul className="inline-flex -space-x-px text-base h-10">
        {new Array(total / 5).fill(1).map((elem, index) => (
          <li key={index}>
            <span
              onClick={() => setPage(index + 1)}
              className={`${
                page === index + 1
                  ? "text-blue-600 bg-gray-200"
                  : "text-gray-500 bg-white"
              } flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}
            >
              {index + 1}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Paginator;
