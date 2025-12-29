import React from "react";

const stats = [
    {label: "Total Agreements", value: 5},
    {label: "Pending Your Signature", value: 3},
    {label: "Fully Signed", value: 2},
    {label: "Expired", value: 0},
];

function AgreementsPage() {
    return (
        <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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
        </div>
    )
}

export default AgreementsPage;