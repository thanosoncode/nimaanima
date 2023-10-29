import { UseFormRegister } from 'react-hook-form';
import { ProductData } from '../AddNewProduct';

interface FieldsetProps {
  id: 'name' | 'price' | 'description' | 'category' | 'images';
  label: string;
  info?: string;
  value: string | number;
  type: 'text' | 'number' | 'file';
  inputProps?: { multiple: boolean; accept?: string };
  register?: UseFormRegister<ProductData>;
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
    register && id === 'price'
      ? { ...register(id, { valueAsNumber: true }) }
      : register && register(id);

  return (
    <fieldset className='flex flex-col gap-2'>
      <label htmlFor={id} className='block text-sm font-medium text-gray-900'>
        {label}
        {info && <p className='text-sm'>{info}</p>}
      </label>
      <input
        min={0}
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
        id={id}
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
