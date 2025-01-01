import React from "react";
import { Button } from "@mui/material";
import jsPDF from "jspdf";
import { parse } from "json2csv";

const ExportButtons = ({ news, payouts }) => {
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("News and Payout Report", 10, 10);
    doc.text(JSON.stringify({ news, payouts }, null, 2), 10, 20);
    doc.save("report.pdf");
  };

  const exportToCSV = () => {
    const csv = parse(news.map((item) => ({ ...item, payout: payouts[item.author] || 0 })), {
      fields: ["author", "title", "description", "payout"],
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "report.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Button variant="contained" color="primary" onClick={exportToPDF} style={{ marginRight: "10px" }}>
        Export to PDF
      </Button>
      <Button variant="contained" color="secondary" onClick={exportToCSV}>
        Export to CSV
      </Button>
    </div>
  );
};

export default ExportButtons;