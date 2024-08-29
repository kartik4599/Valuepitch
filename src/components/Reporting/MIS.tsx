import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Chart } from "../Chart";

export default function MISComponent() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">MIS Report</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardDescription>Successful Operations</CardDescription>
            <CardTitle>
              <span className="text-4xl font-bold">2,345</span>
              <span className="text-muted-foreground ml-2">(87%)</span>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Errors</CardDescription>
            <CardTitle>
              <span className="text-4xl font-bold">345</span>
              <span className="text-muted-foreground ml-2">(13%)</span>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Error Categories</CardDescription>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-semibold">Validation</h4>
                <p className="text-muted-foreground">145 (42%)</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Server</h4>
                <p className="text-muted-foreground">200 (58%)</p>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
      <div className="mt-12">
        <Chart />
      </div>
    </div>
  );
}
