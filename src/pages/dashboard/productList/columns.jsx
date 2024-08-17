import { PencilFill, TrashFill } from "react-bootstrap-icons";
export const COLUMNS = [
 /*  {
    Header: "ID",
    accessor: "id",
  }, */
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
        <button className="btn btn btn-primary me-2">
          <PencilFill />
        </button>
        <button className="btn btn btn-danger">
          <TrashFill />
        </button>
      </div>
    ),
    disableSortBy: true, // Disable sorting for actions column
  },
];
