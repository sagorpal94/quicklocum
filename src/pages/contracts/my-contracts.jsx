import React, {useEffect, useState} from "react";
import {Button} from "@/components/ui/button.jsx";
import {
    CirclePlus,
    LayoutGrid,
    List,
    ArrowUpDown,
    MoreVertical,
    ChevronLeft,
    ChevronRight, ListFilter, Stethoscope, XCircle, Clock,
} from "lucide-react";
import ContractsTable from "@/components/contracts-table.jsx";
import ContractsGrid from "@/components/contracts-grid.jsx";
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
} from "@tanstack/react-table"
import {Badge} from "@/components/ui/badge"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import SimpleBar from "simplebar-react";
import ContractsDetails from "@/components/contracts-details.jsx";
import {Link} from "react-router-dom";
import {useSidebar} from "@/components/ui/sidebar.jsx";
import MetricsGrid from "@/components/metrics-grid.jsx";

const stats = [
    {label: "Open", value: 6},
    {label: "Pending", value: 1},
    {label: "Booked", value: 2},
    {label: "Closed", value: 2},
];

const positions = [
    "General Dentist",
    "Pediatric Dentist",
    "Orthodontist",
    "Oral Surgeon",
    "Cosmetic Dentist",
    "Endodontist",
    "Periodontist",
    "Prosthodontist",
];

const contractTypes = [
    "General Dentistry - Temporary Contract",
    "Pediatric Dentistry - Fluoride Treatment",
    "Orthodontics - Braces Installation",
    "Oral Surgery - Wisdom Teeth Removal",
    "Cosmetic Dentistry - Teeth Whitening",
    "Endodontics - Root Canal Therapy",
    "Periodontics - Gum Disease Treatment",
    "Prosthodontics - Denture Fitting",
];

const locations = [
    "Baker Street, Bridgewater, NS",
    "Maple Avenue, Truro, NS",
    "King Street, Halifax, NS",
    "Queen Street, Sydney, NS",
    "Elm Street, New Glasgow, NS",
    "Cedar Street, Antigonish, NS",
    "Birch Avenue, Yarmouth, NS",
    "Pine Hill, Kentville, NS",
    "Water Street, Wolfville, NS",
];

const contracts = Array.from({length: 100}, (_, index) => ({
    id: `#${index + 1}`,
    contractType: contractTypes[index % contractTypes.length],
    position: positions[index % positions.length],
    location: locations[index % locations.length],
    start: "2024",
    status: "Open",
    contractValue: `$ ${(150000 + (index % 10) * 25000).toLocaleString()}`,
    industry: "dental-care",
}));

const industries = [
    {
        id: "dental-care",
        label: "Dental Care",
        icon: (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2c-4 0-8 2-8 8v3c0 1.5.5 3 2 4s2 3 2 5h8c0-2 .5-4 2-5s2-2.5 2-4v-3c0-6-4-8-8-8z"/>
            </svg>
        ),
    },
    {
        id: "pharmacy",
        label: "Pharmacy",
        icon: <Clock className="h-4 w-4 text-[#19B28A]"/>,
    },
    {
        id: "nursing",
        label: "Nursing & Home Care",
        icon: <Stethoscope className="h-4 w-4 text-[#F0A33A]"/>,
    },
    {
        id: "general-medicine",
        label: "General Medicine",
        icon: <Stethoscope className="h-4 w-4 text-[#A161F0]"/>,
    },
]

