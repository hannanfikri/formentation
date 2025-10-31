import React from "react";
import { Input } from "../ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "../ui/input-group";
import { Label } from "../ui/label";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error: string | undefined;
  inputGroup?: string;
};

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, inputGroup, ...props }, ref) => {
    return (
      <div>
        <div className="flex flex-col gap-2">
          <Label>{label}</Label>
          {inputGroup ? (
            <InputGroup>
              <InputGroupAddon>
                <InputGroupText>{inputGroup}</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput ref={ref} {...props} />
            </InputGroup>
          ) : (
            <Input
              className="border border-gray-300 rounded-md p-2"
              ref={ref}
              {...props}
            />
          )}
        </div>
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
    );
  }
);
