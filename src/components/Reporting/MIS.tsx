import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Chart } from "../Chart";
import useSWR from "swr";
import { getReportData } from "@/lib/server";
import { useState } from "react";
import AnimatedNumbers from "react-animated-numbers";
import xlsx from "json-as-xlsx";
interface Info {
  totalSuccess: number;
  successPercentage: number;
  totalErrors: number;
  errorPercentage: number;
  totalValidationErrors: number;
  validationPercentage: number;
  totalUnauthorizedErrors: number;
  unauthorizedPercentage: number;
  totalServerError: number;
  serverPercentage: number;
}

export interface Chartinfo {
  date: string;
  success: number;
  error: number;
}

interface Chartdata {
  info: Info;
  chartinfo: Chartinfo[];
}

export default function MISComponent() {
  const [timeRange, setTimeRange] = useState("90d");
  const { data, error, isLoading } = useSWR<Chartdata>(
    timeRange,
    getReportData
  );

  const downloadFile = () => {
    try {
      let exceldata = [
        {
          sheet: "Adults",
          columns: [
            { label: "Date", value: "date" },
            { label: "Successful Operation", value: "success" },
            { label: "Failed Operation", value: "error" },
          ],
          content: data?.chartinfo,
        },
      ];

      xlsx(exceldata as any, { fileName: "Operations" });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">MIS Report</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardDescription>Successful Operations</CardDescription>
            <CardTitle className="flex items-end">
              <span className="text-4xl font-bold">
                {data?.info.totalSuccess && (
                  <AnimatedNumbers animateToNumber={data?.info.totalSuccess} />
                )}
              </span>
              <span className="text-muted-foreground ml-2">
                ({data?.info.successPercentage.toFixed(1)} %)
              </span>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Errors</CardDescription>
            <CardTitle className="flex items-end">
              <span className="text-4xl font-bold">
                {data?.info.totalErrors && (
                  <AnimatedNumbers animateToNumber={data?.info.totalErrors} />
                )}
              </span>
              <span className="text-muted-foreground ml-2">
                ({data?.info.errorPercentage.toFixed(1)}%)
              </span>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Error Categories</CardDescription>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <h4 className="text-lg font-semibold">Validation</h4>
                <p className="text-muted-foreground">
                  {data?.info.totalValidationErrors} (
                  {data?.info.validationPercentage.toFixed(1)}%)
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Server</h4>
                <p className="text-muted-foreground">
                  {data?.info.totalServerError} (
                  {data?.info.serverPercentage.toFixed(1)}%)
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Unauthorized</h4>
                <p className="text-muted-foreground">
                  {data?.info.totalUnauthorizedErrors} (
                  {data?.info.unauthorizedPercentage.toFixed(1)}%)
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
      <div className="mt-12">
        {!(isLoading || error) && data && (
          <Chart
            downloadHandler={downloadFile}
            chartinfo={data.chartinfo}
            setTimeRange={setTimeRange}
            timeRange={timeRange}
          />
        )}
      </div>
    </div>
  );
}
