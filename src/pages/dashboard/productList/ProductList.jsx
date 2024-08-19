import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "@/redux/productSlice";
import SearchBar from "./SearchBar";
import AddProductButton from "./AddProductButton";
import ProductTable from "./ProductTable";
import DeleteModal from "../../../components/DeleteModal";
import UpdateProductModal from "../../../components/ProductFormModal";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error, actionType } = useSelector(
    (state) => state.products
  );

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [productId, setProductId] = useState(null);
  const [globalFilter, setGlobalFilter] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const toggleDeleteModal = (id) => {
    setProductId(id);
    setShowDeleteModal(!showDeleteModal);
  };

  const toggleUpdateModal = (id) => {
    setModalType("update");
    setProductId(id);
    setShowUpdateModal(!showUpdateModal);
  };

  const toggleCreateModal = () => {
    setModalType("create");
    setShowUpdateModal(!showUpdateModal);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      <div className="mb-3 d-flex flex-md-row flex-column flex-column-reverse justify-content-between align-items-center">
        <SearchBar
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <AddProductButton toggleCreateModal={toggleCreateModal} />
      </div>

      <ProductTable
        products={products}
        loading={loading}
        actionType={actionType}
        globalFilter={globalFilter}
        se
        toggleUpdateModal={toggleUpdateModal}
        toggleDeleteModal={toggleDeleteModal}
      />

      <DeleteModal
        show={showDeleteModal}
        handleDelete={handleDelete}
        cancel={toggleDeleteModal}
        productId={productId}
      />

      <UpdateProductModal
        show={showUpdateModal}
        cancel={toggleUpdateModal}
        productId={productId}
        isUpdate={true}
        modalType={modalType}
      />
    </>
  );
};

export default ProductList;
