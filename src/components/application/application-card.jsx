import {FileText, MoreVertical, XCircle} from "lucide-react";

export default function ApplicationCard({title}) {
    return (
        <div
            className="border border-gray-200 rounded-xl mt-5 p-5 md:p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
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
                        {title} – Permanent Staffing Contract
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
    )
}