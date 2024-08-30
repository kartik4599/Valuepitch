import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
  NavigationMenu,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { PiPackageFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { logoutUser } from "@/redux/user-slice";

interface Headerinfo {
  name: string;
  options: {
    name: string;
    description: string;
    path: string;
  }[];
}

const Header = () => {
  const user = useSelector((state: RootState) => state.user);
  const [headerData, setHeaderData] = useState<Headerinfo[]>([]);
  const dipatch = useDispatch();

  useEffect(() => {
    const data: Headerinfo[] = [{ name: "Management", options: [] }];

    if (
      user.data.type === "client" ||
      user.data.role === "admin" ||
      user.data.role === "superadmin"
    ) {
      data[0].options.push({
        name: "User Management",
        description: "Manage user accounts and profiles.",
        path: "/user",
      });
    }

    if (user.data.role === "superadmin") {
      data[0].options.push({
        name: "Client Management",
        description: "Manage client accounts and profiles.",
        path: "/client",
      });
      data.push({
        name: "Reporting",
        options: [
          {
            name: "Management Information System",
            description: "View operation activity and engagement metrics.",
            path: "/mis-report",
          },
        ],
      });
    }
    setHeaderData(data);
  }, [user.data.id]);

  return (
    <header className="bg-muted/40 px-4 md:px-6 flex items-center justify-between h-14 lg:h-[60px]">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 font-semibold">
          <PiPackageFill className="size-7" />
          <span className="text-xl font-semibold font-mono">Valuepitch</span>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            {headerData.map(({ name, options }) => (
              <NavigationMenuItem key={name}>
                <NavigationMenuTrigger>{name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] p-2">
                    {options.map(({ name, description, path }) => (
                      <NavigationMenuLink asChild key={name}>
                        <Link to={path}>
                          <div className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                            <div className="text-sm font-medium leading-none group-hover:underline">
                              {name}
                            </div>
                            <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {description}
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full">
              <img
                src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95JTIwd2l0aCUyMGdsYXNzZXN8ZW58MHx8MHx8fDA%3D"
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
                style={{ aspectRatio: "36/36", objectFit: "cover" }}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link to="/profile">
              <DropdownMenuItem>My Account</DropdownMenuItem>
            </Link>
            <Link to="/login">
              <DropdownMenuItem onClick={() => dipatch(logoutUser())}>
                Logout
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
