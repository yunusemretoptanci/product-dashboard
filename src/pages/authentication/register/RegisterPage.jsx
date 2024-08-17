import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import RedirectModal from "@/components/RedirectModal";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  username: Yup.string()
    .matches(/^\S*$/, "Username cannot contain spaces")
    .required("Username is required"),
  description: Yup.string(),
});

const RegistrationPage = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      navigate("/dashboard/product-list");
    }, 1500);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Formik
            initialValues={{ name: "", username: "", description: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="d-flex flex-column">
                <div className="mb-3">
                  <h1 className="text-center fs-2">Registration Page</h1>

                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <Field name="name" id="name" className="form-control" />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <Field
                    name="username"
                    id="username"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <Field
                    name="description"
                    as="textarea"
                    id="description"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-dark"
                  disabled={isSubmitting}
                >
                  Register
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <RedirectModal show={showModal} />
    </div>
  );
};

export default RegistrationPage;
