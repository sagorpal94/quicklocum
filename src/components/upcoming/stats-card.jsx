import React from "react";
import {MoreHorizontal, TrendingDown, TrendingUp} from "lucide-react";

export const StatsCard = ({title, count, trend, trendValue, subtitle}) => {
    const isPositive = trend === 'up';

    return (
        <div
            className="bg-[#F3F9FE] p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#216CD2]"></div>
                    <span className="text-sm font-medium text-[#2A394B]">{title}</span>
                </div>
                <button className="text-slate-400 hover:text-slate-600">
                    <MoreHorizontal size={18}/>
                </button>
            </div>

            <div className="mt-2 bg-white p-3 rounded-xl">
                <div className="flex items-center gap-3">
                    <span className="text-[32px] font-medium text-[#2A394B]">{count}</span>
                    <span className={`flex items-center text-[10px] w-10 h-[18px] font-bold p-1 rounded ${
                        isPositive ? 'bg-[#F1F9F8] text-[#34C759]' : 'bg-[#FCF9F8] text-[#ED354A]'
                    }`}>
                        {isPositive ?
                            <TrendingUp size={12} className="mr-1"/> :
                            <TrendingDown size={12} className="mr-1"/>}
                        {trendValue}
                      </span>
                </div>
                <p className="text-xs text-[#374151] font-normal">{subtitle}</p>
            </div>
        </div>
    );
};