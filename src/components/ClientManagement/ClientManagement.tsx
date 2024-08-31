import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import ClientModal from "./ClientModal";
import { useState } from "react";
import ClientRow from "./ClientRow";
import useSwr from "swr";
import { fetcher } from "@/lib/server";
import { PiSpinnerGapThin } from "react-icons/pi";

export type modalType = "create" | "edit" | "view" | "delete";

export interface ClientData {
  id: string;
  name: string;
  email: string;
  industry: {
    name: string;
    id: string;
    type: string;
  };
}

const ClientManagement = () => {
  const {
    data: clientData,
    isLoading,
    mutate,
  } = useSwr<ClientData[]>("/client", fetcher);

  const [modelstate, setModelstate] = useState<{
    modalType: modalType;
    data: string;
  } | null>(null);

  if (isLoading) {
    return <PiSpinnerGapThin className="h-8 w-8 animate-spin" />;
  }

  return (
    <>
      <main className="h-screen flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-7xl grid gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Client Management</h1>
            <Button
              onClick={() => setModelstate({ data: "", modalType: "create" })}
              size="sm">
              Add Client
            </Button>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Industry</TableHead>
                  <TableHead>Industry Type</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clientData?.map((data) => (
                  <ClientRow
                    key={data.id}
                    data={data}
                    setModelstate={setModelstate}
                  />
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
      <ClientModal
        mutate={mutate}
        modelstate={modelstate}
        setModelstate={setModelstate}
      />
    </>
  );
};

export default ClientManagement;
