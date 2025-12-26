import {SidebarTrigger} from "@/components/ui/sidebar.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import {Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage} from "@/components/ui/breadcrumb.jsx";
import {getCurrentDate, getPageTitle} from "@/lib/utils.js";
import {BellDot} from "lucide-react";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const {pathname} = useLocation()
    const {weekday, formattedDate} = getCurrentDate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header
            className={`
                sticky top-0 z-50 flex justify-between h-12 shrink-0 items-center gap-2 pr-4 
                transition-all duration-300 ease-in-out 
                ${scrolled
                ? "bg-white/60 backdrop-blur-md shadow-sm border-b" 
                : "bg-transparent"
            }
            `}>
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