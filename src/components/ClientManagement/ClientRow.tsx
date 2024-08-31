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
import { ClientData, modalType } from "./ClientManagement";

interface ClientRowProps {
  data: ClientData;
  setModelstate: React.Dispatch<
    React.SetStateAction<{
      modalType: modalType;
      data: string;
    } | null>
  >;
}

const ClientRow = ({ setModelstate, data }: ClientRowProps) => {
  return (
    <TableRow>
      <TableCell className="font-medium">{data.name}</TableCell>
      <TableCell>{data.email}</TableCell>
      <TableCell>{data.industry.name}</TableCell>
      <TableCell>
        <Badge variant="outline">{data.industry.type}</Badge>
      </TableCell>
      <TableCell className="text-right">
        <TooltipProvider delayDuration={100}>
          <div className="flex items-center justify-end gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() =>
                    setModelstate({ data: data.id, modalType: "view" })
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
                    setModelstate({ data: data.id, modalType: "edit" })
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
                    setModelstate({ data: data.id, modalType: "delete" })
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
