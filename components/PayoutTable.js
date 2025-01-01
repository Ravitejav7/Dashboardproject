// components/PayoutTable.js
import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from "@mui/material";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

const PayoutTable = ({ news, payouts, setPayouts }) => {
  const handlePayoutChange = (author, amount) => {
    const newPayouts = { ...payouts, [author]: parseFloat(amount) || 0 };
    setPayouts(newPayouts);
    setLocalStorage("payouts", newPayouts);
  };

  return (
    <div>
      <h2>Payout Table</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Author</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Payout</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {news.map((article) => (
              <TableRow key={article.title}>
                <TableCell>{article.author}</TableCell>
                <TableCell>{article.title}</TableCell>
                <TableCell>{article.description}</TableCell>
                <TableCell>
                  <TextField
                    value={payouts[article.author] || 0}
                    onChange={(e) => handlePayoutChange(article.author, e.target.value)}
                    type="number"
                    variant="outlined"
                    size="small"
                    style={{ width: "100px" }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
        onClick={() => alert("Payouts saved!")}
      >
        Save Payouts
      </Button>
    </div>
  );
};

export default PayoutTable;
