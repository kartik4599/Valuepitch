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

export type modalType = "create" | "edit" | "view" | "delete";

const ClientManagement = () => {
  const [modelstate, setModelstate] = useState<{
    modalType: modalType;
    data: any;
  } | null>(null);

  return (
    <>
      <main className="h-screen flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-[1200px] grid gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Client Management</h1>
            <Button
              onClick={() => setModelstate({ data: {}, modalType: "create" })}
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
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <ClientRow setModelstate={setModelstate} />
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
      <ClientModal modelstate={modelstate} setModelstate={setModelstate} />
    </>
  );
};

export default ClientManagement;
