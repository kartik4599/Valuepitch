import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo, useState } from "react";
const chartData = [
  { date: "2024-06-01", successful: 222, errors: 150 },
  { date: "2024-06-02", successful: 97, errors: 180 },
  { date: "2024-06-03", successful: 167, errors: 120 },
  { date: "2024-06-04", successful: 242, errors: 260 },
  { date: "2024-06-05", successful: 373, errors: 290 },
  { date: "2024-06-06", successful: 301, errors: 340 },
  { date: "2024-06-07", successful: 245, errors: 180 },
  { date: "2024-06-08", successful: 409, errors: 320 },
  { date: "2024-06-09", successful: 59, errors: 110 },
  { date: "2024-06-10", successful: 261, errors: 190 },
  { date: "2024-06-11", successful: 327, errors: 350 },
  { date: "2024-06-12", successful: 292, errors: 210 },
  { date: "2024-06-13", successful: 342, errors: 380 },
  { date: "2024-06-14", successful: 137, errors: 220 },
  { date: "2024-06-15", successful: 120, errors: 170 },
  { date: "2024-06-16", successful: 138, errors: 190 },
  { date: "2024-06-17", successful: 446, errors: 360 },
  { date: "2024-06-18", successful: 364, errors: 410 },
  { date: "2024-06-19", successful: 243, errors: 180 },
  { date: "2024-06-20", successful: 89, errors: 150 },
  { date: "2024-06-21", successful: 137, errors: 200 },
  { date: "2024-06-22", successful: 224, errors: 170 },
  { date: "2024-06-23", successful: 138, errors: 230 },
  { date: "2024-06-24", successful: 387, errors: 290 },
  { date: "2024-06-25", successful: 215, errors: 250 },
  { date: "2024-06-26", successful: 75, errors: 130 },
  { date: "2024-06-27", successful: 383, errors: 420 },
  { date: "2024-06-28", successful: 122, errors: 180 },
  { date: "2024-06-29", successful: 315, errors: 240 },
  { date: "2024-06-30", successful: 454, errors: 380 },
  { date: "2024-07-01", successful: 165, errors: 220 },
  { date: "2024-07-02", successful: 293, errors: 310 },
  { date: "2024-07-03", successful: 247, errors: 190 },
  { date: "2024-07-04", successful: 385, errors: 420 },
  { date: "2024-07-05", successful: 481, errors: 390 },
  { date: "2024-07-06", successful: 498, errors: 520 },
  { date: "2024-07-07", successful: 388, errors: 300 },
  { date: "2024-07-08", successful: 149, errors: 210 },
  { date: "2024-07-09", successful: 227, errors: 180 },
  { date: "2024-07-10", successful: 293, errors: 330 },
  { date: "2024-07-11", successful: 335, errors: 270 },
  { date: "2024-07-12", successful: 197, errors: 240 },
  { date: "2024-07-13", successful: 197, errors: 160 },
  { date: "2024-07-14", successful: 448, errors: 490 },
  { date: "2024-07-15", successful: 473, errors: 380 },
  { date: "2024-07-16", successful: 338, errors: 400 },
  { date: "2024-07-17", successful: 499, errors: 420 },
  { date: "2024-07-18", successful: 315, errors: 350 },
  { date: "2024-07-19", successful: 235, errors: 180 },
  { date: "2024-07-20", successful: 177, errors: 230 },
  { date: "2024-07-21", successful: 82, errors: 140 },
  { date: "2024-07-22", successful: 81, errors: 120 },
  { date: "2024-07-23", successful: 252, errors: 290 },
  { date: "2024-07-24", successful: 294, errors: 220 },
  { date: "2024-07-25", successful: 201, errors: 250 },
  { date: "2024-07-26", successful: 213, errors: 170 },
  { date: "2024-07-27", successful: 420, errors: 460 },
  { date: "2024-07-28", successful: 233, errors: 190 },
  { date: "2024-07-29", successful: 78, errors: 130 },
  { date: "2024-07-30", successful: 340, errors: 280 },
  { date: "2024-07-31", successful: 178, errors: 230 },
  { date: "2024-08-01", successful: 178, errors: 200 },
  { date: "2024-08-02", successful: 470, errors: 410 },
  { date: "2024-08-03", successful: 103, errors: 160 },
  { date: "2024-08-04", successful: 439, errors: 380 },
  { date: "2024-08-05", successful: 88, errors: 140 },
  { date: "2024-08-06", successful: 294, errors: 250 },
  { date: "2024-08-07", successful: 323, errors: 370 },
  { date: "2024-08-08", successful: 385, errors: 320 },
  { date: "2024-08-09", successful: 438, errors: 480 },
  { date: "2024-08-10", successful: 155, errors: 200 },
  { date: "2024-08-11", successful: 92, errors: 150 },
  { date: "2024-08-12", successful: 492, errors: 420 },
  { date: "2024-08-13", successful: 81, errors: 130 },
  { date: "2024-08-14", successful: 426, errors: 380 },
  { date: "2024-08-15", successful: 307, errors: 350 },
  { date: "2024-08-16", successful: 371, errors: 310 },
  { date: "2024-08-17", successful: 475, errors: 520 },
  { date: "2024-08-18", successful: 107, errors: 170 },
  { date: "2024-08-19", successful: 341, errors: 290 },
  { date: "2024-08-20", successful: 408, errors: 450 },
  { date: "2024-08-21", successful: 169, errors: 210 },
  { date: "2024-08-22", successful: 317, errors: 270 },
  { date: "2024-08-23", successful: 480, errors: 530 },
  { date: "2024-08-24", successful: 132, errors: 180 },
  { date: "2024-08-25", successful: 141, errors: 190 },
  { date: "2024-08-26", successful: 434, errors: 380 },
  { date: "2024-08-27", successful: 448, errors: 490 },
  { date: "2024-08-28", successful: 149, errors: 200 },
  { date: "2024-08-29", successful: 103, errors: 160 },
  { date: "2024-08-30", successful: 446, errors: 400 },
];

const chartConfig = {
  successful: {
    label: "Successful",
    color: "green",
  },
  errors: {
    label: "Errors",
    color: "red",
  },
} satisfies ChartConfig;

export function Chart() {
  const [timeRange, setTimeRange] = useState("90d");

  const filteredData = useMemo(
    () =>
      chartData.filter((item) => {
        if (timeRange === "all") return true;
        const date = new Date(item.date);
        const now = new Date();
        let daysToSubtract = 90;
        if (timeRange === "30d") {
          daysToSubtract = 30;
        } else if (timeRange === "7d") {
          daysToSubtract = 7;
        }
        now.setDate(now.getDate() - daysToSubtract);
        return date >= now;
      }),
    [timeRange]
  );

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Management Information System</CardTitle>
          <CardDescription>Showing total reports</CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value">
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="all" className="rounded-lg">
              Show All Data
            </SelectItem>
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-successful)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-successful)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-errors)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-errors)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="errors"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-errors)"
              stackId="a"
            />
            <Area
              dataKey="successful"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-successful)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
