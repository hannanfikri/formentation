import { personalDetailsSchema } from "@/schemas";
import { useFormStore } from "@/stores";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { PersonalDetailsFormData } from "../types/forms";

export const usePersonalDetails = () => {
  const formStore = useFormStore((state) => state.forms.personalDetails);
  const formMethods = useForm<PersonalDetailsFormData>({
    defaultValues: formStore,
    resolver: zodResolver(personalDetailsSchema),
  });
  const setPersonalDetails = useFormStore(
    (state) => state.setters.setPersonalDetails
  );

  const onSubmit = (formData: PersonalDetailsFormData) => {
    console.log("Personal Details Submitted:", formData);
    setPersonalDetails(formData);
  };
  return {
    formMethods,
    onSubmit,
  };
};
