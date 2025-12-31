import React, {useMemo, useState} from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    flexRender,
    createColumnHelper,
} from '@tanstack/react-table';
import {
    Eye,
    ArrowUpDown,
    Info,
    ChevronLeft,
    ChevronRight,
    MoreHorizontal,
    ChevronDown, ListFilter,
} from 'lucide-react';
import MetricsGrid from "@/components/metrics-grid.jsx";

const AGREEMENTS = [
    {
        agreementNo: "AGR-2025-12-003",
        contractId: "#110",
        contractName: "Dental Care – Contract",
        position: "Dental Assistant",
        userRole: "Applicant",
        otherPartyName: "headhunter 1",
        otherPartyRole: "Publisher",
        statusText: "Enter your fee structure before signing",
        createdDate: "Dec 5, 2025",
        actionType: "fee_sign", // specific trigger for button type
    },
    {
        agreementNo: "AGR-2025-12-002",
        contractId: "#15",
        contractName: "General Medicine – Contract",
        position: "Family Physician / General Practitioner",
        userRole: "Publisher",
        otherPartyName: "headhunter 1",
        otherPartyRole: "Applicant",
        statusText: "Choose agreement type and send to applicant",
        createdDate: "Dec 5, 2025",
        actionType: "pick_send",
    },
    {
        agreementNo: "AGR-2025-12-001",
        contractId: "#9",
        contractName: "Dental Care – Contract",
        position: "General Dentist - test",
        userRole: "Publisher",
        otherPartyName: "Dr. John Professional",
        otherPartyRole: "Applicant",
        statusText: "Agreement fully signed",
        createdDate: "Dec 5, 2025",
        actionType: "download_pdf",
    },
    // Extra dummy data for pagination
    ...Array.from({length: 15}).map((_, i) => ({
        agreementNo: `AGR-2025-12-0${10 + i}`,
        contractId: `#${20 + i}`,
        contractName: "Specialty Surgery – Locum",
        position: "Anesthesiologist",
        userRole: i % 2 === 0 ? "Applicant" : "Publisher",
        otherPartyName: "Medical Staffing Agency",
        otherPartyRole: i % 2 === 0 ? "Publisher" : "Applicant",
        statusText: "Waiting for counter-signature",
        createdDate: "Dec 4, 2025",
        actionType: "view_only",
    })),
];

