import {Button} from "@/components/ui/button.jsx"
import {Card, CardContent} from "@/components/ui/card.jsx"
import {Badge} from "@/components/ui/badge.jsx"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu.jsx"

import {Send, FileCheck, MoreVertical} from "lucide-react"

function PositionCard({position}) {
    return (
        <Card className={`${
            position.type === "Temporary"
                ? "overflow-hidden transition-shadow hover:shadow-md border-[#95C8EC] py-0"
                : "overflow-hidden transition-shadow hover:shadow-md border-[#F1D370] py-0"}`}
        >
            <CardContent className="p-5">
                {/* Header */}
                <div className="mb-3 flex items-start justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-[#374151]">#{position.id}</span>
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                        <Badge variant="outline" className="bg-[#E1F7F3] text-[#19B28A] rounded-sm py-1.5">
                            {position.status}
                        </Badge>
                        <Badge
                            variant="outline"
                            className={`${
                                position.type === "Temporary"
                                    ? "font-medium text-[12px] bg-[#FBF1E7] text-[#F36B2D] rounded-sm py-1.5"
                                    : "font-medium text-[12px] bg-[#FBF1E7] text-[#F36B2D] rounded-sm py-1.5"
                            }`}
                        >
                            {position.type}
                        </Badge>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md bg-[#F3F4F6]">
                                    <MoreVertical className="h-6 w-6 text-[#2A394B]"/>
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-base font-medium text-[#2A394B]">{position.title}</h3>

                {/* Location */}
                <div className="mb-4">
                    <p className="text-xs text-[#6B7280]">{position.location}</p>
                    <p className="text-sm text-[#2A394B]">{position.address}</p>
                </div>

                {/* Contract Details and Action */}
                <div className="flex items-end justify-between flex-wrap gap-2">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                        <div>
                            <p className="text-xs text-[#6B7280]">Contract value</p>
                            <p className="text-sm font-medium text-[#2D8FE3]">{position.contractValue}</p>
                        </div>
                        <div>
                            <p className="text-xs text-[#6B7280]">Duration</p>
                            <p className="text-sm text-[#2A394B]">{position.duration}</p>
                        </div>
                    </div>

                    {position.applied ? (
                        <Button variant="outline"
                            className="cursor-pointer shrink-0 bg-[#EAF5FE] text-[#2D8FE3] hover:text-[#2D8FE3] hover:bg-[#EAF5FE] rounded-sm text-sm border-[2px] border-[#BDD7ED]">
                            <FileCheck className="h-5 w-5"/>
                            Applied
                        </Button>
                    ) : (
                        <Button variant="outline" className="cursor-pointer shrink-0 rounded-sm text-sm text-[#FBFBFB] !bg-[#2D8FE3] hover:text-[#FBFBFB]">
                            <Send className="h-5 w-5 text-[#FBFBFB]"/>
                            Apply
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}

export default PositionCard;