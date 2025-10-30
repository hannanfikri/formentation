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
      },
    }),
    { name: "FormStore" }
  )
);
