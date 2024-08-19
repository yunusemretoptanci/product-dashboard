import React, { useMemo } from "react";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import {
  Filter,
  SortDown,
  SortUp,
  PencilFill,
  TrashFill,
  ArrowRightCircleFill,
} from "react-bootstrap-icons";
import Spinner from "../../../components/Spinner";
import "./styles.css";

const ProductTable = ({
  products,
  loading,
  actionType,
  globalFilter,
  toggleUpdateModal,
  toggleDeleteModal,
}) => {
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
      disableSortBy: true,
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
          <button
            title="Edit"
            onClick={() => toggleUpdateModal(row.original.id)}
            className="btn btn-primary me-2"
          >
            <PencilFill />
          </button>
          <button
            title="Delete"
            className="btn btn-danger"
            onClick={() => toggleDeleteModal(row.original.id)}
          >
            <TrashFill />
          </button>
          <button
            title="View"
            className="btn btn-warning ms-2"
            onClick={() => console.log(row.original.id)}
          >
            <ArrowRightCircleFill className="text-white" />
          </button>
        </div>
      ),
      disableSortBy: true,
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
    prepareRow,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);
 state.globalFilter = globalFilter;

  return (
    <div className="table-responsive">
      <table {...getTableProps()} className="table table-striped">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.canSort ? (
                    <span className="ms-1">
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
  );
};

export default ProductTable;
