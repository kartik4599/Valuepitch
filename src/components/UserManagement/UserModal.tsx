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
import { Textarea } from "@/components/ui/textarea";
import { modalType } from "../ClientManagement/ClientManagement";
import { ComboboxDemo } from "../ui/combobox";

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
        title: "Add New User",
        subtitle: "Enter the details for a new user.",
        button: "Create User",
      };
    case "edit":
      return {
        title: "Edit User",
        subtitle: "Edit the details for a user.",
        button: "Update User",
      };
    case "view":
      return {
        title: "View User Detail",
        subtitle: "View the details for a user.",
        button: "Close",
      };
    case "delete":
      return {
        title: "Delete User",
        subtitle: "Delete the details for a user.",
        button: "Delete User",
      };
    default:
      return {
        title: "",
        subtitle: "",
        button: "",
      };
  }
};

const UserModal = ({ modelstate, setModelstate }: ClientModalProps) => {
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
                    <Label htmlFor="name">User Name</Label>
                    <Input id="name" placeholder="Enter user name" />
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
                    <Label htmlFor="industry">Industry</Label>
                    <ComboboxDemo
                      options={["1st Options", "2nd Options", "3rd Options"]}
                      placeholder="Enter industry name"
                      setValue={() => {}}
                      value=""
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

export default UserModal;
