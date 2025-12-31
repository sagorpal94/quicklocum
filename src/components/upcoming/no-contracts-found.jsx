import React from 'react';
import {Search} from 'lucide-react';

const NoContractsFound = () => {
    return (
        <div
            className="w-full min-h-[204px] bg-[#F3F9FE] rounded-[12px] p-8 flex flex-col items-center justify-center gap-4 text-center border border-transparent">

            {/* Icon Container - White Circle */}
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center ">
                <Search
                    className="w-10 h-10 text-[#2D8FE3]"
                    strokeWidth={2}
                />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-1">
                <h3 className="text-[#2A394B] font-bold text-lg">
                    No Contracts Found
                </h3>
                <p className="text-[#2A394B] text-sm sm:text-base opacity-90">
                    You don’t have upcoming contracts at the moment
                </p>
            </div>

        </div>
    );
};

export default NoContractsFound;