import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.jsx";
import {Badge} from "@/components/ui/badge.jsx";
import {Activity, FileText, ListFilter, MoreVertical, Pill, Stethoscope, XCircle, Clock, User} from "lucide-react";
import React, {useState} from "react";
import PositionCard from "@/components/position-card.jsx";

const industries = [
    {name: "All Industries", value: "all-industries", icon: XCircle},
    {name: "General Medicine", value: "general-medicine", icon: Activity},
    {name: "Dental Care", value: "dental-care", icon: XCircle},
    {name: "Pharmacy", value: 'pharmacy', icon: Pill},
    {name: "Nursing & Home Care", value: 'nursing-home-care', icon: Stethoscope},
];

const positions = [
    {
        id: 1,
        title: "General Dentistry – Temporary Contract",
        location: "Location",
        address: "Baker Street, Bridgewater, NS B4V 2N8, Canada",
        contractValue: "$ 400,000",
        duration: "Nov 20, 2025 - Dec 10, 2025",
        status: "Open",
        type: "Temporary",
        industry: "dental-care",
    },
    {
        id: 2,
        title: "General Dentistry – Temporary Contract",
        location: "Location",
        address: "Baker Street, Bridgewater, NS B4V 2N8, Canada",
        contractValue: "$ 400,000",
        duration: "Nov 20, 2025 - Dec 10, 2025",
        status: "Open",
        type: "Temporary",
        industry: "dental-care",
    },
    {
        id: 3,
        title: "General Dentistry – Temporary Contract",
        location: "Location",
        address: "Baker Street, Bridgewater, NS B4V 2N8, Canada",
        contractValue: "$ 400,000",
        duration: "Nov 20, 2025 - Dec 10, 2025",
        status: "Open",
        type: "Temporary",
        industry: "dental-care",
    },
    {
        id: 7,
        title: "Pharmacy – Permanent Staffing Contract",
        location: "Location",
        address: "Baker Street, Bridgewater, NS B4V 2N8, Canada",
        contractValue: "$ 400,000",
        duration: "2024",
        status: "Open",
        type: "Permanent",
        industry: "pharmacy",
        applied: true,
    },
    {
        id: 8,
        title: "Pharmacy – Permanent Staffing Contract",
        location: "Location",
        address: "Baker Street, Bridgewater, NS B4V 2N8, Canada",
        contractValue: "$ 400,000",
        duration: "2024",
        status: "Open",
        type: "Permanent",
        industry: "pharmacy",
        applied: true,
    },
]

