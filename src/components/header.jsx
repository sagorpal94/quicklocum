import {SidebarTrigger} from "@/components/ui/sidebar.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import {Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage} from "@/components/ui/breadcrumb.jsx";
import {getCurrentDate, getPageTitle} from "@/lib/utils.js";
import {BellDot} from "lucide-react";
import {useLocation} from "react-router-dom";

function Header() {
    const {pathname} = useLocation()
    const {weekday, formattedDate} = getCurrentDate();
    return (
        <header
            className={`flex justify-between h-12 shrink-0 items-center gap-2  transition-all duration-75 ease-in-out z-40 pr-4`}>
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
    )
}

export default Header;