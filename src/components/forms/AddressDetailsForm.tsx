import { useFormContext } from "react-hook-form";
import { TextInput } from "../common/TextInput";
import type { AddressDetailsFormData } from "@/types/forms";

export const AddressDetailsForm = () => {
    const { register, formState: { errors } } = useFormContext<AddressDetailsFormData>();
    return (
        <div className="flex flex-col gap-5">
          <TextInput
            {...register("address1")}
            autoComplete="street-address"
            placeholder="Jalan Alamat..."
            label="Address 1"
            error={errors.address1?.message}
          />
          <TextInput
            {...register("address2")}
            placeholder="123 Main St..."
            label="Address 2"
            error={errors.address2?.message}
          />
          <TextInput
            {...register("city")}
            placeholder="123 Main St..."
            label="City"
            error={errors.city?.message}
          />
          <TextInput
            {...register("state")}
            placeholder="123 Main St..."
            label="State"
            error={errors.state?.message}
          />
          <TextInput
            {...register("postalCode")}
            placeholder="123 Main St..."
            label="Postal Code"
            error={errors.postalCode?.message}
          />
        </div>
      );
}