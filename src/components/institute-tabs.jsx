import {
    Building2,
    Contact,
    FileText,
    CreditCard,
    FileBadge,
    CheckCircle,
    Lock, BadgeCheck,
} from "lucide-react"
import {useState} from "react"
import SimpleBar from "simplebar-react";
import {Card, CardContent} from "@/components/ui/card.jsx";
import AgencyInformation from "@/components/agency-information.jsx";
import PrimaryContactInformation from "@/components/primary-contact-information.jsx";
import ServiceDetails from "@/components/service-details.jsx";
import BillingInformationForm from "@/components/billing-information-form.jsx";
import RequiredDocuments from "@/components/required-documents.jsx";

const tabs = [
    {id: "category", label: "Institute Category & Details", icon: Building2},
    {id: "contact", label: "Contact Information", icon: Contact},
    {id: "service", label: "Service Details", icon: FileText},
    {id: "billing", label: "Billing Information", icon: CreditCard},
    {id: "document", label: "Required Document", icon: FileBadge},
]


export function InstituteTabs() {
    const [activeTab, setActiveTab] = useState("category")


    return (
        <>
            <SimpleBar className="max-w-full">
                <div className="w-full bg-white">
                    <div className="flex min-w-max border-b border-gray-200">
                        {tabs.map((tab) => {
                            const Icon = tab.icon
                            const isActive = activeTab === tab.id

                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 whitespace-nowrap border-b-2 px-6 py-4 text-sm font-medium transition-colors ${
                                        isActive ? "border-blue-500 text-blue-600" : "border-transparent text-gray-600 hover:text-gray-900"
                                    }`}
                                >
                                    <Icon className="h-5 w-5"/>
                                    <span className="hidden sm:inline">{tab.label}</span>
                                    <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </SimpleBar>


            <Card className="mt-5">
                <CardContent>
                    {activeTab === "category" && (
                        <div className="space-y-8">
                            {/* Institute Category Section */}
                            <div>
                                <h2 className="mb-4 text-lg font-semibold text-gray-900">Institute Category</h2>

                                {/* Category Display Card */}
                                <div className="mb-3 flex items-center justify-between rounded-lg bg-blue-50 p-4">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                                            <Lock className="h-5 w-5 text-white"/>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Category</p>
                                            <p className="text-lg font-semibold text-blue-700">Recruitment
                                                Agency</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-2 rounded-lg bg-[#34C759] px-4 py-2 text-sm font-medium text-white">
                                        <BadgeCheck className="h-4 w-4 text-[#34C759]" fill="#fff"/>
                                        Verified
                                    </div>
                                </div>

                                {/* Warning Message */}
                                <div className="flex items-start gap-2 rounded-lg bg-red-50 p-4">
                                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center">
                                        <div
                                            className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-red-500">
                                            <span className="text-xs font-bold text-red-500">!</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-700">
                                        Institute Category cannot be changed once saved. Contact support if you need
                                        to
                                        modify this.
                                    </p>
                                </div>
                            </div>

                            {/* Agency Information Section */}
                            <AgencyInformation/>
                        </div>
                    )}


                    {activeTab === "contact" && (
                        <PrimaryContactInformation/>
                    )}

                    {activeTab === "service" && (
                        <ServiceDetails />
                    )}

                    {activeTab === "billing" && (
                        <BillingInformationForm />
                    )}

                    {activeTab === "document" && (
                        <RequiredDocuments />
                    )}
                </CardContent>
            </Card>

        </>
    )
}
