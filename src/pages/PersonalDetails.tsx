import { FormProvider } from "react-hook-form";
import { usePersonalDetails } from "../hooks";
import { Input } from "@/components/ui/input";

const PersonalDetails: React.FC = () => {
  const { formMethods } = usePersonalDetails();
  const { register } = formMethods;
  return (
    <div>
      <h1>Personal Details</h1>
      <FormProvider {...formMethods}>
        <form>
          <Input {...register("firstName")} placeholder="First Name" />
        </form>
      </FormProvider>
    </div>
  );
};

export default PersonalDetails;
