import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ComboboxDemoProps {
  placeholder: string;
  options: { id: string; name: string }[];
  setValue: (value: string) => void;
  value: string;
}

export function ComboboxDemo({
  options,
  placeholder,
  setValue,
  value,
}: ComboboxDemoProps) {
  const [open, setOpen] = React.useState(false);

  const filterFunction = (value: string, search: string) => {
    const option = options.find(({ id }) => id === value);
    if (!option) return false;
    return option.name.toLowerCase().includes(search.toLowerCase());
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between", !value && "text-slate-500")}>
          {options.find(({ id }) => id === value)?.name || placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command filter={filterFunction}>
          <CommandInput placeholder={placeholder + " ..."} />
          <CommandList>
            <CommandEmpty>No company found.</CommandEmpty>
            <CommandGroup>
              {options.map(({ id, name }) => (
                <CommandItem
                  key={id}
                  value={id}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    setOpen(false);
                  }}>
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
