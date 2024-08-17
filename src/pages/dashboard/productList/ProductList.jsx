// components/ProductList.js
import { useMemo, useEffect, useState } from "react";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, deleteProduct } from "@/redux/productSlice"; // Path to your productSlice
import {
  Filter,
  SortDown,
  SortUp,
  Search,
  PencilFill,
  TrashFill,
} from "react-bootstrap-icons";
import "./styles.css";
import Spinner from "../../../components/Spinner";
import DeleteModal from "../../../components/DeleteModal";

const ProductList = () => {
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productId, setProductId] = useState(null);
  const toggleDeleteModal = (id) => {
    setProductId(id);
    setShowDeleteModal(!showDeleteModal);
  };
  const { products, loading, error, actionType } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const COLUMNS = [
    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Category",
      accessor: "category",
    },
    {
      Header: "Image",
      accessor: "image",
      disableSortBy: true, // Disable sorting for image column
      Cell: ({ value }) => (
        <img
          src={value}
          alt="Product"
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
    {
      Header: "Rating",
      accessor: "rating.rate",
    },
    {
      Header: "Actions",
      Cell: ({ row }) => (
        <div className="d-flex">
          <button className="btn btn-primary me-2">
            <PencilFill />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              toggleDeleteModal(row.original.id);
            }}
          >
            <TrashFill />
          </button>
        </div>
      ),
      disableSortBy: true, // Disable sorting for actions column
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => products, [products]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  const { globalFilter } = state;

  return (
    <>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <div>
          <div className="input-group mb-3">
            <span
              className="input-group-text border-0 bg-gray-light"
              id="basic-addon1"
            >
              <Search />
            </span>
            <input
              type="text"
              value={globalFilter || ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="form-control border-0 bg-gray-light fw-semibold"
              placeholder="Search a product"
              aria-label="Search"
            />
          </div>
        </div>
        <button className="btn light-green btn-md">Add New Product</button>
      </div>

      <div className="table-responsive">
        <table {...getTableProps()} className="table table-striped">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className=""
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    {column.canSort ? (
                      <span className="ms-1  ">
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <SortUp />
                          ) : (
                            <SortDown />
                          )
                        ) : (
                          <Filter />
                        )}
                      </span>
                    ) : null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {loading && actionType === "fetch" && (
            <tbody>
              <tr>
                <td colSpan={6} className="text-center">
                  <Spinner />
                </td>
              </tr>
            </tbody>
          )}

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <DeleteModal
        show={showDeleteModal}
        loading={actionType === "delete" && loading}
        handleDelete={handleDelete}
        cancel={toggleDeleteModal}
        productId={productId}
      />
    </>
  );
};

export default ProductList;
