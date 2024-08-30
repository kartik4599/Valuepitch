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
import { Chartinfo } from "./Reporting/MIS";
const chartData = [
  { date: "2024-06-01", success: 222, error: 150 },
  { date: "2024-06-02", success: 97, error: 180 },
  { date: "2024-06-03", success: 167, error: 120 },
  { date: "2024-06-04", success: 242, error: 260 },
  { date: "2024-06-05", success: 373, error: 290 },
  { date: "2024-06-06", success: 301, error: 340 },
  { date: "2024-06-07", success: 245, error: 180 },
  { date: "2024-06-08", success: 409, error: 320 },
  { date: "2024-06-09", success: 59, error: 110 },
  { date: "2024-06-10", success: 261, error: 190 },
  { date: "2024-06-11", success: 327, error: 350 },
  { date: "2024-06-12", success: 292, error: 210 },
  { date: "2024-06-13", success: 342, error: 380 },
  { date: "2024-06-14", success: 137, error: 220 },
  { date: "2024-06-15", success: 120, error: 170 },
  { date: "2024-06-16", success: 138, error: 190 },
  { date: "2024-06-17", success: 446, error: 360 },
  { date: "2024-06-18", success: 364, error: 410 },
  { date: "2024-06-19", success: 243, error: 180 },
  { date: "2024-06-20", success: 89, error: 150 },
  { date: "2024-06-21", success: 137, error: 200 },
  { date: "2024-06-22", success: 224, error: 170 },
  { date: "2024-06-23", success: 138, error: 230 },
  { date: "2024-06-24", success: 387, error: 290 },
  { date: "2024-06-25", success: 215, error: 250 },
  { date: "2024-06-26", success: 75, error: 130 },
  { date: "2024-06-27", success: 383, error: 420 },
  { date: "2024-06-28", success: 122, error: 180 },
  { date: "2024-06-29", success: 315, error: 240 },
  { date: "2024-06-30", success: 454, error: 380 },
  { date: "2024-07-01", success: 165, error: 220 },
  { date: "2024-07-02", success: 293, error: 310 },
  { date: "2024-07-03", success: 247, error: 190 },
  { date: "2024-07-04", success: 385, error: 420 },
  { date: "2024-07-05", success: 481, error: 390 },
  { date: "2024-07-06", success: 498, error: 520 },
  { date: "2024-07-07", success: 388, error: 300 },
  { date: "2024-07-08", success: 149, error: 210 },
  { date: "2024-07-09", success: 227, error: 180 },
  { date: "2024-07-10", success: 293, error: 330 },
  { date: "2024-07-11", success: 335, error: 270 },
  { date: "2024-07-12", success: 197, error: 240 },
  { date: "2024-07-13", success: 197, error: 160 },
  { date: "2024-07-14", success: 448, error: 490 },
  { date: "2024-07-15", success: 473, error: 380 },
  { date: "2024-07-16", success: 338, error: 400 },
  { date: "2024-07-17", success: 499, error: 420 },
  { date: "2024-07-18", success: 315, error: 350 },
  { date: "2024-07-19", success: 235, error: 180 },
  { date: "2024-07-20", success: 177, error: 230 },
  { date: "2024-07-21", success: 82, error: 140 },
  { date: "2024-07-22", success: 81, error: 120 },
  { date: "2024-07-23", success: 252, error: 290 },
  { date: "2024-07-24", success: 294, error: 220 },
  { date: "2024-07-25", success: 201, error: 250 },
  { date: "2024-07-26", success: 213, error: 170 },
  { date: "2024-07-27", success: 420, error: 460 },
  { date: "2024-07-28", success: 233, error: 190 },
  { date: "2024-07-29", success: 78, error: 130 },
  { date: "2024-07-30", success: 340, error: 280 },
  { date: "2024-07-31", success: 178, error: 230 },
  { date: "2024-08-01", success: 178, error: 200 },
  { date: "2024-08-02", success: 470, error: 410 },
  { date: "2024-08-03", success: 103, error: 160 },
  { date: "2024-08-04", success: 439, error: 380 },
  { date: "2024-08-05", success: 88, error: 140 },
  { date: "2024-08-06", success: 294, error: 250 },
  { date: "2024-08-07", success: 323, error: 370 },
  { date: "2024-08-08", success: 385, error: 320 },
  { date: "2024-08-09", success: 438, error: 480 },
  { date: "2024-08-10", success: 155, error: 200 },
  { date: "2024-08-11", success: 92, error: 150 },
  { date: "2024-08-12", success: 492, error: 420 },
  { date: "2024-08-13", success: 81, error: 130 },
  { date: "2024-08-14", success: 426, error: 380 },
  { date: "2024-08-15", success: 307, error: 350 },
  { date: "2024-08-16", success: 371, error: 310 },
  { date: "2024-08-17", success: 475, error: 520 },
  { date: "2024-08-18", success: 107, error: 170 },
  { date: "2024-08-19", success: 341, error: 290 },
  { date: "2024-08-20", success: 408, error: 450 },
  { date: "2024-08-21", success: 169, error: 210 },
  { date: "2024-08-22", success: 317, error: 270 },
  { date: "2024-08-23", success: 480, error: 530 },
  { date: "2024-08-24", success: 132, error: 180 },
  { date: "2024-08-25", success: 141, error: 190 },
  { date: "2024-08-26", success: 434, error: 380 },
  { date: "2024-08-27", success: 448, error: 490 },
  { date: "2024-08-28", success: 149, error: 200 },
  { date: "2024-08-29", success: 103, error: 160 },
  { date: "2024-08-30", success: 446, error: 400 },
];

const chartConfig = {
  success: {
    label: "Successfull",
    color: "green",
  },
  error: {
    label: "Errors",
    color: "red",
  },
} satisfies ChartConfig;

interface ChartProps {
  timeRange: string;
  setTimeRange: React.Dispatch<React.SetStateAction<string>>;
  chartinfo: Chartinfo[];
}

export function Chart({ timeRange, setTimeRange, chartinfo }: ChartProps) {
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
          <AreaChart data={chartinfo}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-success)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-success)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-error)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-error)"
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
              dataKey="error"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-error)"
              stackId="a"
            />
            <Area
              dataKey="success"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-success)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
