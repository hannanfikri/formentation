import { Input } from "../ui/input";
import React from "react";
import { Label } from "../ui/label";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <Label>{label}</Label>
        <Input
          className="border border-gray-300 rounded-md p-2"
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
