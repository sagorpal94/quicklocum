import React, { useMemo } from "react";
import {
    Activity,
    Pill,
    Stethoscope,
    XCircle,
    Bluetooth as Tooth,
} from "lucide-react";
import CustomTab from "@/components/custom-tab.jsx";
import {IndustryContent} from "@/components/job/industry-content.jsx";

// 1. Static Configuration for Tabs (Labels, Values, Icons only)
const TAB_CONFIG = [
    { value: "all", label: "All Industries", icon: XCircle },
    { value: "general-medicine", label: "General Medicine", icon: Activity },
    { value: "dental-care", label: "Dental Care", icon: Tooth },
    { value: "pharmacy", label: "Pharmacy", icon: Pill },
    { value: "nursing-home-care", label: "Nursing & Home Care", icon: Stethoscope },
];

// 2. Dummy Data
const positions = [
    {
        id: 1,
        title: "General Dentistry – Temporary Contract",
        location: "Location",
        address: "Baker Street, Bridgewater, NS B4V 2N8, Canada",
        contractValue: "$ 400,000",
        duration: "Nov 20, 2025 - Dec 10, 2025",
        status: "Open",
        type: "Temporary",
        industry: "dental-care",
    },
    {
        id: 2,
        title: "General Dentistry – Temporary Contract",
        location: "Location",
        address: "Baker Street, Bridgewater, NS B4V 2N8, Canada",
        contractValue: "$ 400,000",
        duration: "Nov 20, 2025 - Dec 10, 2025",
        status: "Open",
        type: "Temporary",
        industry: "dental-care",
    },
    {
        id: 7,
        title: "Pharmacy – Permanent Staffing Contract",
        location: "Location",
        address: "Baker Street, Bridgewater, NS B4V 2N8, Canada",
        contractValue: "$ 400,000",
        duration: "2024",
        status: "Open",
        type: "Permanent",
        industry: "pharmacy",
        applied: true,
    },
    // Add more dummy data as needed to test other tabs
];

// 4. Main Page Component
function JobBoardsPage() {
    // We use useMemo to calculate the tabs structure whenever 'positions' changes.
    // This replaces your static 'industryTabs' array.
    const tabsData = useMemo(() => {
        return TAB_CONFIG.map((config) => {

            // 1. Filter positions by Industry (or return all if value is 'all')
            const filteredByIndustry = positions.filter((p) =>
                config.value === "all" || p.industry === config.value
            );

            // 2. Split into Temporary and Permanent
            const temp = filteredByIndustry.filter((p) => p.type === "Temporary");
            const perm = filteredByIndustry.filter((p) => p.type === "Permanent");

            // 3. Return the object structure your CustomTab expects
            return {
                value: config.value,
                label: config.label,
                icon: config.icon,
                // Pass the pre-filtered arrays to the content component
                content: <IndustryContent temporaryPositions={temp} permanentPositions={perm} />
            };
        });
    }, []);

    return (
        <div className="min-h-screen mx-auto w-full md:w-[calc(100vw-304px)]">
            <CustomTab
                tabs={tabsData}
                defaultValue="all"
                showFilterButton={true}
            />
        </div>
    );
}

export default JobBoardsPage;