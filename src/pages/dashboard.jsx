import {Card} from "@/components/ui/card.jsx";

function DashboardPages() {
    // Data simulating the screenshot content
    const applicants = [
        {
            id: 1,
            name: "James Smith",
            contract: "Contract Title",
            time: "15 min ago",
            avatar: "https://i.pravatar.cc/150?img=11", // Placeholder image
        },
        {
            id: 2,
            name: "Liam Johnson",
            contract: "Contract Title",
            time: "3 hours ago",
            avatar: "https://i.pravatar.cc/150?img=5",
        },
        {
            id: 3,
            name: "Sophia Brown",
            contract: "Contract Title",
            time: "Yesterday",
            avatar: "https://i.pravatar.cc/150?img=9",
        },
        {
            id: 4,
            name: "Olivia Williams",
            contract: "Contract Title",
            time: "1 Dec, 2025",
            avatar: "https://i.pravatar.cc/150?img=24",
        },
        {
            id: 5,
            name: "Noah Jones",
            contract: "Contract Title",
            time: "29 Nov, 2025",
            avatar: "https://i.pravatar.cc/150?img=13",
        },
    ];
    return (
        <>
            {/*<div className="flex flex-1 flex-col gap-4 p-4 pt-0">*/}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-stretch">
                    {/* Left Column - Metrics Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 h-full">
                        {/* Time to fill */}
                        <Card
                            className="bg-white lg:col-span-3 flex flex-col justify-between p-3 border border-[rgba(230,230,235,1)] rounded-lg">
                            <h3 className="text-sm text-[#102A56] mb-2">Time to fill</h3>
                            <p className="font-light text-[40px] leading-none tracking-normal text-right text-[#707070]">10</p>
                        </Card>

                        {/* Fill Rate */}
                        <Card
                            className="bg-white lg:col-span-3 flex flex-col justify-between p-3 border border-[rgba(230,230,235,1)] rounded-lg">
                            <h3 className="text-sm text-[#102A56] mb-2 font-normal">Fill Rate</h3>
                            <p className="font-light text-[40px] leading-none tracking-normal text-right text-[#707070]">1</p>
                        </Card>

                        {/* Response Time */}
                        <Card
                            className="bg-white lg:col-span-2 flex flex-col justify-between p-3 border border-[rgba(230,230,235,1)] rounded-lg">
                            <h3 className="text-sm text-[#102A56] mb-2 font-normal">Response Time</h3>
                            <p className="font-light text-[40px] leading-none tracking-normal text-right text-[#707070]">6</p>
                        </Card>

                        {/* Cancellation Rate */}
                        <Card
                            className="bg-white lg:col-span-2 flex flex-col justify-between p-3 border border-[rgba(230,230,235,1)] rounded-lg">
                            <h3 className="text-sm text-[#102A56] mb-2 font-normal">Cancellation Rate</h3>
                            <p className="font-light text-[40px] leading-none tracking-normal text-right text-[#707070]">2</p>
                        </Card>

                        {/* Acceptance Rate */}
                        <Card
                            className="bg-white lg:col-span-2 flex flex-col justify-between p-3 border border-[rgba(230,230,235,1)] rounded-lg">
                            <h3 className="text-sm text-[#102A56] mb-2 font-normal">Acceptance Rate</h3>
                            <p className="font-light text-[40px] leading-none tracking-normal text-right text-[#707070]">1</p>
                        </Card>
                    </div>

                    {/* Right Column - Contract Status */}
                    <div className="max-w-6xl mx-auto w-full h-full">
                        <div
                            className="rounded-2xl p-4 shadow-sm bg-gradient-to-r from-[#EAF5FE] to-[#DBEEFF] h-full flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                                <h2 className="text-sm font-medium text-[#102A56]">Contract status</h2>
                                <div className="flex gap-2 items-center">
                                    <span className="text-base text-[#194185] font-medium">Total</span>
                                    <span className="text-[32px] leading-[1] font-normal text-[#194185]">10</span>
                                </div>
                            </div>

                            <div className="my-4 h-px w-full bg-white"></div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0">

                                <div className="p-4 md:border-r border-b border-white">
                                    <p className="text-lg text-[#4a6fae]">Pending</p>
                                    <p className="text-4xl font-light text-[#163b7c] text-right">1</p>
                                </div>
                                <div className="p-4 md:border-r border-b border-white">
                                    <p className="text-lg text-[#4a6fae]">Open</p>
                                    <p className="text-4xl font-light text-[#163b7c] text-right">6</p>
                                </div>
                                <div className="p-4 border-b border-white">
                                    <p className="text-lg text-[#4a6fae]">Pending Sign</p>
                                    <p className="text-4xl font-light text-[#163b7c] text-right">2</p>
                                </div>
                                <div className="p-4 md:border-r border-b md:border-b-0 border-white">
                                    <p className="text-lg text-[#4a6fae]">Booked</p>
                                    <p className="text-4xl font-light text-[#163b7c] text-right">1</p>
                                </div>
                                <div className="p-4 md:border-r border-b md:border-b-0  border-white">
                                    <p className="text-lg text-[#4a6fae]">Closed</p>
                                    <p className="text-4xl font-light text-[#163b7c] text-right">0</p>
                                </div>
                                <div className="p-4  border-white">
                                    <p className="text-lg text-[#4a6fae]">Cancelled</p>
                                    <p className="text-4xl font-light text-[#163b7c] text-right">0</p>
                                </div>
                                {/*</div>*/}

                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-2">
                    <Card className="p-4 md:col-span-7">
                        <div className="flex items-center justify-between flex-wrap mb-6">
                            <h3 className="text-sm font-semibold text-gray-900">6 Month Contract Trend</h3>
                            <div className="flex items-center gap-4 text-xs">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                                    <span className="text-gray-600">Published</span>
                                    <span className="font-semibold text-gray-900">15</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                    <span className="text-gray-600">Booked</span>
                                    <span className="font-semibold text-gray-900">210</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-4 md:col-span-5 md:col-start-8 md:row-span-2 ">

                        <h2 className="text-sm font-medium text-[#102A56] mb-6">Applications</h2>

                        {/* Stats Section */}
                        <div
                            className="bg-[#F6F6FB] rounded-[6px] p-3 md:p-6 flex items-center justify-center md:justify-between gap-3 mb-2">
                            <div className="flex flex-col">
                                <span className="text-xl font-normal text-[#2E90FA]">4</span>
                                <span
                                    className="text-[10px] text-[#404040] mt-1 font-normal">Total Received</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-normal text-[#2E90FA]">1</span>
                                <span
                                    className="text-[10px] text-[#404040] mt-1 font-normal">Pending Review</span>
                            </div>
                        </div>

                        {/* New Applicants Section */}
                        <h3 className="text-sm font-normal text-[#404040] mb-4">New Applicants</h3>

                        {/* List Container */}
                        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                            <div className="divide-y divide-gray-100">
                                {applicants.map((applicant) => (
                                    <div
                                        key={applicant.id}
                                        className="flex items-center p-4 hover:bg-gray-50 transition-colors duration-200 group cursor-pointer"
                                    >
                                        {/* Avatar */}
                                        <img
                                            src={applicant.avatar}
                                            alt={applicant.name}
                                            className="w-10 h-10 rounded-full object-cover border-2 border-transparent group-hover:border-blue-100"
                                        />

                                        {/* Info */}
                                        <div className="ml-4 flex-1 min-w-0">
                                            <h4 className="text-base font-medium text-[#333333] truncate">
                                                {applicant.name}
                                            </h4>
                                            <p className="text-[10px] text-[#8E8E8E] truncate">
                                                Applied for <span
                                                className="text-[#175CD3] font-normal">{applicant.contract}</span>
                                            </p>
                                        </div>

                                        {/* Time */}
                                        <div className="ml-2 text-[10px] text-[#8E8E8E] whitespace-nowrap">
                                            {applicant.time}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Action Button (FAB) */}
                        {/*<div className="absolute -bottom-2 -right-2">*/}
                        {/*    <button*/}
                        {/*        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center">*/}
                        {/*        <LayoutGrid size={24}/>*/}
                        {/*    </button>*/}
                        {/*</div>*/}

                    </Card>

                    <Card className="p-4 md:col-span-7">3</Card>
                </div>
        </>
    )
}

export default DashboardPages;