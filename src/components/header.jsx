import {SidebarMenuButton, SidebarTrigger} from "@/components/ui/sidebar.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import {Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage} from "@/components/ui/breadcrumb.jsx";
import {getCurrentDate, getPageTitle} from "@/lib/utils.js";
import {BellDot, LayoutDashboard, Plus} from "lucide-react";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.jsx";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const {pathname} = useLocation()
    const {weekday, formattedDate} = getCurrentDate();

    const teams = [
        {
            name: "New Contract",
            logo: LayoutDashboard,
            plan: "Enterprise",
        },
        {
            name: "Applicants",
            logo: LayoutDashboard,
            plan: "Startup",
        },
        {
            name: "Upcoming",
            logo: LayoutDashboard,
            plan: "Free",
        },
        {
            name: "Job Offers",
            logo: LayoutDashboard,
            plan: "Free",
        },
    ]

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
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <BellDot className="cursor-pointer"/>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        className="w-64 mr-3 rounded-lg "
                                        align="start"
                                        side="bottom"
                                        sideOffset={4}

                                    >
                                        {teams.map((team) => (
                                            <DropdownMenuItem
                                                key={team.name}
                                                className="gap-2 p-2 cursor-pointer hover:bg-gray-100"
                                            >
                                                <div
                                                    className="flex size-6 items-center justify-center">
                                                    <team.logo className="size-4 shrink-0"/>
                                                </div>
                                                {team.name}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </header>
    )
}

export default Header;