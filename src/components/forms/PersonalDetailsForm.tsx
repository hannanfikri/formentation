import type { PersonalDetailsFormData } from "@/types/forms";
import { useFormContext } from "react-hook-form";
import { TextInput } from "../common/TextInput";

export const PersonalDetailsForm = () => {
  const { register } = useFormContext<PersonalDetailsFormData>();
  return (
    <div className="flex flex-col gap-5">
      <TextInput
        {...register("firstName")}
        placeholder="Ahmad..."
        label="First Name"
      />
      <TextInput
        {...register("lastName")}
        placeholder="Bin Ahmad..."
        label="Last Name"
      />
      <TextInput
        {...register("email")}
        type="email"
        placeholder="ahmad@email.com..."
        label="Email"
      />
      <TextInput
        {...register("phoneNumber")}
        placeholder="011-1111 1111..."
        label="Phone Number"
      />
    </div>
  );
};
