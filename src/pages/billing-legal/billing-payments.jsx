import MatricsGrid from "@/components/metrics-grid.jsx";
import {Card} from "@/components/ui/card.jsx";
import {Info} from "lucide-react";
import BillingPaymentTopBar from "@/components/billing-payment/billing-payment-top-bar.jsx";
import KeyBenefits from "@/components/billing-payment/key-benefits.jsx";
import BenefitTable from "@/components/billing-payment/benefit-table.jsx";

const billingPaymentsStats = [
    {label: "Total Spent", value: "$1,250.00"},
    {label: "This Month", value: "$450.00"},
    {label: "Paid Invoices", value: 12},
    {label: "Pending", value: 3},
];

function BillingPaymentsPage() {
    return (
        <div className="space-y-3">
            <MatricsGrid stats={billingPaymentsStats}/>
            <Card
                className="bg-white rounded-xl border border-gray-200 p-3 md:p-6 shadow-[0px_9px_24px_0px_#00000008] flex flex-col gap-8">
                <h2 className="text-xl text-[#194185] font-bold text-center">Your Plan</h2>

                <div className="space-y-4">
                    {/* Top Banner */}
                    <BillingPaymentTopBar/>

                    <div
                        className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div className="space-y-1">
                                <h4 className="text-2xl font-medium text-[#194185]">Monthly Subscription</h4>
                                <p className="text-[#194185] text-[18px]">Triggered upon your 2nd booked contract of
                                    the month</p>
                            </div>
                            <div
                                className="inline-flex items-baseline rounded-xl bg-[#EEF7FF] border border-[#DBEEFF] p-5">
                                    <span className="text-[32px] font-extrabold text-[#2D8FE3] leading-none">
                                        $300
                                    </span>
                                <span className="ml-2 text-sm text-[#2D8FE3]">
                                        CAD/month
                                    </span>
                            </div>
                        </div>

                        {/* Key Benefits */}
                        <KeyBenefits/>

                        {/* Benefits Table */}
                        <BenefitTable/>


                        <div
                            className="mt-4 flex items-start  gap-3 rounded-lg bg-[#DBEEFF] p-2 border">
                            <Info className="h-5 w-5 flex-shrink-0 text-[#2D8FE3]"/>
                            <p className="text-sm text-[#2A394B] leading-relaxed">
                                <span className="font-medium text-[#2D8FE3]">Note</span> All prices shown are before
                                taxes.
                                GST/HST/PST/QST
                                will be applied based on your province at checkout.
                            </p>
                        </div>

                    </div>
                </div>
            </Card>
        </div>
    )
}

export default BillingPaymentsPage;