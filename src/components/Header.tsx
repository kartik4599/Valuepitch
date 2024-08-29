import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
  NavigationMenu,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { PiPackageFill } from "react-icons/pi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-muted/40 px-4 md:px-6 flex items-center justify-between h-14 lg:h-[60px]">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 font-semibold">
          <PiPackageFill className="size-7" />
          <span className="text-xl font-semibold">Valuepitch</span>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Management</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] p-2">
                  <NavigationMenuLink asChild>
                    <Link to={"/client"}>
                      <div className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Client Management
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Manage client accounts and profiles.
                        </div>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to={"/user"}>
                      <div className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          User Management
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Manage user accounts and profiles.
                        </div>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Admin Controls</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] p-2">
                  <NavigationMenuLink asChild>
                    <div className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Manage Roles
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Assign and manage user roles and permissions.
                      </div>
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <div className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Audit Logs
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Review user activity and system events.
                      </div>
                    </div>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Data Reporting</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] p-2">
                  <NavigationMenuLink asChild>
                    <div className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        User Analytics
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        View user activity and engagement metrics.
                      </div>
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <div className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Sales Reports
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Review sales data and revenue trends.
                      </div>
                    </div>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
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
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
