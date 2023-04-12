import { FieldValues, UseFormRegister } from "react-hook-form";
import { ProductInfo } from "../page";

interface FieldsetProps {
  id: "name" | "price" | "description" | "category" | "images";
  label: string;
  info?: string;
  value: string | number;
  type: "text" | "number" | "file";
  inputProps?: { multiple: boolean };
  register?: UseFormRegister<ProductInfo>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Fieldset: React.FC<FieldsetProps> = ({
  handleInputChange,
  id,
  label,
  value,
  type,
  inputProps,
  info,
  register,
}) => {
  const registerProps =
    register && id === "price"
      ? { ...register(id, { valueAsNumber: true }) }
      : register && register(id);

  return (
    <fieldset className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
        {info && <p className="text-sm">{info}</p>}
      </label>
      <input
        min={0}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        id={id}
        // name={id}
        value={value}
        type={type}
        {...inputProps}
        {...registerProps}
        onChange={handleInputChange}
      />
    </fieldset>
  );
};
export default Fieldset;
