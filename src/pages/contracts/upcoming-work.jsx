import React from 'react';
import {
    Plus,
    Search,
    Calendar,
    Filter,
    Layout
} from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import NoContractsFound from "@/components/upcoming/no-contracts-found.jsx";
import {JobCard} from "@/components/upcoming/job-card.jsx";
import {StatsCard} from "@/components/upcoming/stats-card.jsx";

export default function UpcomingWork() {
    return (
        <div className="min-h-screen bg-white  font-sans">
            <div className="max-w-7xl mx-auto w-full md:w-[calc(100vw-304px)] space-y-8">

                <section className="space-y-5">
                    {/* Page Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex gap-4 items-center">
                            <div
                                className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100">
                                <Layout className="text-[#2D8FE3]" size={20}/>
                            </div>
                            <div>
                                <h1 className="text-base font-medium text-[#18202A]">Upcoming Work</h1>
                                <p className="text-[#2A394B] text-sm">Manage your scheduled contracts and
                                    assignments</p>
                            </div>
                        </div>
                        <button
                            className="bg-[#2D8FE3] cursor-pointer hover:bg-[#2D8FE3] text-[#FBFBFB] px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-2 shadow-sm transition-colors w-full md:w-auto justify-center">
                            <Plus size={18}/>
                            Add New Contract
                        </button>
                    </div>

                    {/* Stats Grid - Responsive: 1 col mobile, 2 tablet, 4 desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <StatsCard
                            title="Upcoming Work"
                            count="1200"
                            trend="up"
                            trendValue="20%"
                            subtitle="Currently Running"
                        />
                        <StatsCard
                            title="Starting Soon"
                            count="1200"
                            trend="up"
                            trendValue="20%"
                            subtitle="Currently Running"
                        />
                        <StatsCard
                            title="This Week"
                            count="0"
                            trend="down"
                            trendValue="20%"
                            subtitle="7 days details"
                        />
                        <StatsCard
                            title="This Month"
                            count="1200"
                            trend="up"
                            trendValue="20%"
                            subtitle="30 days reports"
                        />
                    </div>
                </section>

                <section className="space-y-6">

                    <div
                        className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between border border-[#E5E7EB] p-2 rounded-xl">

                        <div className="relative w-full lg:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18}/>
                            <Input
                                type="text"
                                placeholder="Search by role, location, or date..."
                                className="pl-10 bg-slate-50 border-slate-200 focus-visible:ring-blue-500"
                            />
                        </div>

                        <div
                            className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">

                            {/* 1. Daily Select (With Icon) */}
                            <Select defaultValue="daily">
                                <SelectTrigger
                                    className="w-[110px] bg-slate-100 border-slate-200 text-slate-700 font-medium h-10">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-slate-500"/>
                                        <SelectValue placeholder="Period"/>
                                    </div>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="daily">Daily</SelectItem>
                                    <SelectItem value="weekly">Weekly</SelectItem>
                                    <SelectItem value="monthly">Monthly</SelectItem>
                                </SelectContent>
                            </Select>

                            {/* 2. All Levels */}
                            <Select defaultValue="all">
                                <SelectTrigger
                                    className="w-[130px] bg-slate-100 border-slate-200 text-slate-700 font-medium h-10">
                                    <SelectValue placeholder="Levels"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Levels</SelectItem>
                                    <SelectItem value="entry">Entry Level</SelectItem>
                                    <SelectItem value="senior">Senior Level</SelectItem>
                                </SelectContent>
                            </Select>

                            {/* 3. All Statuses */}
                            <Select defaultValue="all">
                                <SelectTrigger
                                    className="w-[140px] bg-slate-100 border-slate-200 text-slate-700 font-medium h-10">
                                    <SelectValue placeholder="Statuses"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Statuses</SelectItem>
                                    <SelectItem value="active">Active</SelectItem>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="closed">Closed</SelectItem>
                                </SelectContent>
                            </Select>

                            {/* 4. All Contracts */}
                            <Select defaultValue="all">
                                <SelectTrigger
                                    className="w-[150px] bg-slate-100 border-slate-200 text-slate-700 font-medium h-10">
                                    <SelectValue placeholder="Contracts"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Contracts</SelectItem>
                                    <SelectItem value="locum">Locum</SelectItem>
                                    <SelectItem value="permanent">Permanent</SelectItem>
                                </SelectContent>
                            </Select>

                            {/* 5. Advanced Filters Button */}
                            <Button
                                variant="outline"
                                className="bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 ml-2 h-10"
                            >
                                Adv Filters
                                <Filter size={14} className="ml-2"/>
                            </Button>
                        </div>
                    </div>

                    <NoContractsFound />

                    {/* Job Cards Grid - Responsive: 1 col mobile, 2 tablet, 3 desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <JobCard/>
                        <JobCard/>
                        <JobCard/>
                        <JobCard/>
                        <JobCard/>
                        <JobCard/>
                    </div>

                </section>
            </div>
        </div>
    );
}