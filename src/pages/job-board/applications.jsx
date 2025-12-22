import React, {useState} from 'react';
import {
    Stethoscope,
    Pill,
    Activity,
    MoreVertical,
    FileText,
    XCircle, ListFilter,
} from 'lucide-react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

const stats = [
    {label: "Pending", value: 1},
    {label: "Accepted", value: 0},
    {label: "Rejected", value: 0},
    {label: "Withdrawn", value: 0},
];

const industries = [
    {name: "All Industries", value: "all-industries", icon: XCircle},
    {name: "General Medicine", value: "general-medicine", icon: Activity},
    {name: "Dental Care", value: "dental-care", icon: XCircle},
    {name: "Pharmacy", value: 'pharmacy', icon: Pill},
    {name: "Nursing & Home Care", value: 'nursing-home-care', icon: Stethoscope},
];

function ApplicationsPage() {
    const [activeTab, setActiveTab] = useState(industries[0].value)
    return (
        <div className="min-h-screen">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-4 flex flex-col justify-between h-24 hover:shadow-sm transition-shadow bg-white"
                    >
                        <span className={`text-base font-medium text-[#194185]`}>
                          {stat.label}
                        </span>
                        <span className={`text-3xl text-right text-[#194185]`}>
                          {stat.value}
                        </span>
                    </div>
                ))}
            </div>

            <div className="">
                <Tabs defaultValue={industries[0].value} className="w-full relative overflow-auto"
                      onValueChange={(e) => {
                          setActiveTab(e);
                      }}>

                    <button
                        className="md:absolute static flex-shrink-0 w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg text-slate-500 hover:bg-gray-50">
                        <ListFilter size={12}/>
                    </button>

                    <TabsList
                        className="!p-[4px] !bg-white md:ml-[50px] border border-[#E5E7EB] !w-auto !h-auto md:h-9  flex md:inline-flex flex-col md:flex-row">

                        {industries.map((item, index) => (
                            <TabsTrigger value={item.value} key={index}
                                         className={activeTab === item.value ? "text-[#2D8FE3] !bg-[#EAF5FE] border border-[#BDD7ED] w-full md:w-auto" : "w-full md:w-auto"}>
                                <item.icon size={16} className={activeTab === item.value ? "text-[#2D8FE3] " : ""}/>
                                {item.name}
                            </TabsTrigger>
                        ))}

                    </TabsList>

                    <TabsContent className="mt-4" value="all-industries">
                        <div
                            className="border border-gray-200 rounded-xl p-5 md:p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-center flex-wrap gap-5">
                                <p className="text-gray-400 text-sm font-medium">#1</p>
                                <div className="flex items-center gap-2 mb-1">
                                    <div
                                        className="flex items-center justify-between md:justify-end w-full md:w-auto gap-3">
                                            <span
                                                className="bg-[#FBF1E7] text-[#F36B2D] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide border border-orange-100">
                                              Pending
                                            </span>
                                        <button
                                            className="text-[#2A394B] bg-[#F3F4F6] p-1 rounded-lg ">
                                            <MoreVertical size={24}/>
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 w-full">
                                <div className="flex-1">
                                    <h3 className="text-base font-medium text-[#2A394B]">
                                        All Industries – Permanent Staffing Contract
                                    </h3>
                                </div>
                            </div>

                            <div className="flex justify-between items-center flex-wrap gap-6 mb-2">
                                <div>
                                    <p className="text-xs text-[#6B7280] mb-1">Contract value</p>
                                    <p className="text-sm font-medium text-[#2D8FE3]">$ 400,000</p>
                                </div>
                                <div>
                                    <p className="text-xs text-[#6B7280] mb-1">Applied</p>
                                    <p className="text-sm font-medium text-[#2A394B]">Apr 12, 2025</p>
                                </div>
                                <div>
                                    <p className="text-xs text-[#6B7280] mb-1">Starts from</p>
                                    <p className="text-sm font-medium text-[#2A394B]">Nov 23, 2025</p>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                                    <button
                                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-[2px] border-[#BDD7ED] text-[#2D8FE3] bg-[#EAF5FE]  font-medium text-sm transition-colors">
                                        <FileText size={16}/>
                                        Contract details
                                    </button>
                                    <button
                                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-[2px] border-red-200 text-[#ED354A] bg-[#FCF1F1]  font-medium text-sm transition-colors">
                                        <XCircle size={16}/>
                                        Withdraw Application
                                    </button>
                                </div>

                            </div>
                        </div>

                    </TabsContent>
                    <TabsContent className="mt-4" value="general-medicine">
                        <div
                            className="border border-gray-200 rounded-xl p-5 md:p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-center flex-wrap gap-5">
                                <p className="text-gray-400 text-sm font-medium">#1</p>
                                <div className="flex items-center gap-2 mb-1">
                                    <div
                                        className="flex items-center justify-between md:justify-end w-full md:w-auto gap-3">
                                            <span
                                                className="bg-[#FBF1E7] text-[#F36B2D] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide border border-orange-100">
                                              Pending
                                            </span>
                                        <button
                                            className="text-[#2A394B] bg-[#F3F4F6] p-1 rounded-lg ">
                                            <MoreVertical size={24}/>
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 w-full">
                                <div className="flex-1">
                                    <h3 className="text-base font-medium text-[#2A394B]">
                                        General Medicine – Permanent Staffing Contract
                                    </h3>
                                </div>
                            </div>

                            <div className="flex justify-between items-center flex-wrap gap-6 mb-2">
                                <div>
                                    <p className="text-xs text-[#6B7280] mb-1">Contract value</p>
                                    <p className="text-sm font-medium text-[#2D8FE3]">$ 400,000</p>
                                </div>
                                <div>
                                    <p className="text-xs text-[#6B7280] mb-1">Applied</p>
                                    <p className="text-sm font-medium text-[#2A394B]">Apr 12, 2025</p>
                                </div>
                                <div>
                                    <p className="text-xs text-[#6B7280] mb-1">Starts from</p>
                                    <p className="text-sm font-medium text-[#2A394B]">Nov 23, 2025</p>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                                    <button
                                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-[2px] border-[#BDD7ED] text-[#2D8FE3] bg-[#EAF5FE]  font-medium text-sm transition-colors">
                                        <FileText size={16}/>
                                        Contract details
                                    </button>
                                    <button
                                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-[2px] border-red-200 text-[#ED354A] bg-[#FCF1F1]  font-medium text-sm transition-colors">
                                        <XCircle size={16}/>
                                        Withdraw Application
                                    </button>
                                </div>

                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent className="mt-4" value="dental-care">
                        <div
                            className="border border-gray-200 rounded-xl p-5 md:p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-center flex-wrap gap-5">
                                <p className="text-gray-400 text-sm font-medium">#1</p>
                                <div className="flex items-center gap-2 mb-1">
                                    <div
                                        className="flex items-center justify-between md:justify-end w-full md:w-auto gap-3">
                                            <span
                                                className="bg-[#FBF1E7] text-[#F36B2D] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide border border-orange-100">
                                              Pending
                                            </span>
                                        <button
                                            className="text-[#2A394B] bg-[#F3F4F6] p-1 rounded-lg ">
                                            <MoreVertical size={24}/>
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 w-full">
                                <div className="flex-1">
                                    <h3 className="text-base font-medium text-[#2A394B]">
                                        Dental – Permanent Staffing Contract
                                    </h3>
                                </div>
                            </div>

                            <div className="flex justify-between items-center flex-wrap gap-6 mb-2">
                                <div>
                                    <p className="text-xs text-[#6B7280] mb-1">Contract value</p>
                                    <p className="text-sm font-medium text-[#2D8FE3]">$ 400,000</p>
                                </div>
                                <div>
                                    <p className="text-xs text-[#6B7280] mb-1">Applied</p>
                                    <p className="text-sm font-medium text-[#2A394B]">Apr 12, 2025</p>
                                </div>
                                <div>
                                    <p className="text-xs text-[#6B7280] mb-1">Starts from</p>
                                    <p className="text-sm font-medium text-[#2A394B]">Nov 23, 2025</p>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                                    <button
                                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-[2px] border-[#BDD7ED] text-[#2D8FE3] bg-[#EAF5FE]  font-medium text-sm transition-colors">
                                        <FileText size={16}/>
                                        Contract details
                                    </button>
                                    <button
                                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-[2px] border-red-200 text-[#ED354A] bg-[#FCF1F1]  font-medium text-sm transition-colors">
                                        <XCircle size={16}/>
                                        Withdraw Application
                                    </button>
                                </div>

                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent className="mt-4" value="pharmacy">
                        <div
                            className="border border-gray-200 rounded-xl p-5 md:p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-center flex-wrap gap-5">
                                <p className="text-gray-400 text-sm font-medium">#1</p>
                                <div className="flex items-center gap-2 mb-1">
                                    <div
                                        className="flex items-center justify-between md:justify-end w-full md:w-auto gap-3">
                                            <span
                                                className="bg-[#FBF1E7] text-[#F36B2D] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide border border-orange-100">
                                              Pending
                                            </span>
                                        <button
                                            className="text-[#2A394B] bg-[#F3F4F6] p-1 rounded-lg ">
                                            <MoreVertical size={24}/>
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 w-full">
                                <div className="flex-1">
                                    <h3 className="text-base font-medium text-[#2A394B]">
                                        Pharmacy – Permanent Staffing Contract
                                    </h3>
                                </div>
                            </div>

                            <div className="flex justify-between items-center flex-wrap gap-6 mb-2">
                                <div>
                                    <p className="text-xs text-[#6B7280] mb-1">Contract value</p>
                                    <p className="text-sm font-medium text-[#2D8FE3]">$ 400,000</p>
                                </div>
                                <div>
                                    <p className="text-xs text-[#6B7280] mb-1">Applied</p>
                                    <p className="text-sm font-medium text-[#2A394B]">Apr 12, 2025</p>
                                </div>
                                <div>
                                    <p className="text-xs text-[#6B7280] mb-1">Starts from</p>
                                    <p className="text-sm font-medium text-[#2A394B]">Nov 23, 2025</p>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                                    <button
                                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-[2px] border-[#BDD7ED] text-[#2D8FE3] bg-[#EAF5FE]  font-medium text-sm transition-colors">
                                        <FileText size={16}/>
                                        Contract details
                                    </button>
                                    <button
                                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-[2px] border-red-200 text-[#ED354A] bg-[#FCF1F1]  font-medium text-sm transition-colors">
                                        <XCircle size={16}/>
                                        Withdraw Application
                                    </button>
                                </div>

                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent className="mt-4" value="nursing-home-care">
                        <div
                            className="border border-gray-200 rounded-xl p-5 md:p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-center flex-wrap gap-5">
                                <p className="text-gray-400 text-sm font-medium">#1</p>
                                <div className="flex items-center gap-2 mb-1">
                                    <div
                                        className="flex items-center justify-between md:justify-end w-full md:w-auto gap-3">
                                            <span
                                                className="bg-[#FBF1E7] text-[#F36B2D] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide border border-orange-100">
                                              Pending
                                            </span>
                                        <button
                                            className="text-[#2A394B] bg-[#F3F4F6] p-1 rounded-lg ">
                                            <MoreVertical size={24}/>
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 w-full">
                                <div className="flex-1">
                                    <h3 className="text-base font-medium text-[#2A394B]">
                                        Nursing Home Care – Permanent Staffing Contract
                                    </h3>
                                </div>
                            </div>

                            <div className="flex justify-between items-center flex-wrap gap-6 mb-2">
                                <div>
                                    <p className="text-xs text-[#6B7280] mb-1">Contract value</p>
                                    <p className="text-sm font-medium text-[#2D8FE3]">$ 400,000</p>
                                </div>
                                <div>
                                    <p className="text-xs text-[#6B7280] mb-1">Applied</p>
                                    <p className="text-sm font-medium text-[#2A394B]">Apr 12, 2025</p>
                                </div>
                                <div>
                                    <p className="text-xs text-[#6B7280] mb-1">Starts from</p>
                                    <p className="text-sm font-medium text-[#2A394B]">Nov 23, 2025</p>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                                    <button
                                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-[2px] border-[#BDD7ED] text-[#2D8FE3] bg-[#EAF5FE]  font-medium text-sm transition-colors">
                                        <FileText size={16}/>
                                        Contract details
                                    </button>
                                    <button
                                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-[2px] border-red-200 text-[#ED354A] bg-[#FCF1F1]  font-medium text-sm transition-colors">
                                        <XCircle size={16}/>
                                        Withdraw Application
                                    </button>
                                </div>

                            </div>
                        </div>
                    </TabsContent>
                </Tabs>

            </div>

        </div>
    )
}

export default ApplicationsPage;