import { useState } from "react";
import { Eye, Download, FileDown, FileSpreadsheet } from "lucide-react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const rows = [
  { date: "2025-08-01", entered: 120, left: 100, present: 20, result: "OK" },
  { date: "2025-08-02", entered: 150, left: 130, present: 20, result: "OK" },
  { date: "2025-08-03", entered: 110, left: 90, present: 20, result: "OK" },
  { date: "2025-08-04", entered: 180, left: 160, present: 20, result: "OK" },
  { date: "2025-08-05", entered: 200, left: 150, present: 50, result: "Alert" },
  { date: "2025-08-06", entered: 95, left: 90, present: 5, result: "OK" },
  { date: "2025-08-07", entered: 140, left: 120, present: 20, result: "OK" },
  { date: "2025-08-08", entered: 120, left: 100, present: 20, result: "OK" },
  { date: "2025-08-09", entered: 150, left: 130, present: 20, result: "OK" },
  { date: "2025-08-10", entered: 110, left: 90, present: 20, result: "OK" },
  { date: "2025-08-11", entered: 180, left: 160, present: 20, result: "OK" },
  { date: "2025-08-12", entered: 200, left: 150, present: 50, result: "Alert" },
  { date: "2025-08-13", entered: 95, left: 90, present: 5, result: "OK" },
  { date: "2025-08-14", entered: 140, left: 120, present: 20, result: "OK" },
];

const rowsPerPage = 10;

export default function Table() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(rows.length / rowsPerPage);
  const start = (page - 1) * rowsPerPage;
  const selectedRows = rows.slice(start, start + rowsPerPage);

  // Exportar a Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, "table-data.xlsx");
  };

  // Exportar a PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Table Data", 14, 10);
    (doc as any).autoTable({
      head: [["Date", "Entered", "Left", "Present", "Result"]],
      body: rows.map((r) => [r.date, r.entered, r.left, r.present, r.result]),
    });
    doc.save("table-data.pdf");
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* Header con botones de exportación */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg text-indigo-950 font-bold">Estadísticas</h2>
        <div className="flex gap-2">
          <button
            onClick={exportToExcel}
            className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
          >
            <FileSpreadsheet className="w-4 h-4" /> Excel
          </button>
          <button
            onClick={exportToPDF}
            className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
          >
            <FileDown className="w-4 h-4" /> PDF
          </button>
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-y-auto max-h-64">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-indigo-100 text-gray-700 uppercase text-xs ">
            <tr>
              <th className="px-4 py-2 text-left">Statistics Time</th>
              <th className="px-4 py-2 text-left">People Entered</th>
              <th className="px-4 py-2 text-left">People Left</th>
              <th className="px-4 py-2 text-left">People Present</th>
              <th className="px-4 py-2 text-left">Result</th>
            </tr>
          </thead>
          <tbody>
            {selectedRows.map((row, i) => (
              <tr
                key={i}
                className="border-b odd:bg-white even:bg-gray-50 text-gray-700"
              >
                <td className="px-4 py-2">{row.date}</td>
                <td className="px-4 py-2">{row.entered}</td>
                <td className="px-4 py-2">{row.left}</td>
                <td className="px-4 py-2">{row.present}</td>
                <td className="px-4 py-2">{row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          className="px-3 py-1 text-white rounded bg-indigo-600 hover:bg-indigo-800 disabled:opacity-90"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Anterior
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded ${
                page === i + 1
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          className="px-3 py-1 text-white rounded bg-indigo-600 hover:bg-indigo-800 disabled:opacity-80"
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
