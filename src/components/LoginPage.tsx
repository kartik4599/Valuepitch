import { cn } from "@/lib/utils";
import { FaSpinner } from "react-icons/fa";
import { PiPackageFill } from "react-icons/pi";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const LoginPage = () => {
  const isSignIn = true;
  return (
    <div className="relative grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div
        className={cn(
          "hidden lg:flex min-h-[100dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8",
          {
            "bg-background": !isSignIn,
            "bg-primary": isSignIn,
          }
        )}>
        <div className="mx-auto max-w-md text-center">
          <div
            className={cn(
              "inline-flex items-center justify-center rounded-full bg-background p-4 text-6xl text-primary-foreground",
              !isSignIn && "bg-primary"
            )}>
            <PiPackageFill
              className={cn(
                "h-14 w-14 text-primary",
                !isSignIn && "text-background"
              )}
            />
          </div>
          <h2 className="text-muted text-3xl font-semibold mt-4 font-mono">
            Valuepitch
          </h2>
          <p
            className={cn(
              "mt-4 text-lg leading-8 text-muted-foreground",
              isSignIn && "text-primary-foreground"
            )}>
            Securely store and share your passwords and secret files with ease.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-muted p-8 lg:p-12">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text-muted-foreground">
              Enter your email and password to access your account.
            </p>
          </div>
          <form
            className="space-y-4"
            //   onSubmit={handleSubmit(loginHandler)}
          >
            <div className="space-y-2">
              <Label
                htmlFor="email"
                // className={cn(errors.email && "text-red-500")}
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                // {...register("email")}
              />
              {/* <span className="text-red-500 text-sm">{errors?.email}</span> */}
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="password"
                // className={cn(errors.email && "text-red-500")}
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                //   {...register("password")}
              />
              {/* <span className="text-red-500 text-sm">{errors?.password}</span> */}
            </div>
            <Button type="submit" className="w-full">
              {true ? (
                <>
                  <FaSpinner className="animate-spin text-xl mx-2" />
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
