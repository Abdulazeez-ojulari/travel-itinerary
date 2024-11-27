import React from "react";

const LazyLoader: React.FC = () => {
  return (
    <div className="grid place-content-center h-[100svh]">
      <p className="text-center font-medium text-lg mt-3">Loading...</p>
    </div>
  );
};

export default LazyLoader;