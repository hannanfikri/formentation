import { PersonalDetailsForm } from "@/components/forms";
import { FormProvider } from "react-hook-form";
import { usePersonalDetails } from "../hooks";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const PersonalDetails: React.FC = () => {
  const { formMethods, onSubmit } = usePersonalDetails();
  return (
    <div className="container mx-auto max-w-1/2">
      <Card className="w-full">
        <CardHeader>Personal Details</CardHeader>
        <CardContent>
          <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit(onSubmit)}>
              <PersonalDetailsForm />
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalDetails;
