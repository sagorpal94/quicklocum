import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import CustomTabTrigger from "@/components/custom-tab-trigger.jsx";

export default function ReusableTabs({
                                         tabs,
                                         defaultValue,
                                         activeTab,
                                         onChange,
                                         showFilter = false,
                                         FilterButton,
                                     }) {
    return (
        <Tabs
            value={activeTab}
            defaultValue={defaultValue}
            onValueChange={onChange}
            className="w-full"
        >
            <div className="flex items-center gap-4">
                {/* Optional Filter Button */}
                {showFilter && FilterButton && <FilterButton/>}

                {/* Tabs */}
                <div className="relative w-full overflow-x-auto border-b scrollbar-hide">
                    <TabsList
                        className="
              h-auto
              w-full
              justify-start
              gap-6
              rounded-none
              border-b
              border-gray-200
              bg-transparent
              p-0
            "
                    >
                        {tabs.map((tab) => (
                            <CustomTabTrigger
                                key={tab.value}
                                value={tab.value}
                                icon={tab.icon}
                                label={tab.name}
                                count={tab.count}
                            />
                        ))}
                    </TabsList>
                </div>
            </div>
        </Tabs>
    );
}