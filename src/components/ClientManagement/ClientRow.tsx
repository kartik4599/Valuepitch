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
import { modalType } from "./ClientManagement";

interface ClientRowProps {
  setModelstate: React.Dispatch<
    React.SetStateAction<{
      modalType: modalType;
      data: any;
    } | null>
  >;
}

const ClientRow = ({ setModelstate }: ClientRowProps) => {
  return (
    <TableRow>
      <TableCell className="font-medium">Bob Johnson</TableCell>
      <TableCell>bob@example.com</TableCell>
      <TableCell>
        <Badge variant="outline" className="bg-green-500 text-red-50">
          Admin
        </Badge>
      </TableCell>
      <TableCell>
        <Badge variant="outline" className="bg-green-500 text-red-50">
          Admin
        </Badge>
      </TableCell>
      <TableCell>
        <Badge variant="outline" className="bg-red-500 text-red-50">
          Suspended
        </Badge>
      </TableCell>
      <TableCell className="text-right">
        <TooltipProvider delayDuration={100}>
          <div className="flex items-center justify-end gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => setModelstate({ data: {}, modalType: "view" })}
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
                  onClick={() => setModelstate({ data: {}, modalType: "edit" })}
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
                    setModelstate({ data: {}, modalType: "delete" })
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

export default ClientRow;
