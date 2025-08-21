import { useState } from "react";
import { tableData } from "../data/tableData";
import FilterDropdown from "./FilterDropdown";
import SearchInput from "./SearchInput";
import { FileDown, FileText } from "lucide-react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const rowsPerPage = 10;

export default function FilterableTable() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<string[]>([]);

  const uniqueResults = Array.from(new Set(tableData.map((r) => r.result)));

  const filteredData = tableData.filter((row) => {
    const matchesSearch =
      row.date.toLowerCase().includes(search.toLowerCase()) ||
      row.result.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filters.length === 0 || filters.includes(row.result);
    return matchesSearch && matchesFilter;
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const start = (page - 1) * rowsPerPage;
  const selectedRows = filteredData.slice(start, start + rowsPerPage);

  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Report");
    XLSX.writeFile(wb, "report.xlsx");
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Reporte de Datos", 14, 10);
    (doc as any).autoTable({
      head: [["Fecha", "Entered", "Left", "Present", "Result"]],
      body: filteredData.map((r) => [
        r.date,
        r.entered,
        r.left,
        r.present,
        r.result,
      ]),
    });
    doc.save("report.pdf");
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* Controles */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        {/* Filtros a la izquierda */}
        <div className="flex gap-2">
          <FilterDropdown
            label="Resultados"
            options={uniqueResults}
            selected={filters}
            onChange={(newFilters) => {
              setFilters(newFilters);
              setPage(1);
            }}
          />
        </div>

        {/* Search + Export a la derecha */}
        <div className="flex items-center gap-2">
          <SearchInput value={search} onChange={setSearch} placeholder="Buscar..." />
          
          <button
            onClick={exportExcel}
            className="flex items-center gap-1 px-3 py-2 text-sm bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            <FileDown className="h-4 w-4" /> Excel
          </button>

          <button
            onClick={exportPDF}
            className="flex items-center gap-1 px-3 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            <FileText className="h-4 w-4" /> PDF
          </button>
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-y-auto max-h-64">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-indigo-100 text-gray-700 uppercase text-xs">
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

      {/* Paginación */}
      <div className="flex justify-between items-center mt-4">
        <button
          className="px-3 py-1 text-white rounded bg-indigo-600 hover:bg-indigo-800 disabled:opacity-70"
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
          className="px-3 py-1 text-white rounded bg-indigo-600 hover:bg-indigo-800 disabled:opacity-70"
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
