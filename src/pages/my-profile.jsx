import {Button} from '@/components/ui/button';
import {Building2,Shield, Lock, Users} from 'lucide-react';
import {InstituteTabs} from "@/components/my-profile/institute-tabs.jsx";

export default function MyProfile() {
    return (
        <div className="min-h-screen">
            <div className="w-full">
                <div className="bg-[#F3F9FE] rounded-lg p-4 space-y-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <Building2 className="w-6 h-6 text-blue-600"/>
                            </div>
                            <div>
                                <h2 className="text-base font-semibold text-[#18202A]">Institute Profile</h2>
                                <p className="text-sm text-neutral-700">Manage your institute details and settings</p>
                            </div>
                        </div>
                        <Button className="bg-[#2D8FE3] text-white">
                            <svg className="w-4 h-4 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.121 2.121 0 113 3l-9.5 9.5a3.5 3.5 0 01-1.768.956l-4.232.916.916-4.232a3.5 3.5 0 01.956-1.768l9.5-9.5z"/>
                            </svg>
                            Edit Profile
                        </Button>
                    </div>

                    {/* Information Cards */}
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">

                        <div className="rounded-[12px] border bg-card p-3 transition-all ">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <p className="text-sm text-[#194185]">Category</p>
                                    <p className="text-lg font-medium text-[#194185]">Recruitment Agency</p>
                                </div>
                                <div className="rounded-[8px] bg-[#EAF5FE] w-11 h-11 flex justify-center items-center">
                                    <Shield className="h-6 w-6 text-[#2D8FE3] " strokeWidth="1.5px"/>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border bg-card p-3 transition-all ">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <p className="text-sm text-[#194185]">Specialties</p>
                                    <p className="text-lg font-medium text-[#194185]">Not Set</p>
                                </div>
                                <div className="rounded-[8px] bg-[#EBFFEE] w-11 h-11 flex justify-center items-center">
                                    <Lock className="h-6 w-6 text-[#19B28A]" strokeWidth="1.5px"/>
                                </div>
                            </div>
                        </div>

                        <div
                            className="rounded-lg border bg-card p-3 transition-all sm:col-span-2 lg:col-span-1">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <p className="text-sm text-[#194185]">Mode</p>
                                    <p className="text-lg font-medium text-[#194185]">Viewing</p>
                                </div>
                                <div className="rounded-[8px] bg-[#FBF1E7]  w-11 h-11 flex justify-center items-center">
                                    <Users className="h-6 w-6 text-[#F0A33A]" strokeWidth="1.5px"/>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <InstituteTabs />
            </div>

        </div>
    )
}