import * as React from "react"
import {
    AudioWaveform,
    Command,
    Frame, GalleryHorizontalEnd,
    LayoutDashboard,
    Map, MessageSquare,
    PieChart,
} from "lucide-react"

import {NavMain} from "@/components/nav-main"
import {BillingLegals} from "@/components/billing-legal.jsx"
import {NavUser} from "@/components/nav-user"
import {TeamSwitcher} from "@/components/team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import {JobBoard} from "@/components/job-board.jsx";
import {MyContracts} from "@/components/my-contracts.jsx";

const data = {
    user: {
        name: "Saif Hasan",
        role: "Super Admin",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Quicklocum.",
            logo: GalleryHorizontalEnd
        }
    ],
    navMain: [
        {
            title: "Dashboard",
            url: "/",
            icon: LayoutDashboard,
        },
        {
            title: "Message",
            url: "/messages",
            icon: MessageSquare,
        },
        {
            title: "My Account",
            url: "/my-account",
            icon: MessageSquare,
        },
    ],
    Contracts: [
        {
            name: "My Contracts",
            url: "/my-contract",
            icon: Frame,
        },
        {
            name: "Upcoming Work",
            url: "/upcoming-work",
            icon: Frame,
        },
        {
            name: "Applicants",
            url: "/applicants",
            icon: Frame,
        },
    ],
    JobBoard: [
        {
            name: "Job Board",
            url: "/job-board",
            icon: Frame,
        },
        {
            name: "Applications",
            url: "/applications",
            icon: Frame,
        },
    ],
    BillingLegal: [
        {
            name: "Billing & Payments",
            url: "/billing-payments",
            icon: Frame,
        },
        {
            name: "Invoices",
            url: "/invoices",
            icon: PieChart,
        },
        {
            name: "Payment History",
            url: "/payment-history",
            icon: Map,
        },
        {
            name: "Agreements",
            url: "/agreements",
            icon: Map,
        },
    ],
}

export function AppSidebar({...props}) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams}/>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain}/>
                <MyContracts contracts={data.Contracts}/>
                <JobBoard jobs={data.JobBoard}/>
                <BillingLegals BillingLegal={data.BillingLegal}/>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user}/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
