import React from "react";
import {ChevronRight, X} from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import {Badge} from "@/components/ui/badge";
import {ScrollArea} from "@/components/ui/scroll-area";

const CONTRACTS = [
    {
        id: "#1",
        title: "General Dentistry – Temporary Contract",
        role: "General Dentist",
        status: "Pending Signature",
        startDate: "November 21, 2025",
        appliedAt: "December 5, 2025",
        appId: "# 14",
        appStatus: "Accepted"
    },
    {
        id: "#2",
        title: "Pediatric Dentistry – Full-Time Position",
        role: "Pediatric Dentist",
        status: "Pending Signature",
        startDate: "November 21, 2025",
        appliedAt: "December 5, 2025",
        appId: "# 14",
        appStatus: "Accepted"
    },
    {
        id: "#3",
        title: "Orthodontics – Part-Time Position",
        role: "Orthodontist",
        status: "Pending Signature",
        startDate: "November 21, 2025",
        appliedAt: "December 5, 2025",
        appId: "# 14",
        appStatus: "Accepted"
    },
    {
        id: "#4",
        title: "Cosmetic Dentistry – Temporary Contract",
        role: "Cosmetic Dentist",
        status: "Pending Signature",
        startDate: "November 21, 2025",
        appliedAt: "December 5, 2025",
        appId: "# 14",
        appStatus: "Accepted"
    },
    {
        id: "#5",
        title: "Oral Surgery – Full-Time Position",
        role: "Oral Surgeon",
        status: "Pending Signature",
        startDate: "November 21, 2025",
        appliedAt: "December 5, 2025",
        appId: "# 14",
        appStatus: "Accepted"
    },
    {
        id: "#6",
        title: "Pediatric Dentistry – Permanent Position",
        role: "Pediatric Dentist",
        status: "Pending Signature",
        startDate: "November 21, 2025",
        appliedAt: "December 5, 2025",
        appId: "# 14",
        appStatus: "Accepted"
    }
];

const ContractCard = ({item}) => {
    return (
        <div
            className="bg-white border border-slate-200 rounded-xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow cursor-pointer flex flex-col gap-4">

            {/* Card Header: ID, Badge, Chevron */}
            <div className="flex justify-between items-start">
                <span className="text-slate-500 font-medium text-sm">{item.id}</span>
                <div className="flex items-center gap-2">
                    <Badge
                        className="bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border-none rounded-md px-2 py-0.5 font-medium text-xs">
                        {item.status}
                    </Badge>
                    <ChevronRight className="h-4 w-4 text-slate-300"/>
                </div>
            </div>

            {/* Title Section */}
            <div>
                <h3 className="text-slate-900 font-bold text-[15px] leading-tight mb-1">
                    {item.title}
                </h3>
                <p className="text-slate-500 text-sm">
                    {item.role}
                </p>
            </div>

            {/* Grid Details */}
            <div className="grid grid-cols-2 gap-y-4 mt-2">

                {/* Start Date */}
                <div className="flex flex-col">
                    <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wide">Start Date</span>
                    <span className="text-[13px] text-slate-700 font-medium">{item.startDate}</span>
                </div>

                {/* Applied At */}
                <div className="flex flex-col">
                    <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wide">Applied At</span>
                    <span className="text-[13px] text-slate-700 font-medium">{item.appliedAt}</span>
                </div>

                {/* Application ID */}
                <div className="flex flex-col">
                    <span
                        className="text-[11px] text-slate-400 font-medium uppercase tracking-wide">Application ID</span>
                    <span className="text-[13px] text-slate-700 font-medium">{item.appId}</span>
                </div>

                {/* Application Status */}
                <div className="flex flex-col">
                    <span
                        className="text-[11px] text-slate-400 font-medium uppercase tracking-wide">Application Status</span>
                    <span className="text-[13px] text-emerald-500 font-bold">{item.appStatus}</span>
                </div>

            </div>
        </div>
    );
};

export default function SharedContractsSheet({open, setOpen}) {
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent className="sm:max-w-3xl w-full p-0 flex flex-col bg-[#F9FAFB]">

                {/* Header */}
                <SheetHeader
                    className="px-6 py-5 border-b border-slate-200 bg-white sticky top-0 z-10 flex flex-row items-center justify-between">
                    <SheetTitle className="text-lg font-bold text-slate-900 text-left">
                        Shared Contracts
                    </SheetTitle>
                    <X className="cursor-pointer w-5 h-5" onClick={() => setOpen(false)}/>
                </SheetHeader>

                <ScrollArea className="w-full h-[calc(100vh-87px)]">
                    <div className="px-6 pb-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {CONTRACTS.map((contract, index) => (
                                <ContractCard key={index} item={contract}/>
                            ))}
                        </div>
                    </div>
                </ScrollArea>

            </SheetContent>
        </Sheet>
    );
}