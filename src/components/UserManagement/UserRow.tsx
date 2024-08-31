import { modalType } from "../ClientManagement/ClientManagement";
import { FaRegEye, FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { UserData } from "./UserManagement";
import { cn } from "@/lib/utils";

interface UserRowProps {
  setModelstate: React.Dispatch<
    React.SetStateAction<{
      modalType: modalType;
      data: string;
    } | null>
  >;
  user: UserData;
}

const UserRow = ({ setModelstate, user }: UserRowProps) => {
  return (
    <TableRow>
      <TableCell className="font-medium">{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <Badge
          variant="outline"
          className={cn(
            "bg-green-500 text-red-50",
            user.role === "user" && "bg-yellow-500"
          )}>
          {user.role}
        </Badge>
      </TableCell>
      <TableCell>{user.industry?.name}</TableCell>
      <TableCell>{user.industry?.type}</TableCell>
      <TableCell className="text-right">
        <TooltipProvider delayDuration={100}>
          <div className="flex items-center justify-end gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() =>
                    setModelstate({ data: user.id, modalType: "view" })
                  }
                  variant="outline"
                  size="icon">
                  <FaRegEye className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>View</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() =>
                    setModelstate({ data: user.id, modalType: "edit" })
                  }
                  variant="outline"
                  size="icon">
                  <MdEdit className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Edit</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() =>
                    setModelstate({ data: user.id, modalType: "delete" })
                  }
                  variant="outline"
                  size="icon">
                  <FaRegTrashAlt className="h-4 w-4 text-red-500" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Delete</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </TableCell>
    </TableRow>
  );
};

export default UserRow;