function MyContracts() {
    const [viewMode, setViewMode] = useState("table")
    const [selectedIndustry, setSelectedIndustry] = useState("dental-care")
    const [width, setWidth] = useState(250);

    const [sorting, setSorting] = useState([])
    const [columnFilters, setColumnFilters] = useState([])


    const [selectedContract, setSelectedContract] = useState(null)
    const [detailsSheetOpen, setDetailsSheetOpen] = useState(false)

    const columns = [
        {
            accessorKey: "id",
            header: ({column}) => {
                return (
                    <button
                        className="flex items-center gap-1 font-medium"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        ID
                        <ArrowUpDown className="h-3 w-3"/>
                    </button>
                )
            },
            cell: ({row}) => <div className="font-medium text-muted-foreground">{row.getValue("id")}</div>,
        },
        {
            accessorKey: "contractType",
            header: ({column}) => {
                return (
                    <button
                        className="flex items-center gap-1 font-medium"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Contract Type
                        <ArrowUpDown className="h-3 w-3 text-[#2A394B]" strokeWidth="1.5px"/>
                    </button>
                )
            },
            cell: ({row}) => <div className="max-w-[200px] truncate">{row.getValue("contractType")}</div>,
        },
        {
            accessorKey: "position",
            header: ({column}) => {
                return (
                    <button
                        className="flex items-center gap-1 font-medium"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Position
                        <ArrowUpDown className="h-3 w-3 text-[#2A394B]" strokeWidth="1.5px"/>
                    </button>
                )
            },
        },
        {
            accessorKey: "location",
            header: ({column}) => {
                return (
                    <button
                        className="flex items-center gap-1 font-medium"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Location
                        <ArrowUpDown className="h-3 w-3 text-[#2A394B]" strokeWidth="1.5px"/>
                    </button>
                )
            },
            cell: ({row}) => <div className="max-w-[200px] truncate">{row.getValue("location")}</div>,
        },
        {
            accessorKey: "start",
            header: ({column}) => {
                return (
                    <button
                        className="flex items-center gap-1 font-medium"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Start
                        <ArrowUpDown className="h-3 w-3 text-[#2A394B]" strokeWidth="1.5px"/>
                    </button>
                )
            },
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({row}) => (
                <Badge variant="outline"
                       className="text-xs bg-[#E1F7F3] py-[3px] px-2 text-[#19B28A] hover:bg-[#19B28A]/10">
                    {row.getValue("status")}
                </Badge>
            ),
        },
        {
            accessorKey: "contractValue",
            header: ({column}) => {
                return (
                    <button
                        className="flex items-center gap-1 font-medium"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Contract value
                        <ArrowUpDown className="h-3 w-3 text-[#2A394B]" strokeWidth="1.5px"/>
                    </button>
                )
            },
            cell: ({row}) => <div className="font-medium text-sm text-[#2D8FE3]">{row.getValue("contractValue")}</div>,
        },
        {
            id: "actions",
            cell: ({row}) => {
                let contract = row.original;
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="p-0 h-8 w-8 rounded-md bg-[#F3F4F6] cursor-pointer">
                                <span className="sr-only">Open menu</span>
                                <MoreVertical className="h-6 w-6 text-[#2A394B]"/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem className="cursor-pointer" onClick={() => handleContractClick(contract)}>View
                                Details</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">Edit Contract</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive cursor-pointer">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]

    const table = useReactTable({
        data: contracts,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        state: {
            sorting,
            columnFilters,
        },
        initialState: {
            pagination: {
                pageSize: 10,
            },
        },
    })

    const pageCount = table.getPageCount()
    const currentPage = table.getState().pagination.pageIndex + 1
    const getPageNumbers = (delta = 2) => {
        // const delta = 2
        const range = []
        const rangeWithDots = []

        for (let i = Math.max(2, currentPage - delta); i <= Math.min(pageCount - 1, currentPage + delta); i++) {
            range.push(i)
        }

        if (currentPage - delta > 2) {
            rangeWithDots.push(1, "...")
        } else {
            rangeWithDots.push(1)
        }

        rangeWithDots.push(...range)

        if (currentPage + delta < pageCount - 1) {
            rangeWithDots.push("...", pageCount)
        } else if (pageCount > 1 && !range.includes(pageCount)) {
            rangeWithDots.push(pageCount)
        }

        return rangeWithDots
    }

    const handleContractClick = (contract) => {
        setSelectedContract(contract)
        setDetailsSheetOpen(true)
    }

    useEffect(() => {
        const handleResize = () => {
            const screenW = window.innerWidth;

            console.log(screenW)

            // লজিক: স্ক্রিনের অর্ধেক + ৯০ পিক্সেল
            // এতে ৩২০ এ ২৫০ হবে, আবার ১০২৬ এ গিয়ে ৬০৩ হবে।
            let calculatedWidth;
            if (screenW === 768) {
                calculatedWidth = 471
            } else if (screenW === 320) {
                calculatedWidth = 278
            } else {
                calculatedWidth = (screenW * 0.50) + 100;
            }

            if (calculatedWidth > 603) {
                calculatedWidth = 603;
            }

            setWidth(calculatedWidth);
        };

        handleResize(); // Initial call
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="min-h-screen">
            <MetricsGrid stats={stats}/>

            <div className="mb-5 flex justify-center sm:justify-between flex-wrap items-center gap-2">

                <div className="flex flex-col sm:flex-row items-center gap-2 flex-wrap">
                    <button
                        className="cursor-pointer flex-shrink-0 w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg text-slate-500 hover:bg-gray-50">
                        <ListFilter size={12}/>
                    </button>

                    <div className="flex-1 overflow-hidden">
                        <div className="rounded-[12px] border border-[#E5E7EB] bg-white/32 p-1 backdrop-blur-md flex">
                            <SimpleBar className="mx-auto w-[calc(100%-70px)] min-w-[250px] max-w-[603px]"
                                       hidden={false} style={{width: width}}>
                                <div className="flex items-center gap-2 ">
                                    {industries.map((industry) => (
                                        <button
                                            key={industry.id}
                                            onClick={() => setSelectedIndustry(industry.id)}
                                            className={`cursor-pointer flex shrink-0 items-center justify-between gap-1 rounded-md px-[6px] py-[4px] text-base transition-all duration-300 ease-in-out ${
                                                selectedIndustry === industry.id
                                                    ? "border border-[#BDD7ED] bg-[#EAF5FE] text-[#2D8FE3] shadow-sm"
                                                    : "text-[#2A394B] hover:bg-white/50"
                                            }`}
                                        >
                                        <span className="transition-transform duration-300 ease-in-out">
                                          {selectedIndustry === industry.id ? (
                                              <XCircle className="h-4 w-4 text-[#2D8FE3]"/>
                                          ) : (
                                              industry.icon
                                          )}
                                        </span>
                                            <span className="transition-colors duration-300">{industry.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </SimpleBar>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 rounded-[12px] border border-[#E5E7EB] p-1 bg-white/[0.32]">
                        <Button
                            variant={"secondary"}
                            size="icon"
                            className={`h-9 w-9 cursor-pointer hover:bg-[#EAF5FE] hover:text-[#2D8FE3] ${viewMode === "table" ? "text-[#2D8FE3] bg-[#EAF5FE] border border-[#BDD7ED] rounded-[8px] gap-2 py-3 px-2" : "bg-transparent"}`}
                            onClick={() => setViewMode("table")}
                        >
                            <List className={`h-4 w-4`} strokeWidth="1.5px"/>
                        </Button>
                        <Button
                            variant={"secondary"}
                            size="icon"
                            className={`h-9 w-9 cursor-pointer hover:bg-[#EAF5FE] hover:text-[#2D8FE3]  ${viewMode === "grid" ? "text-[#2D8FE3] bg-[#EAF5FE] border border-[#BDD7ED] rounded-[8px] gap-2 py-3 px-2" : "bg-transparent"}`}
                            onClick={() => setViewMode("grid")}
                        >
                            <LayoutGrid className="h-4 w-4" strokeWidth="1.5px"/>
                        </Button>
                    </div>
                    <Link to="/create-contract">
                        <Button variant="default"
                                className="rouned-[8px] py-[10px] px-[16px] gap-[6px] text-sm text-[#FBFBFB] bg-[#2D8FE3] hover:bg-[#2D8FE3] cursor-pointer">
                            <CirclePlus className="w-5 h-5" strokeWidth="2px"/>
                            Add Contract
                        </Button>
                    </Link>
                </div>
            </div>

            {
                selectedIndustry === 'dental-care' &&
                <>
                    <h2 className="text-2xl mb-5 capitalize">dental-care</h2>
                    {viewMode === "table" ? <ContractsTable table={table} onRowClick={handleContractClick}/> :
                        <ContractsGrid table={table} onRowClick={handleContractClick}/>}
                </>
            }
            {
                selectedIndustry === 'pharmacy' &&
                <>
                    <h2 className="text-2xl mb-5 capitalize">pharmacy</h2>
                    {viewMode === "table" ? <ContractsTable table={table}/> : <ContractsGrid table={table}/>}
                </>
            }
            {
                selectedIndustry === 'nursing' &&
                <>
                    <h2 className="text-2xl mb-5 capitalize">nursing</h2>
                    {viewMode === "table" ? <ContractsTable table={table}/> : <ContractsGrid table={table}/>}
                </>
            }
            {
                selectedIndustry === 'general-medicine' &&
                <>
                    <h2 className="text-2xl mb-5 capitalize">general medicine</h2>
                    {viewMode === "table" ? <ContractsTable table={table}/> : <ContractsGrid table={table}/>}
                </>
            }

            {
                detailsSheetOpen && <ContractsDetails open={detailsSheetOpen} onOpenChange={setDetailsSheetOpen}
                                                      contract={selectedContract}/>
            }

            {/* Pagination */}
            <div
                className="flex flex-col gap-4 border-t border-border px-2 py-4 sm:px-4 md:flex-row items-center md:items-center md:justify-between">
                <div className="flex items-center gap-2 text-xs text[#707070] sm:text-sm">
                    <span className="inline">Showing</span>
                    <Select
                        value={`${table.getState().pagination.pageSize}`}
                        onValueChange={(value) => {
                            table.setPageSize(Number(value))
                        }}
                    >
                        <SelectTrigger className="h-8 w-[70px]">
                            <SelectValue placeholder={table.getState().pagination.pageSize}/>
                        </SelectTrigger>
                        <SelectContent side="top">
                            {[10, 20, 30, 40, 50].map((pageSize) => (
                                <SelectItem key={pageSize} value={`${pageSize}`}>
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <span className="inline">of {contracts.length} Entries</span>
                </div>

                <div className="grid grid-cols-3 items-center gap-2 w-full sm:w-auto sm:justify-center sm:hidden">
                    {/* Previous */}
                    <div className="flex justify-start">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                            className="h-8 w-8 p-0"
                        >
                            <ChevronLeft className="h-4 w-4"/>
                        </Button>
                    </div>

                    {/* Mobile page indicator */}
                    <div className="text-center text-xs sm:hidden">
                        Page {currentPage} / {pageCount}
                    </div>

                    {/* Desktop page numbers */}
                    <div className="hidden sm:flex items-center gap-1 justify-center">
                        {getPageNumbers(2).map((page, index) =>
                            page === "..." ? (
                                <span key={index} className="px-2 text-muted-foreground">
                                        ...
                                    </span>
                            ) : (
                                <Button
                                    key={page}
                                    size="sm"
                                    variant={currentPage === page ? "default" : "outline"}
                                    onClick={() => table.setPageIndex(page - 1)}
                                    className="h-8 w-8 p-0"
                                >
                                    {page}
                                </Button>
                            )
                        )}
                    </div>

                    {/* Next */}
                    <div className="flex justify-end">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                            className="h-8 w-8 p-0"
                        >
                            <ChevronRight className="h-4 w-4"/>
                        </Button>
                    </div>
                </div>

                <div className="hidden sm:flex items-center justify-center gap-1 overflow-x-auto sm:gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                        className="h-8 shrink-0 rounded-[8px] border border-[#E8E8E8] bg-transparent px-2 py-1 text-xs sm:px-4 sm:text-sm"
                    >
                        <ChevronLeft className="h-4 w-4"/>
                        <span className="hidden sm:inline">Previous</span>
                    </Button>

                    <div className="flex items-center gap-1">
                        {/*{getPageNumbers(typeof window !== "undefined" && window.innerWidth < 640 ? 3 : 5).map((page, index) =>*/}
                        {getPageNumbers(2).map((page, index) =>
                            page === "..." ? (
                                <span key={`ellipsis-${index}`} className="px-1 text-sm text-muted-foreground sm:px-2">
                                            ...
                                          </span>
                            ) : (
                                <Button
                                    key={page}
                                    variant={currentPage === page ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => table.setPageIndex(Number(page) - 1)}
                                    className={`h-8 w-8 shrink-0 rounded-[8px] border border-[#E8E8E8] p-0 text-xs sm:w-10 sm:text-sm ${
                                        currentPage === page ? "" : "bg-transparent"
                                    }`}
                                >
                                    {page}
                                </Button>
                            ),
                        )}
                    </div>

                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                        className="h-8 shrink-0 rounded-[8px] border border-[#E8E8E8] bg-transparent px-2 py-1 text-xs sm:px-4 sm:text-sm"
                    >
                        <span className="hidden sm:inline">Next</span>
                        <ChevronRight className="h-4 w-4"/>
                    </Button>
                </div>

            </div>

        </div>
    )
}

export default MyContracts;