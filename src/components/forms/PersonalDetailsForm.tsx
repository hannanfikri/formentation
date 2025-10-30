import type { PersonalDetailsFormData } from "@/types/forms";
import { useFormContext } from "react-hook-form";
import { TextInput } from "../common/TextInput";

export const PersonalDetailsForm = () => {
  const { register, formState: { errors } } = useFormContext<PersonalDetailsFormData>();
  return (
    <div className="flex flex-col gap-5">
      <TextInput
        {...register("firstName")}
        placeholder="Ahmad..."
        label="First Name"
        error={errors.firstName?.message}
      />
      <TextInput
        {...register("lastName")}
        placeholder="Bin Ahmad..."
        label="Last Name"
        error={errors.lastName?.message}
      />
      <TextInput
        {...register("email")}
        type="email"
        placeholder="ahmad@email.com..."
        label="Email"
        error={errors.email?.message}
      />
      <TextInput
        {...register("phoneNumber")}
        placeholder="011-1111 1111..."
        label="Phone Number"
        error={errors.phoneNumber?.message}
      />
    </div>
  );
};
