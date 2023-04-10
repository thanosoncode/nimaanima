interface FieldsetProps {
  htmlFor: string;
  label: string;
  value: string | number;
  type: "text" | "number" | "file";
  inputProps?: { multiple: boolean };
  handleProductInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Fieldset: React.FC<FieldsetProps> = ({
  handleProductInfoChange,
  htmlFor,
  label,
  value,
  type,
  inputProps,
}) => {
  return (
    <fieldset className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        min={0}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        id={htmlFor}
        name={htmlFor}
        value={value}
        type={type}
        {...inputProps}
        onChange={handleProductInfoChange}
      />
    </fieldset>
  );
};
export default Fieldset;
