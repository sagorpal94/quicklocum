
const stats = [
    {label: "Total Applicants", value: 5},
    {label: "Pending", value: 3},
    {label: "Accepted", value: 2},
];
function PaymentHistoryPage(){
    return(
        <div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
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

export default PaymentHistoryPage;