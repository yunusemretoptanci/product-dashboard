import React from "react";

function RedirectModal({ show }) {
  if (!show) return null;

  return (
    <div
      className="modal show d-flex align-items-center"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title m-auto">Registration Successful!</h5>
          </div>
          <div className="modal-body">
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            <p className="text-center mt-3">
              Registration is complete. You will be redirected to your dashboard
              shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedirectModal;
