// components/PropertyGrid.jsx
import { useState } from "react";
import PropertyCard from "./PropertyCard";

export default function PropertyGrid({ listing }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(listing.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentListings = listing.slice(startIdx, startIdx + itemsPerPage);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto mt-24 px-4">
      {listing.length === 0 ? (
        <div className="text-center py-32 -mt-[10rem]">
          <img
            src="/assets/images/search.png"
            alt="No properties"
            className="mx-auto w-40 h-40 mb-6 opacity-50 animate-shake"
          />
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">No properties found</h2>
          <p className="text-gray-500">Try adjusting your filters or search again.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {currentListings.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="flex justify-center my-20 space-x-2">
            <button onClick={() => goToPage(currentPage - 1)} className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300">
              &lt;
            </button>

            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === idx + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {idx + 1}
              </button>
            ))}

            <button onClick={() => goToPage(currentPage + 1)} className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300">
              &gt;
            </button>
          </div>
        </>
      )}
    </div>
  );
}

