import {TabsTrigger} from "@radix-ui/react-tabs";

export default function CustomTabTrigger({value, icon, label, count}) {
    const Icon = icon;

    return (
        <TabsTrigger
            value={value}
            className="
        group
        cursor-pointer
        w-full
        min-w-[250px]
        flex items-center justify-between gap-2
        rounded-none
        border-b-2 border-transparent
        bg-transparent
        px-4 pb-3 pt-2
        font-medium
        text-muted-foreground
        hover:text-foreground
        data-[state=active]:border-[#2D8FE3]
        data-[state=active]:text-[#2D8FE3]
      "
        >
            <div className="flex items-center gap-2">
                <Icon
                    className="
            h-4 w-4
            text-muted-foreground
            group-data-[state=active]:text-[#2D8FE3]
          "
                />
                <span>{label}</span>
            </div>

            {count !== undefined && (
                <span
                    className="
            flex h-6 w-6 items-center justify-center
            rounded-md
            border border-[#BDD7ED]
            bg-[#FBFBFB]
            text-xs
            font-medium
          "
                >
          {count}
        </span>
            )}
        </TabsTrigger>
    );
}