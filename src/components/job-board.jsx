import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {Link, useLocation} from "react-router-dom";

export function JobBoard({jobs}) {
    const location = useLocation();
    return (
        <SidebarGroup>
            <SidebarGroupLabel className="text-[#9CA3AF] text-[12px]">Job Board</SidebarGroupLabel>
            <SidebarMenu>
                {jobs.map((item) => (
                    <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton tooltip={item.name} asChild isActive={location?.pathname} className={location.pathname === item.url ? "!bg-[#2D8FE3] !text-white !rounded-[6px]" : "!text-[#2A394B]"}>
                            <Link to={item.url} className="text-[14px]">
                                <item.icon/>
                                <span>{item.name}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}

            </SidebarMenu>
        </SidebarGroup>
    )
}
