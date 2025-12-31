import {CartesianGrid, Line, LineChart, XAxis} from "recharts"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart.jsx"
import SegmentedCapsule from "@/components/segmented-capsule.jsx";

export const description = "A multiple line chart"

const chartData = [
    {month: "Jan", published: 186, booked: 80},
    {month: "Feb", published: 305, booked: 200},
    {month: "Mar", published: 237, booked: 120},
    {month: "Apr", published: 73, booked: 190},
    {month: "May", published: 209, booked: 130},
    {month: "Jun", published: 214, booked: 140},
]

const chartConfig = {
    published: {
        label: "Published",
        color: "var(--chart-1)",
    },
    booked: {
        label: "Booked",
        color: "var(--chart-2)",
    },
}

export function FinancialLineChart() {
    return (
        <ChartContainer className="h-full w-full aspect-auto" config={chartConfig}>
            <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 12,
                    right: 12,
                }}
            >
                <CartesianGrid vertical={false}/>
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                    content={
                        <ChartTooltipContent
                            hideLabel
                            className="w-[180px]"
                            formatter={(value, name, item, index) => (
                                <>
                                    <SegmentedCapsule fill={`var(--color-${name})`}/>
                                    <span className="capitalize">{name}</span>
                                    <div
                                        className="text-foreground ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums">
                                        {value}
                                        <span className="text-muted-foreground font-normal">
                                                  item
                                                </span>
                                    </div>
                                    {/* Add this after the last item */}
                                    {index === 1 && (
                                        <div
                                            className="text-foreground mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium">
                                            Total
                                            <div
                                                className="text-foreground ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums">
                                                {item.payload.published + item.payload.booked}
                                                <span className="text-muted-foreground font-normal">
                                                          item
                                                        </span>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        />
                    }
                    cursor={false}
                    defaultIndex={1}
                />
                <Line
                    dataKey="published"
                    type="natural"
                    stroke="var(--color-published)"
                    strokeWidth={2}
                    dot={{
                        fill: "var(--color-published)",
                    }}
                    activeDot={{
                        r: 6
                    }}
                />
                <Line
                    dataKey="booked"
                    type="monotone"
                    stroke="var(--color-booked)"
                    strokeWidth={2}
                    dot={{
                        fill: "var(--color-published)",
                    }}
                    activeDot={{
                        r: 6
                    }}
                />
            </LineChart>
        </ChartContainer>
    )
}
