import {Button} from "@/components/ui/button.jsx";
import {
    ListFilter,
    FileTextIcon,
    CreditCard,
    BanknoteArrowUp,
    FolderClosed,
    ArrowUpDown,
    ChevronDown, ChevronLeft, MoreHorizontal, ChevronRight, Info, MoreVertical
} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.jsx";
import React, {useMemo, useState} from "react";
import {FeatureCard} from "@/components/feature-card.jsx";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.jsx";
import ReusableTabs from "@/components/reusable-tabs.jsx";

const tabs = [
    {name: "Total Invoices", value: "total-invoices", icon: FileTextIcon, count: 1},
    {name: "Open", value: "open", icon: FolderClosed, count: 1},
    {name: "Paid", value: "paid", icon: CreditCard, count: 1},
    {name: "Overdue", value: 'overdue', icon: BanknoteArrowUp, count: 1},
];

function CustomTabTrigger({value, icon, label, count}) {
    return (
        <TabsTrigger
            value={value}
            style={{borderRight: 0, borderLeft: 0, borderTop: 0}}
            className="group cursor-pointer min-w-[200px] md:w-auto relative flex items-center justify-between gap-2 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-medium text-gray-500 shadow-none transition-none
            hover:text-gray-700
            data-[state=active]:border-[#2D8FE3] data-[state=active]:text-[#2D8FE3] data-[state=active]:shadow-none"
        >
            <div className="flex items-center gap-1">
                <span className="group-data-[state=active]:text-[#2D8FE3]">
                    {icon}
                </span>

                {/* Label */}
                <span>{label}</span>
            </div>

            {/* Badge / Counter */}
            <span
                className="flex flex-col items-center justify-center w-[24px] h-[24px] gap-[6px] rounded-[8px] border border-[#BDD7ED] bg-[#FBFBFB] px-[2px] py-[3px]">
                {count}
            </span>
        </TabsTrigger>
    );
}

const INVOICES = [
    {
        id: "2L4H6SNV-0006",
        type: "Invoice",
        contractId: "#9",
        contractName: "Specialty Dentistry – Contract",
        issueDate: "Dec 8, 2025",
        dueDate: "Dec 10, 2025",
        amount: "$46,000",
        status: "Overdue",
    },
    {
        id: "2L4H6SNV-0007",
        type: "Invoice",
        contractId: "#12",
        contractName: "General Practice – Locum",
        issueDate: "Dec 9, 2025",
        dueDate: "Dec 15, 2025",
        amount: "$2,400",
        status: "Paid",
    },
    {
        id: "2L4H6SNV-0008",
        type: "Credit Note",
        contractId: "#9",
        contractName: "Specialty Dentistry – Contract",
        issueDate: "Dec 12, 2025",
        dueDate: "Dec 12, 2025",
        amount: "-$500",
        status: "Processed",
    },
    {
        id: "2L4H6SNV-0009",
        type: "Invoice",
        contractId: "#15",
        contractName: "Emergency Ward – Night Shift",
        issueDate: "Dec 14, 2025",
        dueDate: "Dec 21, 2025",
        amount: "$12,500",
        status: "Pending",
    },
    // Generate more dummy data for pagination demonstration
    ...Array.from({length: 26}).map((_, i) => ({
        id: `2L4H6SNV-00${10 + i}`,
        type: i % 3 === 0 ? "Credit Note" : "Invoice",
        contractId: `#${20 + i}`,
        contractName: "General Medical – Locum",
        issueDate: "Dec 15, 2025",
        dueDate: "Dec 22, 2025",
        amount: `$${(i + 1) * 1000}`,
        status: i % 4 === 0 ? "Overdue" : "Paid",
    })),
];


const StatusBadge = ({status}) => {
    const styles = {
        Overdue: "bg-[#FCF1F1] text-[#ED354A] border-[#FCF1F1]",
        Paid: "bg-green-50 text-green-600 border-green-100",
        Pending: "bg-yellow-50 text-yellow-600 border-yellow-100",
        Processed: "bg-gray-100 text-gray-600 border-gray-200",
    };

    return (
        <span
            className={`inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs font-semibold transition-colors ${
                styles[status] || styles.Processed
            }`}
        >
      {status}
    </span>
    );
};

function InvoicesPage() {
    const [activeTab, setActiveTab] = useState(tabs[0].value);
    const [sorting, setSorting] = useState([]);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    });

    const columnHelper = createColumnHelper();

    const columns = useMemo(
        () => [
            columnHelper.accessor("id", {
                header: "Invoice #",
                cell: (info) => <span className="font-medium text-[#2A394B]">{info.getValue()}</span>,
            }),
            columnHelper.accessor("type", {
                header: "Type",
                cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("contractId", {
                header: "Contract ID",
                cell: (info) => (
                    <div className="flex flex-col">
                        <span className=" text-sm font-bold text-[#2A394B]">{info.getValue()}</span>
                        <span className="text-[10px] text-[#9CA3AF] whitespace-nowrap">
              {info.row.original.contractName}
            </span>
                    </div>
                ),
            }),
            columnHelper.accessor("issueDate", {
                header: "Issue Date",
                cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("dueDate", {
                header: "Due Date",
                cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("amount", {
                header: "Amount",
                cell: (info) => (
                    <span className="font-medium text-[#2D8FE3] cursor-pointer hover:underline">
                        {info.getValue()}
                      </span>
                ),
            }),
            columnHelper.accessor("status", {
                header: "Status",
                cell: (info) => <StatusBadge status={info.getValue()}/>,
            }),
            columnHelper.display({
                id: "actions",
                cell: () => (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="p-0 h-8 w-8 rounded-md bg-[#F3F4F6] cursor-pointer">
                                <span className="sr-only">Open menu</span>
                                <MoreVertical className="h-6 w-6 text-[#2A394B]"/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem className="cursor-pointer">View
                                Details</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">Edit Contract</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive cursor-pointer">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ),
            }),
        ],
        [columnHelper]
    );

    const table = useReactTable({
        data: INVOICES,
        columns,
        state: {
            sorting,
            pagination,
        },
        onSortingChange: setSorting,
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });
    return (
        <div className="min-h-screen md:w-[calc(100vw-304px)]">
            <ReusableTabs
                tabs={tabs}
                activeTab={activeTab}
                defaultValue="total-invoices"
                onChange={setActiveTab}
                showFilter
                FilterButton={() => (
                    <Button variant="outline" size="sm" className="h-9 gap-2">
                        <ListFilter size={16}/>
                    </Button>
                )}
            />
            <div className="mt-4">
                {activeTab === "total-invoices" && (
                    <div className=" mx-auto w-full  flex flex-col gap-4">

                        <div className="rounded-xl border  bg-white shadow-sm overflow-hidden flex flex-col">

                            <div
                                className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-lg border !rounded-bl-none !rounded-br-none border-default">
                                <table className="w-full min-w-[940px] text-sm text-left">
                                    <thead className="bg-[#E5E7EB] text-[#4B5563] border-b">
                                    {table.getHeaderGroups().map((headerGroup) => (
                                        <tr key={headerGroup.id}>
                                            {headerGroup.headers.map((header) => (
                                                <th
                                                    key={header.id}
                                                    className="h-12 px-4 text-left align-middle font-medium text-muted-foreground transition-colors hover:text-gray-700"
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
                                            className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                        >
                                            {row.getVisibleCells().map((cell) => (
                                                <td key={cell.id} className="p-4 align-middle text-[#2A394B] text-sm">
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
                    </div>
                )}
                {activeTab === 'open' && (
                    <>Open Tab</>
                )}
                {activeTab === 'paid' && (
                    <>Paid Tab</>
                )}
                {activeTab === 'overdue' && (
                    <>Overdue Tab</>
                )}
            </div>

        </div>
    )
}

export default InvoicesPage;