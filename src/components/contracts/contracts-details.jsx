import {X, Calendar, Clock, Clock4, Clock4Icon, SquareMinus} from "lucide-react"
import {Sheet, SheetContent, SheetHeader, SheetTitle} from "@/components/ui/sheet.jsx"
import {Badge} from "@/components/ui/badge.jsx"
import {Button} from "@/components/ui/button.jsx"
import React from "react";
import SimpleBar from "simplebar-react";

function ContractsDetails({open, onOpenChange, contract}) {
    if (!contract) return null;
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent iconHide={true} side="right" className="w-full p-0 sm:max-w-[780px]">
                {/* Header */}
                <SheetHeader className="flex flex-row items-center justify-between border-b border-border px-6 py-4">
                    <div className="flex items-center gap-4">
                        <SheetTitle className="text-xl text-[#2A394B] font-medium">General Dentistry
                            Contract</SheetTitle>
                        <Badge className="text-sm text-[#374151] bg-transparent py-1 px-2 border border-[#E5E7EB]">Contract
                            ID {contract.id}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge variant="outline"
                               className="text-xs bg-[#E1F7F3] py-[3px] px-2 mr-5 text-[#19B28A] hover:bg-[#19B28A]/10">
                            {contract.status}
                        </Badge>
                        {/*<Button*/}
                        {/*    variant="ghost"*/}
                        {/*    size="icon"*/}
                        {/*    onClick={() => onOpenChange(false)}*/}
                        {/*    className="h-8 w-8 rounded-full cursor-pointer">*/}
                        {/*    <X className="h-4 w-4"/>*/}
                        {/*    <span className="sr-only">Close</span>*/}
                        {/*</Button>*/}
                    </div>
                </SheetHeader>

                <SimpleBar style={{maxHeight: "87vh"}}>
                    <div className="p-6 space-y-6">
                        <div
                            className="relative rounded-[8px] border border-[#E5E7EB] bg-white gap-5 pt-[20px] pr-[16px] pb-[12px] pl-[16px]">
                        <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-[#9CA3AF]">
                            Location Information
                        </span>
                            <div className="grid grid-cols-2 gap-[20px] h-full">
                                <div className="flex flex-col justify-center">
                                    <label className="text-sm font-medium text-[#4B5563]">Facility Name</label>
                                    <p className="text-base text-[#9CA3AF] font-light">Baker Street Facility</p>
                                </div>

                                <div className="flex flex-col justify-center">
                                    <label className="text-sm font-semibold text-[#4B5563] mb-1">Contract
                                        Location</label>
                                    <p className="text-lg text-[#9CA3AF] font-light truncate">Baker Street, Bridgewater,
                                        NS
                                        B4V 2N8,
                                        Canada</p>
                                </div>

                                <div className="flex flex-col justify-center col-span-2">
                                    <label className="text-sm font-semibold text-[#4B5563]">Street Address</label>
                                    <p className="text-base text-[#9CA3AF] font-light">Baker Street</p>
                                </div>

                                <div className="flex flex-col justify-center">
                                    <label className="text-sm font-semibold text-[#4B5563]">City</label>
                                    <p className="text-base text-[#9CA3AF] font-light">Bridgewater</p>
                                </div>

                                <div className="flex flex-col justify-center">
                                    <label className="text-sm font-semibold text-[#4B5563] mb-1">Province</label>
                                    <p className="text-base text-[#9CA3AF] font-light">Nova Scotia</p>
                                </div>

                            </div>
                        </div>

                        <div
                            className="relative rounded-[8px] border border-[#E5E7EB] bg-white gap-5 pt-[20px] pr-[16px] pb-[12px] pl-[16px]">
                        <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-[#9CA3AF]">
                            Contract Schedule
                        </span>
                            <div className="grid grid-cols-6 gap-[20px] h-full">
                                <div className="flex flex-col justify-center col-span-3">
                                    <label className="text-sm font-medium text-[#4B5563]">Start Date</label>
                                    <p className="text-base text-[#9CA3AF] font-light">2025-11-05</p>
                                </div>

                                <div className="flex flex-col justify-center col-span-3">
                                    <label className="text-sm font-semibold text-[#4B5563] mb-1">End Date</label>
                                    <p className="text-lg text-[#9CA3AF] font-light truncate">2025-11-28</p>
                                </div>

                                <div className="flex flex-col justify-center col-span-6">
                                    <label className="text-sm font-semibold text-[#4B5563]">Selected Working
                                        Dates</label>
                                    <p className="text-base text-[#9CA3AF] font-light">
                                        2025-11-05, 2025-11-12, 2025-11-20, 2025-11-21, 2025-11-24, 2025-11-25,
                                        2025-11-28
                                    </p>
                                </div>

                                <div className="flex flex-col justify-center col-span-2">
                                    <label className="text-sm font-semibold text-[#4B5563]">Time Slot (All
                                        Dates)</label>
                                    <p className="text-base text-[#9CA3AF] font-light">Nov 5, 2025 → Nov 28, 2025</p>
                                </div>

                                <div className="flex flex-col justify-center col-span-2">
                                    <label className="text-sm font-semibold text-[#4B5563] mb-1">Start Time</label>
                                    <p className="text-base text-[#9CA3AF] font-light">09:00</p>
                                </div>

                                <div className="flex flex-col justify-center col-span-2">
                                    <label className="text-sm font-semibold text-[#4B5563] mb-1">End Time</label>
                                    <p className="text-base text-[#9CA3AF] font-light">17:00</p>
                                </div>

                                <div className="flex flex-col justify-center col-span-3">
                                    <label className="text-sm font-semibold text-[#4B5563] mb-1">Break Included</label>
                                    <p className="text-base text-[#9CA3AF] font-light">
                                        <Badge>No</Badge>
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div
                            className="relative rounded-[8px] border border-[#E5E7EB] bg-white gap-5 pt-[20px] pr-[16px] pb-[12px] pl-[16px]">
                        <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-[#9CA3AF]">
                            Compensation Details
                        </span>
                            <div className="grid grid-cols-6 gap-[20px] h-full">

                                <div className="flex flex-col justify-center col-span-2">
                                    <label className="text-sm font-semibold text-[#4B5563]">Compensation Mode</label>
                                    <p className="text-base text-[#9CA3AF] font-light">Fixed Contract Value</p>
                                </div>

                                <div className="flex flex-col justify-center col-span-2">
                                    <label className="text-sm font-semibold text-[#4B5563] mb-1">Contract Value</label>
                                    <p className="text-base text-[#2D8FE3] font-light">$400000</p>
                                </div>

                                <div className="flex flex-col justify-center col-span-2">
                                    <label
                                        className="text-sm font-semibold text-[#4B5563] mb-1">Bonus/Incentives</label>
                                    <p className="text-base text-[#9CA3AF] font-light">
                                        <Badge>No</Badge>
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div
                            className="relative rounded-[8px] border border-[#E5E7EB] bg-white gap-5 pt-[20px] pr-[16px] pb-[12px] pl-[16px]">
                        <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-[#9CA3AF]">
                            Requirements & Benefits
                        </span>
                            <div className="grid grid-cols-2 gap-[20px] h-full">
                                <div className="flex flex-col justify-center">
                                    <label className="text-sm font-medium text-[#4B5563]">Required Experience</label>
                                    <p className="text-base text-[#9CA3AF] font-light">5-10</p>
                                </div>

                                <div className="flex flex-col justify-center">
                                    <label className="text-sm font-semibold text-[#4B5563] mb-1">Contract
                                        Location</label>
                                    <p className="text-lg text-[#9CA3AF] font-light truncate">Baker Street, Bridgewater,
                                        NS
                                        B4V 2N8,
                                        Canada</p>
                                </div>

                                <div className="flex flex-col justify-center col-span-2">
                                    <label className="text-sm font-semibold text-[#4B5563]">Languages</label>
                                    <p className="text-base text-[#9CA3AF] font-light">English, French</p>
                                </div>

                                <div className="flex flex-col justify-center col-span-2">
                                    <label className="text-sm font-semibold text-[#4B5563]">Software</label>
                                    <p className="text-base text-[#9CA3AF] font-light">
                                        ABELdent, ADSTR A MANAGEMENT, AXXIUM X, AXXIUM R, AXXIUM R+, TRACKER, AD2000,
                                        CADI OPTIMUM, WINDENT, DEXIS, EXCELDENT, X TRAC, CONSULT PRO, CURVE DMS,
                                        DENTIMAX, DIALOG, DOMTRAK, ENTERDENT, ORYX DENTAL SOFTWARE, POWER PRACTICE,
                                        AXIUM, DOVETAIL, GOLD, DENTRIX, OMSVISION, ORTHONOVO, ENDOVISION, DENTALVISION
                                        ENTREPRISE, PERIOVISION, IKLYK, QUADRA DENTAL SOFTWARE, LIVE DDM, DENTONOVO,
                                        MAXIMUS, CLICK, MAXIDENT, PARADIGM, MACPRACTICE DDS, OPEN DENTAL SOFTWARE,
                                        DENTALWARE, EAGLESOFT, CLEARDENT, PROGIDENT, DENTITEK, SENSE, TDO, AUTOPIA,
                                        PROGITEK, AKITU ONE, GID, SIDEXIS, VISION
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div
                            className="relative rounded-[8px] border border-[#E5E7EB] bg-white gap-5 pt-[20px] pr-[16px] pb-[12px] pl-[16px]">
                        <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-[#9CA3AF]">
                            Job Description
                        </span>
                            <div className="grid grid-cols-1 gap-[20px] h-full">
                                <div className="flex flex-col justify-center">
                                    <label className="text-sm font-medium text-[#4B5563]">Detailed Job
                                        Description</label>
                                    <p className="text-base text-[#9CA3AF] font-light">Detailed Job Description</p>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <label className="text-sm font-medium text-[#4B5563]">Mission Description</label>
                                    <p className="text-base text-[#9CA3AF] font-light">Mission Description</p>
                                </div>

                            </div>
                        </div>

                        <div
                            className="relative rounded-[8px] border border-[#E5E7EB] bg-white gap-5 pt-[20px] pr-[16px] pb-[12px] pl-[16px]">
                        <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-[#9CA3AF]">
                            Positions Sought
                        </span>
                            <div className="grid grid-cols-1 gap-[20px] mb-4 h-full">
                                <div
                                    className="mt-4 relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-lg border border-default">
                                    <table className="w-full min-w-[650px] text-sm text-left rtl:text-right text-body">
                                        <thead className="text-sm text-body bg-[#E5E7EB] border-b border-default">
                                        <tr>
                                            <th scope="col"
                                                className="px-6 py-3 font-medium rounded-tl-[8px] w-[10%] sm:w-auto">
                                                #
                                            </th>
                                            <th scope="col" className="px-6 py-3 font-medium w-[50%] sm:w-auto">
                                                Position
                                            </th>
                                            <th scope="col"
                                                className="px-6 py-3 font-medium rounded-tr-[8px] w-[35%] sm:w-auto">
                                                Specialty
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="bg-neutral-primary border-b border-default">
                                            <td scope="row"
                                                className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                                <span className="text-[#2A394B]">1</span>
                                            </td>

                                            <td className="px-6 py-4">
                                                <p className="text-[#2A394B] text-sm">
                                                    General Dentist
                                                </p>
                                            </td>
                                            <td className="px-6 py-4 text-[#2A394B] text-sm">
                                                Baker Street, Bridgewater, NS B4V 2N8, Canada
                                            </td>
                                        </tr>
                                        <tr className="bg-neutral-primary border-b border-default">
                                            <td scope="row"
                                                className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                                <span className="text-[#2A394B]">1</span>
                                            </td>

                                            <td className="px-6 py-4">
                                                <p className="text-[#2A394B] text-sm">
                                                    General Dentist
                                                </p>
                                            </td>
                                            <td className="px-6 py-4 text-[#2A394B] text-sm">
                                                Baker Street, Bridgewater, NS B4V 2N8, Canada
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-[20px] h-full">
                                <div className="flex flex-col justify-center">
                                    <label className="text-sm font-medium text-[#4B5563]">Created At</label>
                                    <p className="text-base text-[#9CA3AF] font-light">
                                        <span className="flex items-center gap-1">
                                            <Clock4 className="w-4 h-4"/>
                                            12/5/2025, 10:29:42 AM
                                        </span>
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <label className="text-sm font-medium text-[#4B5563]">Updated At</label>
                                    <p className="text-base text-[#9CA3AF] font-light">
                                        <span className="flex items-center gap-1">
                                            <Clock4 className="w-4 h-4"/>
                                            12/5/2025, 10:29:42 AM
                                        </span>
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </SimpleBar>

            </SheetContent>
        </Sheet>
    )
}

export default ContractsDetails;