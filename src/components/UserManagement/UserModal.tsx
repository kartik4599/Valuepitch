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
import { useEffect, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useForm } from "react-hook-form";
import { cn, UserForm, userFormResolver } from "@/lib/utils";
import useSwr from "swr";
import {
  createUser,
  deleteUser,
  fetcher,
  getUserDetail,
  updateUser,
} from "@/lib/server";
import { toast } from "sonner";

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
  mutate: any;
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

const UserModal = ({ modelstate, setModelstate, mutate }: ClientModalProps) => {
  const open = Boolean(modelstate);
  const [showPassword, setShowPassword] = useState(false);
  const [{ title, button, subtitle }, setModelData] = useState({
    title: "",
    subtitle: "",
    button: "",
  });

  const { data: industryData } = useSwr("/industry", fetcher);

  const { handleSubmit, formState, register, reset, setValue, watch } =
    useForm<UserForm>({
      resolver: userFormResolver,
    });

  const { errors } = formState as unknown as {
    errors: { [key: string]: string };
  };

  const preFillData = async (id: string) => {
    const { data } = await getUserDetail(id);
    setValue("name", data.name);
    setValue("email", data.email);
    setValue("password", data.password);
    setValue("phone", data.phone);
    setValue("address", data.address);
    setValue("role", data.role);
    setValue("industryId", data.industry.id);
  };

  const submitHandler = async (payload: UserForm) => {
    try {
      if (modelstate?.modalType === "create") {
        const data = await createUser(payload);
        toast.success(data.message);
      }
      if (modelstate?.modalType === "edit") {
        const data = await updateUser(modelstate.data, payload);
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
      const data = await deleteUser(modelstate?.data || "");
      toast.success(data.message);
      mutate();
      setModelstate(null);
    } catch (e: any) {
      const message = e?.response?.data?.message || "Error Occured";
      toast.error(message);
    }
  };

  useEffect(() => {
    setModelData(getTitleandSubtitle(modelstate?.modalType));

    if (
      (modelstate?.modalType === "view" || modelstate?.modalType === "edit") &&
      modelstate?.data
    ) {
      preFillData(modelstate.data);
    }

    return () => reset();
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
              <form
                className="grid gap-6"
                onSubmit={handleSubmit(submitHandler)}>
                <fieldset
                  disabled={modelstate?.modalType === "view"}
                  className="grid gap-4">
                  <div className="grid gap-2">
                    <Label
                      htmlFor="name"
                      className={cn(errors.name && "text-red-500")}>
                      User Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter user name"
                      {...register("name")}
                    />
                    <span className="text-red-500 text-sm">{errors?.name}</span>
                  </div>
                  <div className="grid gap-2">
                    <Label
                      htmlFor="email"
                      className={cn(errors.name && "text-red-500")}>
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
                    <RadioGroup
                      onValueChange={(value: "admin" | "user") =>
                        setValue("role", value)
                      }
                      value={watch("role")}
                      className="flex flex-col space-y-1">
                      <Label className={cn(errors.role && "text-red-500")}>
                        User Role
                      </Label>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="admin" id="admin" />
                          <Label
                            htmlFor="admin"
                            className="font-normal cursor-pointer">
                            Admin
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="user" id="user" />
                          <Label
                            htmlFor="user"
                            className="font-normal cursor-pointer">
                            User
                          </Label>
                        </div>
                      </div>
                      <span className="text-red-500 text-sm">
                        {errors?.role}
                      </span>
                    </RadioGroup>
                  </div>
                  <div className="grid gap-2">
                    <Label
                      htmlFor="industry"
                      className={cn(errors.industryId && "text-red-500")}>
                      Industry
                    </Label>
                    <ComboboxDemo
                      options={industryData}
                      placeholder="Enter industry name"
                      setValue={(value) => setValue("industryId", value)}
                      value={watch("industryId")}
                    />
                    <span className="text-red-500 text-sm">
                      {errors?.industryId}
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

export default UserModal;
