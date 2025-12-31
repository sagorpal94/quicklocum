import {Badge} from "@/components/ui/badge.jsx"
import {Button} from "@/components/ui/button.jsx"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu.jsx"
import {MoreVertical} from "lucide-react"

function ContractsGrid({table}) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => {
                    const contract = row.original
                    return (
                        <div key={row.id}
                             className="rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-md">
                            {/* Header with ID, Status, and Menu */}
                            <div className="mb-3 flex items-start justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-[#374151]">{contract.id}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Badge
                                        variant="secondary"
                                        className={`py-[3px] px-4 bg-[#E1F7F3] rounded-[8px]`}
                                    >
                                        {contract.status}
                                    </Badge>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md bg-[#F3F4F6]">
                                                <MoreVertical className="h-6 w-6 text-[#2A394B]"/>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>View Details</DropdownMenuItem>
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>

                            {/* Contract Title */}
                            <h3 className="mb-1 min-h-[3rem] line-clamp-2 text-base font-semibold text-[#2A394B]">
                                {contract.contractType}
                            </h3>

                            {/* Position */}
                            <p className="mb-4 text-sm text-muted-foreground">{contract.position}</p>

                            {/* Contract Value and Start Date */}
                            <div className="mb-3 grid grid-cols-2 gap-3">
                                <div>
                                    <p className="mb-1 text-xs text-muted-foreground">
                                        {contract.contractValue.includes("Hourly")
                                            ? "Hourly Rate"
                                            : contract.contractValue.includes("Consultation")
                                                ? "Consultation Fee"
                                                : contract.contractValue.includes("Annual")
                                                    ? "Annual Salary"
                                                    : "Contract value"}
                                    </p>
                                    <p className="text-sm font-semibold text-[#2D8FE3]">{contract.contractValue}</p>
                                </div>
                                <div>
                                    <p className="mb-1 text-xs text-muted-foreground">Start</p>
                                    <p className="text-sm font-medium text-[#2A394B]">{contract.start}</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div>
                                <p className="mb-1 text-xs text-muted-foreground">Location</p>
                                <p className="line-clamp-2 text-sm text-foreground">{contract.location}</p>
                            </div>
                        </div>
                    )
                })
            ) : (
                <div className="col-span-full py-12 text-center text-muted-foreground">No results.</div>
            )}
        </div>
    )
}

export default ContractsGrid;