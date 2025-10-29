import { useForm } from "react-hook-form";
import type { PersonalDetailsForm } from "../types/forms";

export const usePersonalDetails = () => {
  const formMethods = useForm<PersonalDetailsForm>();
  return {
    formMethods,
  };
};
