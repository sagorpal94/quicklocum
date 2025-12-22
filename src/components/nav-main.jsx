import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {Link, useLocation} from "react-router-dom";

export function NavMain({items}) {
    const location = useLocation();
    return (
        <SidebarGroup>
            <SidebarGroupLabel className="text-[#9CA3AF] text-[12px]">Main</SidebarGroupLabel>
            <SidebarMenu>

                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton tooltip={item.title} asChild isActive={location.pathname} className={location.pathname === item.url ? "!bg-[#2D8FE3] !text-white !rounded-[6px]" : "!text-[#2A394B]"}>
                            <Link  to={item.url} className="text-[14px]">
                                <item.icon/>
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}

                {/*{items.map((item) => (*/}
                {/*    <Collapsible*/}
                {/*        key={item.title}*/}
                {/*        asChild*/}
                {/*        defaultOpen={item.isActive}*/}
                {/*        className="group/collapsible"*/}
                {/*    >*/}
                {/*        <SidebarMenuItem>*/}
                {/*            <CollapsibleTrigger asChild>*/}
                {/*                <SidebarMenuButton tooltip={item.title}>*/}
                {/*                    {item.icon && <item.icon />}*/}
                {/*                    <span>{item.title}</span>*/}
                {/*                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />*/}
                {/*                </SidebarMenuButton>*/}
                {/*            </CollapsibleTrigger>*/}
                {/*            <CollapsibleContent>*/}
                {/*                <SidebarMenuSub>*/}
                {/*                    {item.items?.map((subItem) => (*/}
                {/*                        <SidebarMenuSubItem key={subItem.title}>*/}
                {/*                            <SidebarMenuSubButton asChild>*/}
                {/*                                <a href={subItem.url}>*/}
                {/*                                    <span>{subItem.title}</span>*/}
                {/*                                </a>*/}
                {/*                            </SidebarMenuSubButton>*/}
                {/*                        </SidebarMenuSubItem>*/}
                {/*                    ))}*/}
                {/*                </SidebarMenuSub>*/}
                {/*            </CollapsibleContent>*/}
                {/*        </SidebarMenuItem>*/}
                {/*    </Collapsible>*/}
                {/*))}*/}
            </SidebarMenu>
        </SidebarGroup>
    )
}
