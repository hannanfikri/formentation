import { addressDetailsSchema, type AddressDetails } from "@/schemas";
import { useFormStore } from "@/stores";
import type { AddressDetailsFormData } from "@/types/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useAddressDetails = () => {
  const formStore = useFormStore((state) => state.forms.addressDetails);
  const formMethods = useForm<AddressDetails>({
    defaultValues: formStore,
    resolver: zodResolver(addressDetailsSchema)
  });
  const setAddressDetails = useFormStore(
    (state) => state.setters.setAddressDetails
  );
  const onSubmit = (formData: AddressDetailsFormData) => {
    setAddressDetails(formData);
  };
  return {
    formMethods,
    onSubmit,
  };
};
