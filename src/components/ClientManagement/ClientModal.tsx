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
import { ClientData, modalType } from "./ClientManagement";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ClientForm, cn, employeeFormResolver } from "@/lib/utils";
import { toast } from "sonner";
import {
  createClient,
  deleteClient,
  getClientDetail,
  updateClient,
} from "@/lib/server";
import { KeyedMutator } from "swr";

interface ClientModalProps {
  modelstate: {
    modalType: modalType;
    data: string;
  } | null;
  setModelstate: React.Dispatch<
    React.SetStateAction<{
      modalType: modalType;
      data: string;
    } | null>
  >;
  mutate: KeyedMutator<ClientData[]>;
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

const ClientModal = ({
  modelstate,
  setModelstate,
  mutate,
}: ClientModalProps) => {
  const open = Boolean(modelstate);
  const [showPassword, setShowPassword] = useState(false);

  const [{ title, button, subtitle }, setModelData] = useState({
    title: "",
    subtitle: "",
    button: "",
  });

  const { handleSubmit, formState, register, setValue, reset, watch } =
    useForm<ClientForm>({
      resolver: employeeFormResolver,
    });

  const { errors } = formState as unknown as {
    errors: { [key: string]: string };
  };

  const submitHandler = async (payload: ClientForm) => {
    try {
      if (modelstate?.modalType === "create") {
        const data = await createClient(payload);
        toast.success(data.message);
      }
      if (modelstate?.modalType === "edit") {
        const data = await updateClient(modelstate.data, payload);
        toast.success(data.message);
      }
      mutate();
      setModelstate(null);
    } catch (e: any) {
      const message = e?.response?.data?.message || "Error Occured";
      toast.error(message);
    }
  };

  const deleteHandler = async () => {
    try {
      const data = await deleteClient(modelstate?.data || "");
      toast.success(data.message);
      mutate();
      setModelstate(null);
    } catch (e: any) {
      const message = e?.response?.data?.message || "Error Occured";
      toast.error(message);
    }
  };

  const preFillData = async (id: string) => {
    const { data } = await getClientDetail(id);
    setValue("name", data.name);
    setValue("email", data.email);
    setValue("password", data.password);
    setValue("phone", data.phone);
    setValue("address", data.address);
    setValue("industryName", data.industry.name);
    setValue("industrySize", data.industry.size);
    setValue("industryType", data.industry.type);
    setValue("site", data.industry.site);
    setValue("notes", data.industry.notes);
  };

  useEffect(() => {
    setModelData(getTitleandSubtitle(modelstate?.modalType));

    if (
      (modelstate?.modalType === "view" || modelstate?.modalType === "edit") &&
      modelstate?.data
    ) {
      preFillData(modelstate.data);
    }

    return reset();
  }, [modelstate]);

  return (
    <Dialog open={open} onOpenChange={() => setModelstate(null)}>
      <DialogContent className="p-0">
        <Card className="w-full max-w-2xl max-h-[700px] overflow-y-auto border-none">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{subtitle} </CardDescription>
          </CardHeader>
          {modelstate?.modalType !== "delete" && (
            <CardContent>
              <form onSubmit={handleSubmit(submitHandler)}>
                <fieldset
                  disabled={modelstate?.modalType === "view"}
                  className="grid gap-6">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label
                        htmlFor="name"
                        className={cn(errors.name && "text-red-500")}>
                        Client Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter client name"
                        {...register("name")}
                      />
                      <span className="text-red-500 text-sm">
                        {errors?.name}
                      </span>
                    </div>
                    <div className="grid gap-2">
                      <Label
                        htmlFor="email"
                        className={cn(errors.email && "text-red-500")}>
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter email"
                        {...register("email")}
                      />
                      <span className="text-red-500 text-sm">
                        {errors?.email}
                      </span>
                    </div>
                    <div className="grid gap-2">
                      <Label
                        htmlFor="email"
                        className={cn(errors.password && "text-red-500")}>
                        Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="email"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter password"
                          {...register("password")}
                        />
                        <div
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center">
                          {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                        </div>
                      </div>
                      <span className="text-red-500 text-sm">
                        {errors?.password}
                      </span>
                    </div>
                    <div className="grid gap-2">
                      <Label
                        htmlFor="phone"
                        className={cn(errors.phone && "text-red-500")}>
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter phone number"
                        {...register("phone")}
                      />
                      <span className="text-red-500 text-sm">
                        {errors?.phone}
                      </span>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea
                        id="address"
                        rows={3}
                        placeholder="Enter address"
                        {...register("address")}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label
                        htmlFor="name"
                        className={cn(errors.industryName && "text-red-500")}>
                        Industry Name
                      </Label>
                      <Input
                        placeholder="Enter industry name"
                        {...register("industryName")}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label
                        htmlFor="industry"
                        className={cn(errors.industryType && "text-red-500")}>
                        Industry Type
                      </Label>
                      <Select
                        value={watch("industryType")}
                        onValueChange={(value) =>
                          setValue("industryType", value)
                        }>
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
                      <Label
                        htmlFor="company-size"
                        className={cn(errors.industrySize && "text-red-500")}>
                        Company Size
                      </Label>
                      <Select
                        value={watch("industrySize")}
                        onValueChange={(value) =>
                          setValue("industrySize", value)
                        }>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">
                            51-200 employees
                          </SelectItem>
                          <SelectItem value="201-500">
                            201-500 employees
                          </SelectItem>
                          <SelectItem value="500+">500+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        placeholder="Enter website URL"
                        {...register("site")}
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      rows={3}
                      placeholder="Enter any additional notes"
                      {...register("notes")}
                    />
                  </div>
                  <Button type="submit" className="ml-auto">
                    {button}
                  </Button>
                </fieldset>
              </form>
            </CardContent>
          )}
          {modelstate?.modalType === "delete" && (
            <CardFooter>
              <Button
                onClick={deleteHandler}
                variant={"destructive"}
                type="submit"
                className="ml-auto">
                {button}
              </Button>
            </CardFooter>
          )}
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ClientModal;
