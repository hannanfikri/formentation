import { AddressDetailsForm } from "@/components/forms";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useAddressDetails } from "@/hooks";
import { FormProvider } from "react-hook-form";

const AddressDetails: React.FC = () => {
  const { formMethods, onSubmit } = useAddressDetails();
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

              <Button
                size={"lg"}
                type="submit"
                className="flex gap-2 mx-auto cursor-pointer"
              >
                <span>Submit</span>
              </Button>
            </div>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
};

export default AddressDetails;
