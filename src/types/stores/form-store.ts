import type { AddressDetailsFormData, PersonalDetailsFormData } from "../forms";

export type FormStore = {
  forms: {
    personalDetails: PersonalDetailsFormData;
    addressDetails: AddressDetailsFormData;
  };
  setters: {
    setPersonalDetails: (details: FormStore["forms"]["personalDetails"]) => void;
    setAddressDetails: (details: FormStore["forms"]["addressDetails"]) => void;
  };
};