function JobBoardsPage() {
    const [activeTab, setActiveTab] = useState(industries[0].value)

    const filteredPositions = positions.filter((p) => {
        if (activeTab === "temporary" && p.type !== "Temporary") return false
        if (activeTab === "permanent" && p.type !== "Permanent") return false
        return true
    })
    const temporaryPositions = filteredPositions.filter((p) => p.type === "Temporary")
    const permanentPositions = filteredPositions.filter((p) => p.type === "Permanent")
    return (
        <div>
            <Tabs defaultValue={industries[0].value} className="w-full relative overflow-auto"
                  onValueChange={(e) => {
                      setActiveTab(e);
                  }}>

                <button
                    className="md:absolute static flex-shrink-0 w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg text-slate-500 hover:bg-gray-50">
                    <ListFilter size={12}/>
                </button>

                <TabsList
                    className="!p-[4px] !bg-white md:ml-[50px] border border-[#E5E7EB] w-auto md:w-[700px] !h-auto md:h-9  flex md:inline-flex flex-col md:flex-row">

                    {industries.map((item, index) => (
                        <TabsTrigger value={item.value} key={index}
                                     className={activeTab === item.value ? "text-[#2D8FE3] !bg-[#EAF5FE] border border-[#BDD7ED] w-full md:w-auto" : "w-full md:w-auto"}>
                            <item.icon size={16} className={activeTab === item.value ? "text-[#2D8FE3] " : ""}/>
                            {item.name}
                        </TabsTrigger>
                    ))}

                </TabsList>

                <TabsContent className="mt-4" value="all-industries">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-6 w-full">
                        {/* Left Item: Blue */}
                        <div>
                            <div
                                className="flex items-center gap-3 pb-2 border-b-[3px] border-[#2D8FE3] text-[#2D8FE3] mb-3">
                                <Clock className="w-6 h-6" strokeWidth={2}/>
                                <span className="text-base whitespace-nowrap">
                                    Temporary Positions
                              </span>
                                <Badge
                                    variant="outline"
                                    className="ml-1 font-medium bg-[#FBFBFB] text-[#374151] text-[12px] border-[#BDD7ED] px-[10px] py-[10px] w-6 h-6 rounded-lg"
                                >
                                    6
                                </Badge>

                            </div>

                            <div className="grid gap-4 ">
                                {temporaryPositions.map((position) => (
                                    <PositionCard key={position.id} position={position}/>
                                ))}
                            </div>
                        </div>

                        {/* Right Item: Orange */}
                        <div>
                            <div
                                className="flex items-center gap-3 pb-2 border-b-[3px] border-[#F0A33A] text-[#F0A33A] mb-2">
                                {/* Using User icon to simulate the person icon */}
                                <User className="w-6 h-6" strokeWidth={2}/>
                                <span className="text-base whitespace-nowrap">
                                Permanent Positions
                              </span>
                                <Badge
                                    variant="outline"
                                    className="ml-1 font-medium bg-[#FBFBFB] text-[#374151] text-[12px] border-[#BDD7ED] px-[10px] py-[10px] w-6 h-6 rounded-lg"
                                >
                                    2
                                </Badge>
                            </div>
                            <div className="grid gap-4 ">
                                {permanentPositions.map((position) => (
                                    <PositionCard key={position.id} position={position}/>
                                ))}
                            </div>
                        </div>

                    </div>

                </TabsContent>
                <TabsContent className="mt-4" value="general-medicine">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-6 w-full">
                        {/* Left Item: Blue */}
                        <div>
                            <div
                                className="flex items-center gap-3 pb-2 border-b-[3px] border-[#2D8FE3] text-[#2D8FE3] mb-3">
                                <Clock className="w-6 h-6" strokeWidth={2}/>
                                <span className="text-base whitespace-nowrap">
                                    Temporary Positions
                              </span>
                                <Badge
                                    variant="outline"
                                    className="ml-1 font-medium bg-[#FBFBFB] text-[#374151] text-[12px] border-[#BDD7ED] px-[10px] py-[10px] w-6 h-6 rounded-lg"
                                >
                                    6
                                </Badge>

                            </div>

                            <div className="grid gap-4 ">
                                {temporaryPositions.map((position) => (
                                    <PositionCard key={position.id} position={position}/>
                                ))}
                            </div>
                        </div>

                        {/* Right Item: Orange */}
                        <div>
                            <div
                                className="flex items-center gap-3 pb-2 border-b-[3px] border-[#F0A33A] text-[#F0A33A] mb-2">
                                {/* Using User icon to simulate the person icon */}
                                <User className="w-6 h-6" strokeWidth={2}/>
                                <span className="text-base whitespace-nowrap">
                                Permanent Positions
                              </span>
                                <Badge
                                    variant="outline"
                                    className="ml-1 font-medium bg-[#FBFBFB] text-[#374151] text-[12px] border-[#BDD7ED] px-[10px] py-[10px] w-6 h-6 rounded-lg"
                                >
                                    2
                                </Badge>
                            </div>
                            <div className="grid gap-4 ">
                                {permanentPositions.map((position) => (
                                    <PositionCard key={position.id} position={position}/>
                                ))}
                            </div>
                        </div>

                    </div>
                </TabsContent>
                <TabsContent className="mt-4" value="dental-care">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-6 w-full">
                        {/* Left Item: Blue */}
                        <div>
                            <div
                                className="flex items-center gap-3 pb-2 border-b-[3px] border-[#2D8FE3] text-[#2D8FE3] mb-3">
                                <Clock className="w-6 h-6" strokeWidth={2}/>
                                <span className="text-base whitespace-nowrap">
                                    Temporary Positions
                              </span>
                                <Badge
                                    variant="outline"
                                    className="ml-1 font-medium bg-[#FBFBFB] text-[#374151] text-[12px] border-[#BDD7ED] px-[10px] py-[10px] w-6 h-6 rounded-lg"
                                >
                                    6
                                </Badge>

                            </div>

                            <div className="grid gap-4 ">
                                {temporaryPositions.map((position) => (
                                    <PositionCard key={position.id} position={position}/>
                                ))}
                            </div>
                        </div>

                        {/* Right Item: Orange */}
                        <div>
                            <div
                                className="flex items-center gap-3 pb-2 border-b-[3px] border-[#F0A33A] text-[#F0A33A] mb-2">
                                {/* Using User icon to simulate the person icon */}
                                <User className="w-6 h-6" strokeWidth={2}/>
                                <span className="text-base whitespace-nowrap">
                                Permanent Positions
                              </span>
                                <Badge
                                    variant="outline"
                                    className="ml-1 font-medium bg-[#FBFBFB] text-[#374151] text-[12px] border-[#BDD7ED] px-[10px] py-[10px] w-6 h-6 rounded-lg"
                                >
                                    2
                                </Badge>
                            </div>
                            <div className="grid gap-4 ">
                                {permanentPositions.map((position) => (
                                    <PositionCard key={position.id} position={position}/>
                                ))}
                            </div>
                        </div>

                    </div>
                </TabsContent>
                <TabsContent className="mt-4" value="pharmacy">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-6 w-full">
                        {/* Left Item: Blue */}
                        <div>
                            <div
                                className="flex items-center gap-3 pb-2 border-b-[3px] border-[#2D8FE3] text-[#2D8FE3] mb-3">
                                <Clock className="w-6 h-6" strokeWidth={2}/>
                                <span className="text-base whitespace-nowrap">
                                    Temporary Positions
                              </span>
                                <Badge
                                    variant="outline"
                                    className="ml-1 font-medium bg-[#FBFBFB] text-[#374151] text-[12px] border-[#BDD7ED] px-[10px] py-[10px] w-6 h-6 rounded-lg"
                                >
                                    6
                                </Badge>

                            </div>

                            <div className="grid gap-4 ">
                                {temporaryPositions.map((position) => (
                                    <PositionCard key={position.id} position={position}/>
                                ))}
                            </div>
                        </div>

                        {/* Right Item: Orange */}
                        <div>
                            <div
                                className="flex items-center gap-3 pb-2 border-b-[3px] border-[#F0A33A] text-[#F0A33A] mb-2">
                                {/* Using User icon to simulate the person icon */}
                                <User className="w-6 h-6" strokeWidth={2}/>
                                <span className="text-base whitespace-nowrap">
                                Permanent Positions
                              </span>
                                <Badge
                                    variant="outline"
                                    className="ml-1 font-medium bg-[#FBFBFB] text-[#374151] text-[12px] border-[#BDD7ED] px-[10px] py-[10px] w-6 h-6 rounded-lg"
                                >
                                    2
                                </Badge>
                            </div>
                            <div className="grid gap-4 ">
                                {permanentPositions.map((position) => (
                                    <PositionCard key={position.id} position={position}/>
                                ))}
                            </div>
                        </div>

                    </div>
                </TabsContent>
                <TabsContent className="mt-4" value="nursing-home-care">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-6 w-full">
                        {/* Left Item: Blue */}
                        <div>
                            <div
                                className="flex items-center gap-3 pb-2 border-b-[3px] border-[#2D8FE3] text-[#2D8FE3] mb-3">
                                <Clock className="w-6 h-6" strokeWidth={2}/>
                                <span className="text-base whitespace-nowrap">
                                    Temporary Positions
                              </span>
                                <Badge
                                    variant="outline"
                                    className="ml-1 font-medium bg-[#FBFBFB] text-[#374151] text-[12px] border-[#BDD7ED] px-[10px] py-[10px] w-6 h-6 rounded-lg"
                                >
                                    6
                                </Badge>

                            </div>

                            <div className="grid gap-4 ">
                                {temporaryPositions.map((position) => (
                                    <PositionCard key={position.id} position={position}/>
                                ))}
                            </div>
                        </div>

                        {/* Right Item: Orange */}
                        <div>
                            <div
                                className="flex items-center gap-3 pb-2 border-b-[3px] border-[#F0A33A] text-[#F0A33A] mb-2">
                                {/* Using User icon to simulate the person icon */}
                                <User className="w-6 h-6" strokeWidth={2}/>
                                <span className="text-base whitespace-nowrap">
                                Permanent Positions
                              </span>
                                <Badge
                                    variant="outline"
                                    className="ml-1 font-medium bg-[#FBFBFB] text-[#374151] text-[12px] border-[#BDD7ED] px-[10px] py-[10px] w-6 h-6 rounded-lg"
                                >
                                    2
                                </Badge>
                            </div>
                            <div className="grid gap-4 ">
                                {permanentPositions.map((position) => (
                                    <PositionCard key={position.id} position={position}/>
                                ))}
                            </div>
                        </div>

                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default JobBoardsPage;