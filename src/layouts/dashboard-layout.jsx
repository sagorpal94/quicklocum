import {AppSidebar} from "@/components/app-sidebar.jsx"
import {
    SidebarInset, SidebarProvider,
} from "@/components/ui/sidebar.jsx"
import {Outlet} from "react-router-dom";
import Header from "@/components/header.jsx";

const DashboardLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <SidebarInset>
                <Header/>
                <section className="flex flex-1 flex-col gap-4 p-4 pt-0 mt-5">
                    <Outlet/>
                </section>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default DashboardLayout;