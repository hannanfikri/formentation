import type { PersonalDetailsFormData } from "@/types/forms";
import { Controller, useFormContext } from "react-hook-form";
import { TextInput } from "../common/TextInput";
import { DatePicker } from "../common";

export const PersonalDetailsForm = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<PersonalDetailsFormData>();
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
        inputGroup="+60"
        error={errors.phoneNumber?.message}
      />
      <Controller
        name="dob"
        control={control}
        render={({ field: { value, onChange } }) => (
          <DatePicker
            label="Date of Birth"
            defValue={new Date(value)}
            onChange={onChange}
          />
        )}
      />
    </div>
  );
};