const RoleBadge = ({role}) => {
    const styles = {
        Applicant: "bg-emerald-100 text-emerald-700",
        Publisher: "bg-blue-100 text-blue-700",
    };
    return (
        <span
            className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold ${styles[role] || "bg-gray-100"}`}>
      {role}
    </span>
    );
};

const ActionButton = ({type}) => {
    switch (type) {
        case "fee_sign":
            return (
                <button
                    className="bg-[#F0A33A] hover:bg-[#F0A33A] cursor-pointer text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors w-[130px]">
                    Enter Fee & Sign
                </button>
            );
        case "pick_send":
            return (
                <button
                    className="bg-[#2D8FE3] hover:bg-[#2D8FE3] cursor-pointer text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors w-[130px]">
                    Pick & Send
                </button>
            );
        case "download_pdf":
            return (
                <button
                    className="bg-[#19B28A] hover:bg-[#19B28A] cursor-pointer text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors w-[130px]">
                    Download PDF
                </button>
            );
        default:
            return (
                <button
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold px-4 py-2 rounded shadow-sm transition-colors w-[130px]">
                    View Details
                </button>
            );
    }
};

const stats = [
    {label: "Total Agreements", value: 5},
    {label: "Pending Your Signature", value: 3},
    {label: "Fully Signed", value: 2},
    {label: "Expired", value: 0},
];

export default function AgreementsPage() {
    const [sorting, setSorting] = useState([]);
    const [pagination, setPagination] = useState({pageIndex: 0, pageSize: 10});

    const columnHelper = createColumnHelper();

    const columns = useMemo(
        () => [
            columnHelper.accessor("agreementNo", {
                header: "Agreement #",
                cell: (info) => <span className="font-medium">{info.getValue()}</span>,
            }),
            columnHelper.accessor("contractId", {
                header: "Contract",
                cell: (info) => (
                    <div className="flex flex-col">
                        <span className="font-bold text-blue-500 hover:underline cursor-pointer text-sm">
                          {info.getValue()}
                        </span>
                        <span className="text-[11px] text-gray-400 font-medium">
                              {info.row.original.contractName}
                            </span>
                    </div>
                ),
            }),
            columnHelper.accessor("position", {
                header: "Position",
                cell: (info) => <span className="text-gray-900 font-medium">{info.getValue()}</span>,
            }),
            columnHelper.accessor("userRole", {
                header: "You",
                cell: (info) => <RoleBadge role={info.getValue()}/>,
            }),
            columnHelper.accessor("otherPartyName", {
                header: "Other Party",
                cell: (info) => (
                    <div className="flex flex-col">
                        <span className="font-medium text-gray-900">{info.getValue()}</span>
                        <span className="text-[11px] text-gray-400">
              ({info.row.original.otherPartyRole})
            </span>
                    </div>
                ),
            }),
            columnHelper.accessor("statusText", {
                header: "Status",
                cell: (info) => <span
                    className="text-gray-700 leading-tight block max-w-[200px]">{info.getValue()}</span>,
            }),
            columnHelper.accessor("createdDate", {
                header: "Created",
                cell: (info) => <span className="text-gray-600 whitespace-nowrap">{info.getValue()}</span>,
            }),
            columnHelper.display({
                id: "actions",
                header: "Action",
                cell: (info) => (
                    <div className="flex items-center gap-2">
                        <ActionButton type={info.row.original.actionType}/>
                        <button
                            className="h-8 w-8 flex items-center justify-center rounded-lg bg-[#F3F4F6]  text-[#2A394B] transition-colors border border-gray-200">
                            <Eye className="h-4 w-4"/>
                        </button>
                    </div>
                ),
            }),
        ],
        [columnHelper]
    );

    const table = useReactTable({
        data: AGREEMENTS,
        columns,
        state: {sorting, pagination},
        onSortingChange: setSorting,
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div className="min-h-screen space-y-5">

            <MetricsGrid stats={stats}/>

            <button
                className="cursor-pointer flex-shrink-0 w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg text-slate-500 hover:bg-gray-50">
                <ListFilter size={12}/>
            </button>

            <div className="mx-auto w-full md:w-[calc(100vw-304px)] flex flex-col gap-4">
                <div className="rounded-xl border  bg-white shadow-sm overflow-hidden flex flex-col">
                    <div
                        className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-lg border !rounded-bl-none !rounded-br-none border-default">
                        <table className="w-full min-w-[1000px] text-sm text-left">
                            <thead className="bg-[#E5E7EB] text-[##4B5563] text-sm border-b">
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th
                                            key={header.id}
                                            className="h-12 px-3 text-sm text-left w-[150px] align-middle font-medium text-muted-foreground transition-colors hover:text-gray-700"
                                            style={{width: header.getSize() !== 150 ? header.getSize() : undefined}}
                                        >
                                            {header.isPlaceholder ? null : (
                                                <div
                                                    className={`flex items-center gap-1 ${
                                                        header.column.getCanSort() ? "cursor-pointer select-none group" : ""
                                                    }`}
                                                    onClick={header.column.getToggleSortingHandler()}
                                                >
                                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                                    {header.column.getCanSort() && (
                                                        <ArrowUpDown
                                                            className="h-3 w-3 opacity-50 group-hover:opacity-100"/>
                                                    )}
                                                </div>
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                            </thead>
                            <tbody>
                            {table.getRowModel().rows.map((row) => (
                                <tr
                                    key={row.id}
                                    className="border-b  transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className="p-2 align-middle !text-[#2A394B] !text-xs">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            {table.getRowModel().rows.length < table.getState().pagination.pageSize && (
                                Array.from({length: table.getState().pagination.pageSize - table.getRowModel().rows.length}).map((_, i) => (
                                    <tr key={`spacer-${i}`} className="h-[73px] border-b border-transparent">
                                        <td colSpan={columns.length}>&nbsp;</td>
                                    </tr>
                                ))
                            )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div
                        className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 border-t gap-4 bg-white">
                        <div
                            className="flex items-center gap-2 text-sm text-muted-foreground w-full sm:w-auto justify-between sm:justify-start">
                            <span>Showing</span>
                            <div className="relative">
                                <select
                                    value={table.getState().pagination.pageSize}
                                    onChange={(e) => {
                                        table.setPageSize(Number(e.target.value));
                                    }}
                                    className="appearance-none h-8 w-[70px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring cursor-pointer"
                                >
                                    {[10, 20, 30, 40, 50].map((pageSize) => (
                                        <option key={pageSize} value={pageSize}>
                                            {pageSize}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown
                                    className="absolute right-2 top-2.5 h-3 w-3 opacity-50 pointer-events-none"/>
                            </div>
                            <span>of {table.getPrePaginationRowModel().rows.length} entries</span>
                        </div>

                        <div className="flex items-center space-x-1">
                            <button
                                className="flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            >
                                <ChevronLeft className="h-4 w-4"/>
                                <span className="hidden sm:inline">Previous</span>
                            </button>

                            <div className="flex items-center gap-1">
                                {Array.from({length: table.getPageCount()}).slice(0, 5).map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => table.setPageIndex(idx)}
                                        className={`h-9 w-9 text-sm font-medium rounded-md transition-colors ${
                                            table.getState().pagination.pageIndex === idx
                                                ? "bg-gray-100 text-gray-900 border border-gray-200"
                                                : "text-gray-500 hover:bg-gray-100"
                                        }`}
                                    >
                                        {idx + 1}
                                    </button>
                                ))}
                                {table.getPageCount() > 5 && (
                                    <span className="h-9 w-9 flex items-center justify-center text-gray-400">
                                        <MoreHorizontal className="h-4 w-4"/>
                                    </span>
                                )}
                            </div>

                            <button
                                className="flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >
                                <span className="hidden sm:inline">Next</span>
                                <ChevronRight className="h-4 w-4"/>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Info Banner */}
                <div className="rounded-lg border border-[#DBEEFF] bg-[#DBEEFF] p-4 text-sm text-[#2A394B]">
                    <div className="flex gap-3 items-start">
                        <Info className="h-5 w-5 shrink-0 text-blue-500 mt-0.5"/>
                        <div className="leading-relaxed">
                            <span className="font-medium text-[#2D8FE3]">Commission Structure</span>{' '}
                            QuickLocum charges a simple <span className="font-medium">10% commission</span> on
                            direct hire contract values, plus a <span
                            className="font-medium">$20 service fee</span> per
                            booked contract. Agencies and headhunters also have a{" "}
                            <span className="font-medium">$300/month subscription</span> that activates after
                            the 2nd booked contract of the month.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}