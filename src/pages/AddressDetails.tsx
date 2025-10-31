import { AddressDetailsForm } from "@/components/forms";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useAddressDetails, useRoutes } from "@/hooks";
import { ArrowLeft } from "lucide-react";
import { FormProvider } from "react-hook-form";

const AddressDetails: React.FC = () => {
  const { formMethods, onSubmit } = useAddressDetails();
  const { onBack } = useRoutes();
  return (
    <Card className="w-full">
      <CardHeader className="text-4xl font-bold">
        Address Details Form
      </CardHeader>
      <CardContent>
        <FormProvider {...formMethods}>
          <form onSubmit={formMethods.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-8">
              <AddressDetailsForm />
              <div className="flex gap-3 justify-center">
                <Button onClick={onBack}>
                  <div className="flex gap-2 items-center mx-auto cursor-pointer">
                    <ArrowLeft />
                    <span>Back</span>
                  </div>
                </Button>
                <Button type="submit" className="cursor-pointer">
                  <span>Submit</span>
                </Button>
              </div>
            </div>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
};

export default AddressDetails;
