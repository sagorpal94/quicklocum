import CustomTab from "@/components/custom-tab.jsx";
import {Stethoscope, Bluetooth as Tooth, Circle, Calendar, SearchIcon} from "lucide-react";
import ApplicantCard from "@/components/applicants/applicant-card.jsx";
import React, {useState} from "react";
import {Select, SelectValue, SelectItem, SelectTrigger, SelectContent} from "@/components/ui/select.jsx";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group.jsx";
import MetricsGrid from "@/components/metrics-grid.jsx";

const applicants = [
    {
        id: "#1",
        name: "Headhunter 1",
        contractType: "General Medicine-Temporary Contract",
        contractTypeLabel: "General Medicine",
        email: "headhunter12@gmail.com",
        appliedDate: "Apr 12, 2025",
        status: "pending",
    },
    {
        id: "#2",
        name: "Headhunter 2",
        contractType: "Dental Care-Permanent Contract",
        contractTypeLabel: "Dental Care",
        email: "headhunter22@gmail.com",
        appliedDate: "Apr 15, 2025",
        status: "accepted",
    },
    {
        id: "#3",
        name: "Dr. John Professional",
        contractType: "Dental Permanent Staffing Contract",
        contractTypeLabel: "Dental Permanent Staffing",
        email: "process88888.12@gmail.com",
        appliedDate: "Apr 12, 2025",
        status: "pending",
    },
    {
        id: "#4",
        name: "Dr. John Professional",
        contractType: "Specialty Dentistry-Contract",
        contractTypeLabel: "Specialty Dentistry",
        email: "process88888.12@gmail.com",
        appliedDate: "Apr 12, 2025",
        status: "approved",
    },
]

const industryTabs = [
    {
        value: "all",
        label: "All Industries",
        icon: Circle,
        content: (
            <div className="mt-4 flex flex-col gap-4">
                {applicants.map((applicant) => (
                    <ApplicantCard
                        key={applicant.id}
                        id={applicant.id}
                        name={applicant.name}
                        contractType={applicant.contractType}
                        contractTypeLabel={applicant.contractTypeLabel}
                        email={applicant.email}
                        appliedDate={applicant.appliedDate}
                        status={applicant.status}
                        // onAccept={() => handleAccept(applicant.id)}
                        // onReject={() => handleReject(applicant.id)}
                        // onViewContracts={() => handleViewContracts(applicant.id)}
                        // onViewProfile={() => handleViewProfile(applicant.id)}
                    />
                ))}
            </div>
        ),
    },
    {
        value: "general-medicine",
        label: "General Medicine",
        icon: Stethoscope,
        content: (
            <div className="mt-4 flex flex-col gap-4">
                <h2>General Medicine</h2>
            </div>
        ),
    },
    {
        value: "dental-care",
        label: "Dental Care",
        icon: Tooth,
        content: (
            <div className="mt-4 flex flex-col gap-4">
                <h2>Dental Care</h2>
            </div>
        ),
    },
]

const stats = [
    {label: "Total Applicants", value: 5},
    {label: "Pending", value: 3},
    {label: "Accepted", value: 2},
    {label: "Rejected", value: 0},
];

function Applicants() {
    const [selectedStatus, setSelectedStatus] = useState("all")
    const [selectedContract, setSelectedContract] = useState("all")
    const [selectedDate, setSelectedDate] = useState("daily")
    return (
        <div>
            <MetricsGrid stats={stats}/>

            <div
                className="flex flex-col lg:flex-row items-stretch lg:items-center lg:justify-between gap-3 w-full border border-[#E5E7EB] rounded-xl p-2 mb-6">
                {/* Search Input */}
                <InputGroup className="w-full lg:w-[300px] bg-[#F3F4F6]">
                    <InputGroupInput placeholder="Search..."/>
                    <InputGroupAddon>
                        <SearchIcon/>
                    </InputGroupAddon>
                </InputGroup>

                {/* Filter Buttons */}
                <div className="flex items-center gap-2 flex-shrink-0 flex-wrap lg:flex-nowrap">
                    <Select
                        value={selectedDate}
                        onValueChange={(value) => {
                            setSelectedDate(value)
                        }}
                    >
                        <SelectTrigger
                            className="w-[140px] px-3 py-2 bg-[#F3F4F6] border-gray-200 text-gray-700 hover:bg-gray-50 text-sm h-auto">
                            <Calendar size={16} className="mr-2"/>
                            <SelectValue/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="yearly">Yearly</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select
                        value={selectedStatus}
                        onValueChange={(value) => {
                            setSelectedStatus(value)
                        }}
                    >
                        <SelectTrigger
                            className="w-[140px] px-3 py-2 bg-[#F3F4F6] border-gray-200 text-gray-700 hover:bg-gray-50 text-sm h-auto">
                            <SelectValue/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Statuses</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="approved">Approved</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select
                        value={selectedContract}
                        onValueChange={(value) => {
                            setSelectedContract(value)
                        }}
                    >
                        <SelectTrigger
                            className="w-[150px] px-3 py-2 bg-[#F3F4F6] border-gray-200 text-gray-700 hover:bg-gray-50 text-sm h-auto">
                            <SelectValue/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Contracts</SelectItem>
                            <SelectItem value="general-dentistry">General Dentistry-Temporary Contract</SelectItem>
                            <SelectItem value="permanent-staffing">Dental-Permanent Staffing Contract</SelectItem>
                            <SelectItem value="specialty-dentistry">Specialty Dentistry-Contract</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <CustomTab tabs={industryTabs} defaultValue="all"/>
        </div>
    )
}

export default Applicants;