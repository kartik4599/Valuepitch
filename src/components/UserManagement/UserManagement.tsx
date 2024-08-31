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
import { fetcher } from "@/lib/server";
import useSwr from "swr";
import { PiSpinnerGapThin } from "react-icons/pi";

export interface UserData {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  industry?: { name: string; id: string; type: string };
}

const UserManagement = () => {
  const [modelstate, setModelstate] = useState<{
    modalType: modalType;
    data: string;
  } | null>(null);

  const {
    data: userData,
    mutate,
    isLoading,
  } = useSwr<UserData[]>("/user", fetcher);

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center">
        <PiSpinnerGapThin className="h-8 w-8 animate-spin" />;
      </div>
    );
  }

  return (
    <>
      <main className="h-screen flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-[1200px] grid gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">User Management</h1>
            <Button
              onClick={() => setModelstate({ data: "", modalType: "create" })}
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
                  <TableHead>Industry</TableHead>
                  <TableHead>Industry Type</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userData?.map((user) => (
                  <UserRow
                    key={user.id}
                    user={user}
                    setModelstate={setModelstate}
                  />
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
      <UserModal
        mutate={mutate}
        modelstate={modelstate}
        setModelstate={setModelstate}
      />
    </>
  );
};

export default UserManagement;
