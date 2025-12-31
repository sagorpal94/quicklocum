import {
    Stethoscope,
    Pill,
    Activity,
    XCircle, Bluetooth as Tooth,
} from 'lucide-react';
import MetricsGrid from "@/components/metrics-grid.jsx";
import CustomTab from "@/components/custom-tab.jsx";
import ApplicationCard from "@/components/application/application-card.jsx";

const stats = [
    {label: "Pending", value: 1},
    {label: "Accepted", value: 0},
    {label: "Rejected", value: 0},
    {label: "Withdrawn", value: 0},
];

const industryTabs = [
    {
        value: "all",
        label: "All Industries",
        icon: XCircle,
        content: <ApplicationCard title="All Industries"/>,
    },
    {
        value: "general-medicine",
        label: "General Medicine",
        icon: Activity,
        content: <ApplicationCard title="General Medicine"/>,
    },
    {
        value: "dental-care",
        label: "Dental Care",
        icon: Tooth,
        content: <ApplicationCard title="Dental Care"/>,
    },
    {
        label: "Pharmacy",
        value: 'pharmacy',
        icon: Pill,
        content: <ApplicationCard title="Pharmacy"/>,
    },
    {
        label: "Nursing & Home Care",
        value: 'nursing-home-care',
        icon: Stethoscope,
        content: <ApplicationCard title="Stethoscope"/>,
    },
]

function ApplicationsPage() {
    return (
        <div className="min-h-screen">

            <MetricsGrid stats={stats}/>

            <div className="mx-auto w-full md:w-[calc(100vw-304px)]">

                <CustomTab tabs={industryTabs} defaultValue="all" showFilterButton={true}/>

            </div>

        </div>
    )
}

export default ApplicationsPage;