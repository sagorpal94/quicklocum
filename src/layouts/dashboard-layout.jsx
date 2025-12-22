import {AppSidebar} from "@/components/app-sidebar.jsx"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb.jsx"
import {Separator} from "@/components/ui/separator.jsx"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar.jsx"
import {BellDot} from "lucide-react";
import {useLocation} from "react-router-dom";
import DashboardPages from "@/pages/dashboard.jsx";
import {Routes, Route} from "react-router-dom";
import MessagesPage from "@/pages/messages.jsx";
import Applicants from "@/pages/contracts/applicants.jsx";
import UpcomingWork from "@/pages/contracts/upcoming-work.jsx";
import MyContracts from "@/pages/contracts/my-contracts.jsx";
import ApplicantsPage from "@/pages/job-board/applications.jsx";
import JobBoardsPage from "@/pages/job-board/job-boards.jsx";
import BillingPaymentsPage from "@/pages/billing-legal/billing-payments.jsx";
import InvoicesPage from "@/pages/billing-legal/invoices.jsx";
import PaymentHistoryPage from "@/pages/billing-legal/payment-history.jsx";
import AgreementsPage from "@/pages/billing-legal/agreements.jsx";
import {getCurrentDate, getPageTitle} from "@/lib/utils.js";
import {useEffect, useState} from "react";

const DashboardLayout = () => {
    const [scrolled, setScrolled] = useState(false);
    const {pathname} = useLocation()

    const {weekday, formattedDate} = getCurrentDate();

    // 2. Effect listener
    useEffect(() => {
        const handleScroll = () => {
            // If user scrolls down more than 10px, activate the style
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <main>
            <SidebarProvider>
                <AppSidebar/>
                <SidebarInset>
                    <header
                        className={`
                                    sticky top-0 flex justify-between pr-4 h-16 shrink-0 items-center gap-2 
                                    transition-all duration-300 ease-in-out z-20
                                    group-has-data-[collapsible=icon]/sidebar-wrapper:h-12
                                    ${scrolled
                                                ? "bg-white shadow-sm border-b border-gray-200"
                                                : "bg-transparent border-b border-transparent shadow-none"
                                            }
                                `}
                    >
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1 text-[#334155] cursor-pointer"/>
                            <Separator
                                orientation="vertical"
                                className="mr-2 data-[orientation=vertical]:h-4"
                            />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="">
                                        <BreadcrumbPage className="text-[#0A0A0A] capitalize">
                                            {getPageTitle(pathname)}
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>

                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="">
                                    <Breadcrumb className="text-[12px] text-right text-[#0A0A0A]">
                                        {weekday} <br/>
                                        {formattedDate}
                                    </Breadcrumb>
                                    <Separator
                                        orientation="vertical"
                                        className="mx-2 data-[orientation=vertical]:h-4"
                                    />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>
                                            <BellDot/>
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </header>

                    <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        <Routes>
                            <Route path="/" element={<DashboardPages/>}/>
                            <Route path="/messages" element={<MessagesPage/>}/>

                            <Route path="/my-contract" element={<MyContracts/>}/>
                            <Route path="/upcoming-work" element={<UpcomingWork/>}/>
                            <Route path="/applicants" element={<Applicants/>}/>

                            <Route path="/job-board" element={<JobBoardsPage/>}/>
                            <Route path="/applications" element={<ApplicantsPage/>}/>

                            <Route path="/billing-payments" element={<BillingPaymentsPage/>}/>
                            <Route path="/invoices" element={<InvoicesPage/>}/>
                            <Route path="/payment-history" element={<PaymentHistoryPage/>}/>
                            <Route path="/agreements" element={<AgreementsPage/>}/>
                        </Routes>
                    </main>

                </SidebarInset>
            </SidebarProvider>
        </main>
    );
};

export default DashboardLayout;