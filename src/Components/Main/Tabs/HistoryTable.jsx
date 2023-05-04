import React from "react";
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
} from "@mui/material";
import { fetchTransaction, getAccount, fetchToken } from "@wagmi/core";
import { useTransaction, useToken } from "wagmi";

const columns = [
  { id: "Transaction Hash", label: "Transaction Hash", minWidth: 200 },
  { id: "Transaction Type", label: "Transaction Type", minWidth: 100 },
  {
    id: "Index / Token Name",
    label: "Index / Token Name",
    minWidth: 100,
    align: "right",
  },
  {
    id: "Composition",
    label: "Composition",
    minWidth: 100,
    align: "right",
  },
  {
    id: "Age",
    label: "Age",
    minWidth: 100,
    align: "right",
  },
];

const HistoryTable = () => {
  const account = getAccount();

  const { transactionData } = useTransaction({
    hash: account.address,
  });

  const { tokenData } = useToken({
    address: account.address,
  });

  return (
    <React.Fragment>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {transactionData ? (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={JSON.stringify(transactionData)}
                >
                  <TableCell component="th" scope="row">
                    {JSON.stringify(transactionData)}
                  </TableCell>
                  <TableCell>{transactionData}</TableCell>
                  <TableCell align="right">{tokenData?.name}</TableCell>
                  <TableCell align="right">{transactionData.status}</TableCell>
                  <TableCell align="right">{transactionData}</TableCell>
                </TableRow>
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    <Typography variant="subtitle">
                      Your Transaction History will appear here
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </React.Fragment>
  );
};

export default HistoryTable;
