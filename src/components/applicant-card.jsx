import {Card} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {MoreVertical, X, Check, User, Users, FileText, CircleX} from "lucide-react"

export default function ApplicantCard({
                                          id,
                                          name,
                                          contractType,
                                          email,
                                          appliedDate,
                                          status,
                                          onAccept,
                                          onReject,
                                          onViewContracts,
                                          onViewProfile,
                                      }) {
    const statusStyles = {
        pending: "bg-[#FBF1E7] text-[#F36B2D] border-[#FBF1E7]",
        accepted: "bg-green-100 text-green-600 border-green-200",
        rejected: "bg-red-100 text-red-600 border-red-200",
        approved: "bg-[#E1F7F3] text-[#19B28A] border-[#E1F7F3]",
    }

    const renderActionButtons = () => {
        if (status === "approved") {
            return (
                <>
                    <Button
                        variant="outline"
                        size="sm"
                        className="text-[#2D8FE3] hover:text-[#2D8FE3] border-[#2D8FE3] hover:bg-[#DBEEFF] bg-[#DBEEFF]"
                        onClick={onViewContracts}
                    >
                        <FileText className="h-4 w-4 mr-1"/>
                        View Contracts
                    </Button>
                    <Button size="sm"
                            className="text-[#2D8FE3] hover:text-[#2D8FE3] border-[#2D8FE3] hover:bg-[#DBEEFF] bg-[#DBEEFF]"
                            onClick={onViewProfile}
                    >
                        <User className="h-4 w-4 mr-1"/>
                        View Profile
                    </Button>


                </>
            )
        }

        return (
            <>
                <Button
                    variant="outline"
                    size="sm"
                    className="text-[#ED354A] border-red-200 bg-[#FCF1F1] hover:bg-[#FCF1F1] hover:text-[#ED354A]"
                    onClick={onReject}
                >
                    <CircleX className="h-4 w-4 mr-1"/>
                    Reject
                </Button>
                <Button size="sm" className="bg-[#E1F7F3] rounded-lg hover:bg-[#E1F7F3] text-[#19B28A]"
                        onClick={onAccept}>
                    <Check className="h-4 w-4 mr-1"/>
                    Accept
                </Button>
            </>
        )
    }

    return (
        <Card className="w-full p-4 border border-gray-200 rounded-lg">
            <div className="flex flex-col gap-4">
                {/* Header Row */}
                <div className="flex items-start justify-between">
                    <span className="text-sm text-gray-500 font-medium">{id}</span>
                    <div className="flex items-center gap-2">
                        <Badge
                            variant="outline"
                            style={{borderRadius: "6px"}}
                            className={`capitalize py-1 ${statusStyles[status]}`}>
                            {status}
                        </Badge>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8 p-0 rounded-md bg-[#F3F4F6] ">
                                    <MoreVertical className="h-4 w-4 text-gray-500"/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="text-[#2A394B]">
                                <DropdownMenuItem className="cursor-pointer">
                                    <User/>
                                    View Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer my-2">
                                    <FileText/>
                                    View Contracts
                                </DropdownMenuItem>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem className="cursor-pointer my-2">
                                    <Users/>
                                    View Candidates
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* Name */}
                <h3 className="text-base font-semibold text-gray-900">{name}</h3>

                {/* Info Grid - Desktop */}
                <div
                    className="hidden md:grid md:grid-cols-[1fr_auto] lg:grid-cols-[1fr_1fr_1fr_auto] gap-4 items-center">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Contract type</span>
                        <a href="#" className="text-sm text-[#2D8FE3] hover:underline font-medium">
                            {contractType}
                        </a>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Email</span>
                        <span className="text-sm text-gray-900">{email}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Applied</span>
                        <span className="text-sm text-gray-900">{appliedDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {renderActionButtons()}
                    </div>
                </div>

                {/* Info Stack - Mobile */}
                <div className="md:hidden flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Contract type</span>
                        <a href="#" className="text-sm text-[#2D8FE3] hover:underline font-medium">
                            {contractType}
                        </a>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Email</span>
                        <span className="text-sm text-gray-900">{email}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Applied</span>
                        <span className="text-sm text-gray-900">{appliedDate}</span>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                        {renderActionButtons()}
                    </div>
                </div>
            </div>
        </Card>
    )
}
