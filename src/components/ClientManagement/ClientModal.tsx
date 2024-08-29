import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { modalType } from "./ClientManagement";

interface ClientModalProps {
  modelstate: {
    modalType: modalType;
    data: any;
  } | null;
  setModelstate: React.Dispatch<
    React.SetStateAction<{
      modalType: modalType;
      data: any;
    } | null>
  >;
}

const getTitleandSubtitle = (modalType?: modalType) => {
  switch (modalType) {
    case "create":
      return {
        title: "Add New Client",
        subtitle: "Enter the details for a new client.",
        button: "Create Client",
      };
    case "edit":
      return {
        title: "Edit Client",
        subtitle: "Edit the details for a client.",
        button: "Update Client",
      };
    case "view":
      return {
        title: "View Client Detail",
        subtitle: "View the details for a client.",
        button: "Close",
      };
    case "delete":
      return {
        title: "Delete Client",
        subtitle: "Delete the details for a client.",
        button: "Delete Client",
      };
    default:
      return {
        title: "",
        subtitle: "",
        button: "",
      };
  }
};

const ClientModal = ({ modelstate, setModelstate }: ClientModalProps) => {
  const open = Boolean(modelstate);
  const { title, subtitle, button } = getTitleandSubtitle(
    modelstate?.modalType
  );

  return (
    <Dialog open={open} onOpenChange={() => setModelstate(null)}>
      <DialogContent>
        <Card className="w-full max-w-2xl max-h-[700px] overflow-y-auto border-none">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{subtitle} </CardDescription>
          </CardHeader>
          {modelstate?.modalType !== "delete" && (
            <CardContent>
              <form className="grid gap-6">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Client Name</Label>
                    <Input id="name" placeholder="Enter client name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter email" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      rows={3}
                      placeholder="Enter address"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Industry Name</Label>
                    <Input id="name" placeholder="Enter industry name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="industry">Industry Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="manufacturing">
                          Manufacturing
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="company-size">Company Size</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">
                          201-500 employees
                        </SelectItem>
                        <SelectItem value="500+">500+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" placeholder="Enter website URL" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    rows={3}
                    placeholder="Enter any additional notes"
                  />
                </div>
              </form>
            </CardContent>
          )}
          <CardFooter>
            <Button
              variant={
                modelstate?.modalType === "delete" ? "destructive" : "default"
              }
              type="submit"
              className="ml-auto">
              {button}
            </Button>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ClientModal;
