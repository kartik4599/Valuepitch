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

const Header = () => {
  return (
    <header className="bg-muted/40 px-4 md:px-6 flex items-center justify-between h-14 lg:h-[60px]">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 font-semibold">
          <PiPackageFill className="size-7" />
          <span className="text-xl font-semibold font-mono">Valuepitch</span>
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
              <NavigationMenuTrigger>Reporting</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] p-2">
                  <NavigationMenuLink asChild>
                    <Link to={"/mis-report"}>
                      <div className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Management Information System
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          View operation activity and engagement metrics.
                        </div>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
