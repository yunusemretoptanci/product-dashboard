import React from "react";

const AddProductButton = ({ toggleCreateModal }) => {
  return (
    <button onClick={toggleCreateModal} className="btn light-green btn-md align-self-end mb-2 mb-md-0">
      Add New Product
    </button>
  );
};

export default AddProductButton;