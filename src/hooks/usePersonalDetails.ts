import { dobToAge } from "@/helper/personal-details";
import { personalDetailsSchema, type PersonalDetails } from "@/schemas";
import { useFormStore } from "@/stores";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { PersonalDetailsFormData } from "../types/forms";

export const usePersonalDetails = () => {
  const formStore = useFormStore((state) => state.forms.personalDetails);
  const formMethods = useForm<PersonalDetails>({
    defaultValues: {
      ...formStore,
      age: dobToAge(formStore.dob).toString(),
    },
    resolver: zodResolver(personalDetailsSchema),
  });
  const navigate = useNavigate();
  const setPersonalDetails = useFormStore(
    (state) => state.setters.setPersonalDetails
  );

  const onSubmit = (formData: PersonalDetailsFormData) => {
    setPersonalDetails(formData);
    navigate("/address-details");
  };
  return {
    formMethods,
    onSubmit,
  };
};
