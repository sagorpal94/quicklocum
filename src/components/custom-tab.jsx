import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {ListFilter} from "lucide-react"
import {Button} from "@/components/ui/button.jsx";
import React, {useState} from "react";

export default function CustomTab({tabs, defaultValue, showFilterButton = true, onTabChange}) {
    const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.value)
    return (
        <Tabs defaultValue={defaultValue || tabs[0]?.value} onValueChange={(e) => {
            setActiveTab(e)
            onTabChange?.value(e)
        }} className="w-full">
            <div className="flex items-center gap-2">
                {showFilterButton && (
                    <Button variant="secondary" size="sm">
                        <ListFilter size={16}/>
                    </Button>
                )}
                <div className="relative w-full overflow-x-auto scrollbar-hide overscroll-x-contain ">
                    <TabsList
                        className="!p-[4px] border border-[#E5E7EB] md:h-9 inline-flex h-auto w-auto gap-2 bg-transparent scrollbar-hide">
                        {tabs.map((tab) => {
                            const Icon = tab.icon
                            return (
                                <TabsTrigger
                                    key={tab.value}
                                    value={tab.value}
                                    className={activeTab === tab.value ? "text-[#2D8FE3] !bg-[#EAF5FE] border border-[#BDD7ED] w-full md:w-auto cursor-pointer" : "w-full md:w-auto cursor-pointer"}
                                >
                                    {Icon && <Icon className="h-3.5 w-3.5 md:h-4 md:w-4"/>}
                                    {tab.label}
                                    {tab.count !== undefined && ` (${tab.count})`}
                                </TabsTrigger>
                            )
                        })}
                    </TabsList>
                </div>
            </div>

            {tabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value} className="mt-0">
                    {tab.content || (
                        <div className="rounded-lg border bg-card p-4 text-card-foreground md:p-6">
                            <h3 className="text-base font-semibold md:text-lg">{tab.label}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                {tab.count !== undefined
                                    ? `Showing ${tab.count} item${tab.count !== 1 ? "s" : ""} in ${tab.label}`
                                    : `Showing content for ${tab.label}`}
                            </p>
                        </div>
                    )}
                </TabsContent>
            ))}
        </Tabs>
    )
}