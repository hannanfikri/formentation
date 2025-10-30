import { PersonalDetailsForm } from "@/components/forms";
import { FormProvider } from "react-hook-form";
import { usePersonalDetails } from "../hooks";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const PersonalDetails: React.FC = () => {
  const { formMethods, onSubmit } = usePersonalDetails();
  return (
    <Card className="w-full">
      <CardHeader className="text-4xl font-bold">
        Personal Details Form
      </CardHeader>
      <CardContent>
        <FormProvider {...formMethods}>
          <form onSubmit={formMethods.handleSubmit(onSubmit)}>
            <PersonalDetailsForm />
          </form>

          <Button type="submit" className="flex gap-2">
            <span>Next Page</span>
            <ArrowRightIcon />
          </Button>
        </FormProvider>
      </CardContent>
    </Card>
  );
};

export default PersonalDetails;
