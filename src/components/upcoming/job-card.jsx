import {Calendar, Clock, MapPin, User} from "lucide-react";

export const JobCard = () => {
    return (
        <div className="bg-[white] rounded-lg border border-[#D1D5DB] p-3 shadow-sm hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex flex-col flex-wrap sm:flex-row justify-between items-start gap-3 mb-4">
                <div>
                    <h3 className="text-base font-semibold text-[#194185]">Registered Nurse</h3>
                    <p className="text-xs text-black mt-0.5">City General Hospital</p>
                </div>
                <span
                    className="bg-[#FAF4DE] text-[#E08913] text-xs px-3 py-2 rounded-md whitespace-nowrap">
                      Starting Soon (1-3 Days)
                    </span>
            </div>

            {/* Details List */}
            <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#374151]">
                    <MapPin size={12} className="text-[#374151] shrink-0"/>
                    <span className="text-xs font-medium">San Francisco, CA</span>
                </div>

                <div className="flex items-center gap-3 text-[#374151]">
                    <Calendar size={12} className="text-[#374151] shrink-0"/>
                    <span className="text-xs ">Jan 15, 2025 — Mar 15, 2025</span>
                </div>

                <div className="flex items-center gap-3 text-[#374151]">
                    <Clock size={18} className="text-[#374151] shrink-0"/>
                    <span className="text-xs ">Day Shift (7am - 7pm)</span>
                </div>

                <div className="flex items-center gap-3 text-[#374151]">
                    <User size={18} className="text-[#374151] shrink-0"/>
                    <span className="text-xs ">Sarah Johnson, RN</span>
                </div>
            </div>
        </div>
    );
};