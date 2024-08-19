import { useEffect } from "react";
import Spinner from "./Spinner";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct, addProduct } from "@/redux/productSlice.jsx"; // Path to your productSlice
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be positive"),
  category: Yup.string().required("Category is required"),
  image: Yup.string().url("Invalid URL").required("Image URL is required"),
});

function ProductFormModal({ show, cancel, productId, modalType }) {
  if (!show) return null;
  const dispatch = useDispatch();
  const { products,loading } = useSelector((state) => state.products);
  console.log(products);
  const product = products.find((product) => product.id === productId);

  const initialValues = {
    title: product?.title || "",
    price: product?.price || "",
    category: product?.category || "",
    image: product?.image || "",
  };

  const handleSubmit = async (values) => {
    if (modalType=="update") {
      await dispatch(updateProduct({ id: productId, product: values }));
    } else {
      await dispatch(addProduct(values));
    }
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
            <h5 className="modal-title">
              {modalType == "update" ? "Update Product" : "Create New Product"}
            </h5>
          </div>
          <div className="modal-body">
            {loading ? (
              <div className="d-flex flex-column mb-2 justify-content-center align-items-center">
                <p className="text-center mt-3 p-2">
                  {modalType =="update" ? "Updating" : "Creating"} product. Please wait...
                </p>
                <Spinner />
              </div>
            ) : (
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, handleChange }) => (
                  <Form>
                    {/* Form fields here */}
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Title
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="price" className="form-label">
                        Price
                      </label>
                      <Field
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        value={values.price}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="price"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="category" className="form-label">
                        Category
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="category"
                        name="category"
                        value={values.category}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="category"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="image" className="form-label">
                        Image URL
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="image"
                        name="image"
                        value={values.image}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="image"
                        component="div"
                        className="text-danger"
                      />
                    </div>

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
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                      >
                        {modalType=="update" ? "Update" : "Create"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFormModal;
