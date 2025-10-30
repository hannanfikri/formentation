import type { PersonalDetailsFormData } from "@/types/forms";
import { useFormContext } from "react-hook-form";
import { TextInput } from "../common/TextInput";

export const PersonalDetailsForm = () => {
  const { register } = useFormContext<PersonalDetailsFormData>();
  return (
    <>
      <TextInput {...register("firstName")} placeholder="First Name" label="First Name"/>
    </>
  );
};
