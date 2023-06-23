import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import LoadingButton from "@mui/lab/LoadingButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import { Record } from "../../data/models/record.model";
import { Operation } from "../../data/models/operation.model";
import InfiniteScroll from "react-infinite-scroll-component";
import { PaginationData } from "../../data/models/pagination.model";
import Loader from "../Loader/Loader";
import { formatCurrency } from "../../lib/utils/formatCurrency";

const createOperationString = ({
  operand1,
  operand2,
  operation,
  result,
  stringResult
}: Operation) => {
  const operationSymbol = {
    ADDITION: "+",
    SUBSTRACTION: "-",
    MULTIPLICATION: "*",
    DIVISION: "/",
    SQUARE_ROOT: "sqrt",
    RANDOM_STRING: "Random string: "
  };
  if (["SQUARE_ROOT"].includes(operation)) {
    return `${operationSymbol[operation]}(${operand1}) = ${result}`;
  }
  if (["RANDOM_STRING"].includes(operation)) {
    return `${operationSymbol[operation]} ${stringResult}`;
  }
  if (["ADD_BALANCE"].includes(operation)) {
    return `Balance added`;
  }
  return `${operand1} ${operationSymbol[operation]} ${operand2} = ${result}`;
};
export default function RecordTable({
  data,
  loading,
  onNextPage,
  onDeleteRecord,
  recordDeletingIdLoading
}: {
  data: PaginationData<Record>;
  loading: boolean;
  onNextPage: () => void;
  onDeleteRecord: (id: string) => void;
  recordDeletingIdLoading: string | null;
}) {
  return (
    <TableContainer component={Paper}>
      <InfiniteScroll
        dataLength={data?.data?.length ?? 0}
        next={onNextPage}
        hasMore={data?.metadata?.hasNext}
        loader={<h3>Loading...</h3>}
        endMessage={<p>No more data</p>}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Operation</TableCell>
              <TableCell>Result</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Balance</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading && (
              <TableRow>
                <TableCell align="center" colSpan={6}>
                  <Loader placeholder="Loading records..." />
                </TableCell>
              </TableRow>
            )}
            {(data?.data ?? []).map(row => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.operation.operation}</TableCell>
                <TableCell component="th" scope="row">
                  {createOperationString(row.operation)}
                </TableCell>
                <TableCell align="right">
                  {formatCurrency(row.amount)}
                </TableCell>
                <TableCell align="right">
                  {formatCurrency(row.userBalance)}
                </TableCell>
                <TableCell align="right">{row.createdAt.toString()}</TableCell>
                <TableCell>
                  <LoadingButton
                    loading={recordDeletingIdLoading === row._id}
                    loadingPosition="start"
                    startIcon={<DeleteIcon />}
                    onClick={() => onDeleteRecord(row._id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </InfiniteScroll>
    </TableContainer>
  );
}
