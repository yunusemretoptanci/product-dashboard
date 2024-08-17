import Spinner from "./Spinner";
import { deleteProduct } from "@/redux/productSlice"; // Path to your productSlice
import { useDispatch } from "react-redux";

function DeleteModal({ show, loading, cancel, productId }) {
  if (!show) return null;
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dispatch(deleteProduct(productId));
    cancel();
  };

  return (
    <div
      className="modal show d-flex align-items-center justify-content-center"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title m-auto">Delete Product</h5>
          </div>
          <div className="modal-body">
            {!loading && (
              <p className="text-center mt-3">
                Are you sure you want to delete the product?
              </p>
            )}
          </div>

          {loading && (
            <div className="d-flex flex-column mb-2 justify-items-center align-items-center">
              <p className="text-center mt-3 p-2">
                Product is being deleted. Please wait...
              </p>
              <Spinner />
            </div>
          )}
          <div className="modal-footer">
            <button
              onClick={cancel}
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              type="button"
              className="btn btn-danger"
              disabled={loading}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
