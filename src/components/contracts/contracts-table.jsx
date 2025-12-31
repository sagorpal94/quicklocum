import {
    flexRender,
} from "@tanstack/react-table"

function ContractsTable({table}) {
    return (
            <div
                className="relative overflow-x-auto ">
                <table className="w-full text-left rtl:text-right ">
                    <thead className="bg-[#E5E7EB]">
                    <tr className="border-b border-border bg-muted/30">
                        {table.getHeaderGroups().map((headerGroup) =>
                            headerGroup.headers.map((header) => (
                                <th key={header.id}
                                    className="py-[7.5px] px-3 gap-2 text-left text-sm font-medium text-[#4B5563] first:rounded-l-md first:rounded-bl-none last:rounded-r-md last:rounded-br-none">
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            )),
                        )}
                    </tr>
                    </thead>
                    <tbody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row, index) => (
                            <tr
                                key={row.id}
                                className={`border border-border transition-colors hover:bg-muted/50 ${
                                    index % 2 === 1 ? "bg-muted/20" : ""
                                }`}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="px-4 py-4 text-sm text-[#2A394B]">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={table.getAllColumns().length} className="h-24 text-center">
                                No results.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

    )
}

export default ContractsTable;