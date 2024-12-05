import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = () => {
  return (
    <section>
      <div className="flex items-center justify-end space-x-2 mt-6">
        {/* Previous Button (disabled) */}
        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed">
          <FiChevronLeft className="w-4 h-4" />
        </button>

        {/* Page Numbers */}
        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border-2 border-purple-500 text-purple-500 font-semibold">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-gray-700 hover:bg-blue-100">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-gray-400 cursor-default">
          ...
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-gray-700 hover:bg-blue-100">
          9
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-gray-700 hover:bg-blue-100">
          10
        </button>

        {/* Next Button */}
        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-500 text-white hover:bg-blue-600">
          <FiChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default Pagination;
