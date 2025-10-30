export type FormStore = {
  forms: {
    personalDetails: {
      firstName: string;
      lastName: string;
      email: string;
    };
  }
  setters: {
    setPersonalDetails: (details: FormStore["forms"]["personalDetails"]) => void;
  }
};
