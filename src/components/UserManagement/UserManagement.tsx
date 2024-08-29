import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { useState } from "react";
import { modalType } from "../ClientManagement/ClientManagement";
import UserRow from "./UserRow";
import UserModal from "./UserModal";

const UserManagement = () => {
  const [modelstate, setModelstate] = useState<{
    modalType: modalType;
    data: any;
  } | null>(null);

  return (
    <>
      <main className="h-screen flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-[1200px] grid gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">User Management</h1>
            <Button
              onClick={() => setModelstate({ data: {}, modalType: "create" })}
              size="sm">
              Add User
            </Button>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <UserRow setModelstate={setModelstate} />
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
      <UserModal modelstate={modelstate} setModelstate={setModelstate} />
    </>
  );
};

export default UserManagement;
