import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  Trash2, Filter, Download, Plus, ArrowUpDown
} from "lucide-react";

const AdminTable = ({ data, columns, tableName, lastUpdated }) => {
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    // === CONTAINER UTAMA (Sesuai Token Figma) ===
    // Border: #EAECF0, Radius: 8px (rounded-lg)
    <div className="bg-white rounded-lg border border-[#EAECF0] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] overflow-hidden">

      {/* === HEADER SECTION === */}
      <div className="p-6 border-b border-[#EAECF0]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          
          {/* KIRI: Judul & Deskripsi */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              {/* Judul: #101828 */}
              <h2 className="text-lg font-medium text-[#101828]">{tableName}</h2>
              {/* Badge: bg-[#FFF4F0] text-[#7A2E11] */}
              {lastUpdated && (
                <span className="bg-[#FFF4F0] text-[#7A2E11] text-xs px-2.5 py-0.5 rounded-full font-medium">
                  Last Updated: {lastUpdated}
                </span>
              )}
            </div>
            {/* Deskripsi: #667085 */}
            <p className="text-[#667085] text-sm leading-relaxed">
              View and manage records here. You can review, confirm, or update details.
            </p>
          </div>

          {/* KANAN: Tombol Actions */}
          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            {/* Tombol Delete */}
            <button className="flex items-center gap-2 text-[#344054] hover:text-red-600 transition text-sm font-medium px-4 py-2.5 border border-transparent hover:bg-gray-50 rounded-lg whitespace-nowrap">
              <Trash2 size={18} />
              Delete
            </button>
            
            {/* Tombol Filter */}
            <button className="flex items-center gap-2 text-[#344054] hover:text-gray-900 transition text-sm font-medium px-4 py-2.5 border border-transparent hover:bg-gray-50 rounded-lg whitespace-nowrap">
              <Filter size={18} />
              Filters
            </button>
            
            {/* Tombol Export (Bordered) */}
            <button className="flex items-center gap-2 text-[#344054] border border-[#D0D5DD] rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-gray-50 transition shadow-sm whitespace-nowrap">
              <Download size={18} />
              Export
            </button>
            
            {/* Tombol Add New (Primary) */}
            <button className="flex items-center gap-2 bg-[#7A2E11] text-white rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-[#5f230d] transition shadow-sm whitespace-nowrap">
              <Plus size={18} />
              Add new CTA
            </button>
          </div>
        </div>
      </div>

      {/* === TABEL ACTUAL === */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px] border-collapse">
          {/* THEAD Background: #FCFCFD */}
          <thead className="bg-[#FCFCFD] border-b border-[#EAECF0]">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="text-left py-3 px-6 text-xs font-medium text-[#667085] uppercase tracking-wide cursor-pointer select-none hover:bg-gray-100 transition h-[44px]"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center gap-1">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <ArrowUpDown size={14} className="text-[#7A2E11]" />,
                        desc: <ArrowUpDown size={14} className="text-[#7A2E11] rotate-180" />,
                      }[header.column.getIsSorted()] ?? (
                        <ArrowUpDown size={14} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          
          <tbody className="divide-y divide-[#EAECF0]">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-[#FAFAFA] transition-colors bg-white"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="py-4 px-6 text-sm text-[#101828]">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* === FOOTER PAGINATION/INFO (Optional Placeholder) === */}
      <div className="p-4 border-t border-[#EAECF0] bg-white flex justify-between items-center">
         <span className="text-sm text-[#667085]">Page 1 of 10</span>
         <div className="flex gap-2">
            <button className="px-3 py-2 border border-[#D0D5DD] rounded-lg text-sm font-medium text-[#344054] disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-2 border border-[#D0D5DD] rounded-lg text-sm font-medium text-[#344054]">Next</button>
         </div>
      </div>

    </div>
  );
};

export default AdminTable;