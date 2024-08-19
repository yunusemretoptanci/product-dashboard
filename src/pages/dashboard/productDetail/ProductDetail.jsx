import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductDetail } from "@/redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import DetailItem from "./DetailItem";
import { Arrow90degLeft } from "react-bootstrap-icons";
import LoadingSkeleton from "./LoadingSkeleton"; // Import the skeleton component

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductDetail(id));
  }, [id]);

  const { selectedProduct, loading } = useSelector((state) => state.products);

  if (loading) {
    return <LoadingSkeleton />;
  }

  const { title, price, description, category, rating, image } =
    selectedProduct;

  return (
    <div className="container rounded shadow-md">
      <div>
        <Link to={`/dashboard/product-list`} className="btn btn-dark mb-4">
          <Arrow90degLeft className="me-2" />
          Back
        </Link>
        <p className="fs-5">Detail Product - Product ID: {id}</p>
        <h1 className="fs-3">{title}</h1>
      </div>
      <div className="row justify-content-between mt-4">
        <div className="col-12 col-md-6">
          <DetailItem label="ID" value={id} />
          <DetailItem label="Name" value={title} />
          <DetailItem label="Price" value={price} />
          <DetailItem label="Description" value={description} />
          <DetailItem label="Category" value={category} />
          <DetailItem label="Rate" value={rating.rate} />
          <DetailItem label="Count" value={rating.count} />
        </div>
        <img
          className="col-12 col-md-4 img-fluid rounded object-fit-contain"
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
}

export default ProductDetail;
