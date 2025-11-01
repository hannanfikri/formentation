import type { FormStore } from "@/types/stores";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useFormStore = create<FormStore>()(
  devtools(
    (set) => ({
      forms: {
        personalDetails: {
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          dob: new Date().toISOString().split('T')[0],
          age: "",
        },
        addressDetails: {
          address1: "",
          address2: "",
          city: "",
          state: "",
          postalCode: "",
        },
      },
      setters: {
        setPersonalDetails: (details: FormStore["forms"]["personalDetails"]) =>
          set((state: FormStore) => ({
            forms: {
              ...state.forms,
              personalDetails: details,
            },
          })),
        setAddressDetails: (details: FormStore["forms"]["addressDetails"]) =>
          set((state: FormStore) => ({
            forms: {
              ...state.forms,
              addressDetails: details,
            },
          })),
      },
    }),
    { name: "FormStore" }
  )
);
