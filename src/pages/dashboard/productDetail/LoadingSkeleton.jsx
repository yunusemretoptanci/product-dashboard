import React from "react";

function LoadingSkeleton() {
  return (
    <div className="container rounded shadow-md">
      <div className="mb-4">
        <div className="bg-secondary rounded p-3" style={{ height: "2rem", width: "200px" }}></div>
        <div className="bg-secondary rounded mt-2" style={{ height: "1.5rem", width: "150px" }}></div>
      </div>
      <div className="row justify-content-between mt-4">
        <div className="col-12 col-md-6">
          <div className="bg-secondary rounded p-2 mb-2" style={{ height: "1.5rem", width: "100%" }}></div>
          <div className="bg-secondary rounded p-2 mb-2" style={{ height: "1.5rem", width: "100%" }}></div>
          <div className="bg-secondary rounded p-2 mb-2" style={{ height: "1.5rem", width: "100%" }}></div>
          <div className="bg-secondary rounded p-2 mb-2" style={{ height: "1.5rem", width: "100%" }}></div>
          <div className="bg-secondary rounded p-2 mb-2" style={{ height: "1.5rem", width: "100%" }}></div>
          <div className="bg-secondary rounded p-2 mb-2" style={{ height: "1.5rem", width: "100%" }}></div>
        </div>
        <div className="col-12 col-md-4">
          <div className="bg-secondary rounded" style={{ height: "300px", width: "100%" }}></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingSkeleton;
