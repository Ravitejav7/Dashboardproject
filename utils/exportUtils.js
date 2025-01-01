import jsPDF from "jspdf";
import { parse } from "json2csv";

export const exportToPDF = (data, filename = "report.pdf") => {
  const doc = new jsPDF();
  doc.text("Exported Data", 10, 10);
  doc.text(JSON.stringify(data, null, 2), 10, 20);
  doc.save(filename);
};

export const exportToCSV = (data, fields, filename = "report.csv") => {
  const csv = parse(data, { fields });
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};