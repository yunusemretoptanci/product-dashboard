import React from 'react';

const DetailItem = ({ label, value }) => {
  return (
    <div className="row mb-2">
      <div className="col-6">
        <p className="text-muted">{label}:</p>
      </div>
      <div className="col-6">
        <p className='fw-semibold'>{value}</p>
      </div>
    </div>
  );
};

export default DetailItem;
