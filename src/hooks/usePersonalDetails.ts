import { useForm } from "react-hook-form";
import type { PersonalDetailsFormData } from "../types/forms";
import { useFormStore } from "@/stores";
import { useEffect } from "react";

export const usePersonalDetails = () => {
  const formStore = useFormStore((state) => state.forms.personalDetails);
  const formMethods = useForm<PersonalDetailsFormData>({
    defaultValues: formStore,
  });
  const setPersonalDetails = useFormStore(
    (state) => state.setters.setPersonalDetails
  );

  useEffect(() => {
    console.log("Loaded personal details from store:", formStore);
  }, [formStore])

  const onSubmit = (formData: PersonalDetailsFormData) => {
    console.log("Personal Details Submitted:", formData);
    setPersonalDetails(formData);
  };
  return {
    formMethods,
    onSubmit,
  };
};
