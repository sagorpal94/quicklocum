import {AppSidebar} from "@/components/app-sidebar.jsx"
import {
    SidebarInset, SidebarProvider,
} from "@/components/ui/sidebar.jsx"
import {Outlet, useLocation} from "react-router-dom";
import Header from "@/components/header.jsx";

const DashboardLayout = () => {
    const {pathname} = useLocation()
    return (
        <SidebarProvider>
            <AppSidebar/>
            <SidebarInset>
                <Header/>
                <section className={`flex flex-1 flex-col gap-4 pt-0  ${
                    pathname === "/messages" ? "p-0" : "p-4 mt-5"
                }`}>
                    <Outlet/>
                </section>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default DashboardLayout;