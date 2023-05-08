<<<<<<< HEAD
import { helper as $h } from "@/utils";
import { Lucide } from "@/base-components";
import classnames from "classnames";
import moment from "moment";

=======
import moment from "moment";

import { helper as $h } from "@/utils";

import classnames from "classnames";

import { Lucide } from "@/base-components";

>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
export const pmidFormatter = function (cell, formatterParams) {
  return moment(cell.getValue()).utc().format("DD-MMM-YYYY");
};

export const CapitalizeFormatter = function (cell, formatterParams) {
  var status = $h.capitalizeFirstLetter(cell.getValue());

  return status == "Paid"
    ? `<div class ="text-success">
    ${status}</div>`
    : `<div class ="text-danger">
    ${status}</div>`;
};

export function SimpleButton(props) {
  const rowData = props.cell._cell.row.data;
  const columnHeader = props.cell._cell.column.field;

<<<<<<< HEAD
  return columnHeader == "credit" && rowData.invoiceStatus == "refund"
    ? $h.formatCurrency(rowData.totalAmount)
    : columnHeader == "debit" && rowData.invoiceStatus == "paid"
    ? $h.formatCurrency(rowData.totalAmount)
=======
  return columnHeader == "credit" && rowData.status == "refund"
    ? $h.formatCurrency(rowData.orderRefId.totalAmount)
    : columnHeader == "debit" && rowData.status == "paid"
    ? $h.formatCurrency(rowData.orderRefId.totalAmount)
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
    : "";
}
export function OrderStatusFormatter(props) {
  const orderStatusCell = props.cell._cell.row.data.orderStatus;
  return (
    <div
      className={classnames({
        "whitespace-nowrap": true,

        "text-green-700": orderStatusCell == "approved",
        "text-success": orderStatusCell == "approval",
        "text-info": orderStatusCell == "processing",
        "text-danger": orderStatusCell == "cancelled",
        "text-warning": orderStatusCell == "packing",
<<<<<<< HEAD
        "text-primary": orderStatusCell == "shipping" || orderStatusCell == "delivered"
=======
        "text-primary": orderStatusCell == "shipping" || orderStatusCell == "delivered",
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      })}
    >
      {$h.capitalizeFirstLetter(orderStatusCell)}
    </div>
  );
}

export function PaymentStatusFormatter(props) {
  const StatusCell = props.cell._cell.row.data.invoiceStatus;

  return (
    <div
      className={classnames({
        "flex items-center  whitespace-nowrap": true,
        "text-success": StatusCell == "paid",
        "text-info": StatusCell == "refund",
<<<<<<< HEAD
        "text-danger": StatusCell == "unpaid"
=======
        "text-danger": StatusCell == "unpaid",
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      })}
    >
      <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />
      {$h.capitalizeFirstLetter(StatusCell)}
    </div>
  );
}
