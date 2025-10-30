import { useForm } from "react-hook-form";
import type { PersonalDetailsFormData } from "../types/forms";

export const usePersonalDetails = () => {
  const formMethods = useForm<PersonalDetailsFormData>();

  const onSubmit = (formData: PersonalDetailsFormData) => {
    console.log("Personal Details Submitted:", formData);
    // Handle form submission logic here
  }
  return {
    formMethods,
    onSubmit,
  };
};
